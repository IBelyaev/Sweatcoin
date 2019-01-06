import { StatementItem } from '../common-types';
import { ApplicationState } from '../reducers';

export const getStatementsSelector = (state: ApplicationState): StatementItem[] =>
  state.statements.data;

export const isStatementsLoadedSelector = (state: ApplicationState): boolean =>
  state.statements.status === 'RECUEST';
