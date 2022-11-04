import { CustomAction } from '../../../types/actions/investigation';
import { GlobalAppErrorsState } from '../../../types/state';

const initialState: any = {
  error: null,
  globalAppErrors: [],
  isLoading: false,
};

const GlobalAppErrors = {
  initialState,
  reducers: {
    clearGlobalAppErrors(): GlobalAppErrorsState {
      return initialState;
    },

    dispatchCustomAction: (state: GlobalAppErrorsState, { payload }: CustomAction) => {
      return state;
    },
    dispatchCustomActionSuccess: (state: GlobalAppErrorsState) => {
      return state;
    },
    dispatchCustomActionFailure: (state: GlobalAppErrorsState) => {
      return state;
    },
  },
};

export default GlobalAppErrors;
