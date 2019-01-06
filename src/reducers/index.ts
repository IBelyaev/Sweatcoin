import { combineReducers } from 'redux';

import statementsReduser, { StatementsReduser } from './statements-reducer';

export type ApplicationState = {
  statements: StatementsReduser;
};

export default combineReducers<ApplicationState>({
  statements: statementsReduser,
});
