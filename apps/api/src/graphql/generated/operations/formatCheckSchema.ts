import { gql } from 'apollo-server-express';

export const formatCheckSchema = gql`
  enum AccessLevel {
    SHOW
    HIDE
    DISABLED
  }

  type FormatCheckError {
    message: String!
  }

  type FormatCheckResult {
    isValid: Boolean!
    errors: [FormatCheckError!]
  }

  type AccessControlCheckResult {
    accessLevel: AccessLevel!
  }

  input FormatCheckArgs {
    formField: String!
    formValue: String!
    objectFocus: String
    taskName: String!
    widgetId: String!
  }

  input AccessControlCheckArgs {
    taskName: String
    widgetId: String!
    section: String
  }

  extend type Query {
    formatCheck(input: FormatCheckArgs): FormatCheckResult
    accessControlCheck(input: AccessControlCheckArgs): AccessControlCheckResult
  }
`;
