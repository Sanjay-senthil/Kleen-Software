import globalAppErrors from './models';
import { createSlice } from '@reduxjs/toolkit';

const entityName = 'globalAppErrors';

const GlobalAppErrorsSlice = createSlice({
  name: entityName,
  ...globalAppErrors,
});

const actions = { key: entityName, actions: GlobalAppErrorsSlice.actions };

export { actions };

export default GlobalAppErrorsSlice.reducer;
