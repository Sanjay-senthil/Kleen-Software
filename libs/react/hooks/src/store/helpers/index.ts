import { ActionsObservable, ofType } from 'redux-observable';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';

import { Action } from 'redux';
import { forkJoin, of } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { BaseApiService } from '@kleeen/frontend/utils';
import { ksGlobalAppErrors } from '@kleeen/react/state-management';

export const generateId = (id?: string): string => id || uuid();
const { actions: globalAppErrorsActions } = ksGlobalAppErrors;
const globalErrorActions = globalAppErrorsActions.actions;

/**
 * GraphQL/Helpers/doRequest
 * @desc Generic implementation to reduce boilerplate doing request with rxjs
 *
 * @param action$ Rxjs action
 * @param actionType EPIC action type
 * @param requestAction method to generate the request action
 * @param onSuccess method to handle the response when success
 * @param onError method to handle the response when a failure occurred
 */
export function doRequest<T>(
  action$: ActionsObservable<Action>,
  actionType: string,
  requestAction: (action: Action) => any,
  onSuccess: (response: unknown, action: Action) => Action[],
  onError: (error: Error) => Action,
): any {
  return action$.pipe(
    ofType(actionType),
    switchMap((action) => {
      const actions = requestAction(action);
      const observable = Array.isArray(actions) ? forkJoin(actions) : actions;
      return observable.pipe(
        mergeMap((response) => {
          return onSuccess(response, action);
        }),
        catchError(BaseApiService.getErrorHandler('WidgetEpic', 'widget')),
        catchError(({ error }) => {
          const ofErrors = of(error);
          return ofErrors.pipe(
            mergeMap((error) => [onError(error), globalErrorActions.dispatchCustomAction(error)]),
          );
        }),
      );
    }),
  );
}
