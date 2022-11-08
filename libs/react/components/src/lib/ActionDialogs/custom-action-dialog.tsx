import { Action, AttributeProps, Maybe, ParentProps, Translate } from '@kleeen/types';
import { AddDialogPayload, Loader } from '@kleeen/react/components';
import { MouseEvent, ReactElement, Suspense, lazy, useCallback } from 'react';

export interface CustomDialogComponentProps {
  action?: Action;
  attributes?: AttributeProps[];
  component: string;
  context?: any;
  description?: Maybe<string> | ReactElement;
  onAction: (e: MouseEvent, payload: AddDialogPayload) => void;
  onClose: () => void;
  open: boolean;
  parent?: ParentProps;
  taskName?: string;
  title: string | ReactElement;
  translate?: Translate;
}

export const CustomDialogComponent = ({ component, ...props }: CustomDialogComponentProps): ReactElement => {
  const CustomWidget = useCallback(
    lazy(() =>
      import('@kleeen/end-product/frontend/things').then((module) => {
        return { default: module[component] };
      }),
    ),
    [component],
  );

  return (
    <Suspense fallback={<Loader />}>
      <CustomWidget {...props} />
    </Suspense>
  );
};

export default CustomDialogComponent;
