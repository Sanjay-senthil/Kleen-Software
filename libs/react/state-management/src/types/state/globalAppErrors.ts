export interface GlobalAppErrorsState {
  error: any;
  globalAppErrors: any[];
  isLoading: boolean;
}

export type BaseResponse<T> = {
  data: {
    [key: string]: {
      data: T;
    };
  };
};
