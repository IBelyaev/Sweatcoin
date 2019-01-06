import StatementTypes from '../actions/types/statement';
import { StatementItem } from '../common-types';
import { GenericStatements } from '../actions/statements-actions';

export type StatementsReduser = {
  status: string;
  data: StatementItem[];
  error: string;
};

function filter(data: StatementItem[], id: string): StatementItem[] {
  return data.filter(el => {
    return el.id !== id;
  });
}

const initialState = {
  status: 'INITIAL',
  data: [],
  error: '',
};

export default function StatementsReduser(
  state: StatementsReduser = initialState,
  action: GenericStatements,
): StatementsReduser {
  switch (action.type) {
    case StatementTypes.RequestStatements:
      return {
        ...state,
        status: 'RECUEST',
      };
    case StatementTypes.SuccessStatements:
      return {
        ...state,
        status: 'SUCCESS',
        data: action.payload,
      };
    case StatementTypes.FaledStatements:
      return {
        ...state,
        status: 'FALED',
      };
    case StatementTypes.DeleteItem:
      return {
        ...state,
        data: filter(state.data, action.payload.id),
      };
    case StatementTypes.ChangeItem:
      return {
        ...state,
        data: action.payload,
      };
    case StatementTypes.AddStatements:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
}
