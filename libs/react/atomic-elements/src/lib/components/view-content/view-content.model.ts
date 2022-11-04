import { Maybe, ViewShapeType } from '@kleeen/types';

export interface KsViewContentProps {
  taskName: string;
  view: Maybe<ViewShapeType> | null;
  entityActions: { [key: string]: (...args: any[]) => void };
  setCardsNumber?: (e: number) => void;
}

export type DisplaySectionViewsProps = {
  entityActions: { [key: string]: (...args: any[]) => void };
  taskName?: string;
  view: Maybe<ViewShapeType> | null;
};

export interface KsViewContainerProps {
  children?: React.ReactNode;
  setCardsNumber?: (e: number) => void;
}
