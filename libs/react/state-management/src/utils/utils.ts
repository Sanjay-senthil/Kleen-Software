import { pathOr } from 'ramda';

export const catchErrorsFromRequest = (request) => {
  const data = pathOr(null, [0, 'data'], Object.values(request?.response?.data));
  const errors = pathOr(false, ['response', 'errors'], request);

  if (!data && errors) {
    throw errors;
  }

  return request.response;
};
