import * as endUser from './endUser';
import * as globalAppErrors from './globalAppErrors';
import * as ksInvestigations from './investigation';
import * as ksNotifications from './notifications';

export default {
  ...Object.values({
    endUser,
    globalAppErrors,
    ksInvestigations,
    ksNotifications,
  }),
};
