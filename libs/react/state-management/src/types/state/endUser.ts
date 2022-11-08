import { IUser } from '@kleeen/auth';

export type CurrentUser = IUser;

export interface EndUser {
  currentUser: CurrentUser;
}
