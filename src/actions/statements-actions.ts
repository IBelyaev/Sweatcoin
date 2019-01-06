import StatementTypes from './types/statement';
import { StatementItem } from '../common-types';

export type DeleteItemActions = ReturnType<typeof deleteStatementActions>;

export type ChangeItems = ReturnType<typeof changeStatement>;

export type AddItems = ReturnType<typeof addStatement>;

export type getStatements =
  | ReturnType<typeof getStatementsRequest>
  | ReturnType<typeof getStatementsSuccess>
  | ReturnType<typeof getStatementsFailure>;

export type GenericStatements = DeleteItemActions | ChangeItems | AddItems | getStatements;

export function deleteStatementActions(id: string) {
  return {
    type: StatementTypes.DeleteItem as StatementTypes.DeleteItem,
    payload: {
      id,
    },
  };
}

export function changeStatement(payload: StatementItem[]) {
  return {
    type: StatementTypes.ChangeItem as StatementTypes.ChangeItem,
    payload,
  };
}

export function addStatement(text: string) {
  const item = {
    id: `${Math.random()}`,
    text,
    primaryText: '',
  };

  return {
    type: StatementTypes.AddStatements as StatementTypes.AddStatements,
    payload: item,
  };
}

function getData(): Promise<StatementItem[]> {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve([
          {
            text: 'We do love the great outdoors',
            id: '1',
            primaryText: 'Sweatcoin',
          },
          {
            text: 'Human nature, that this',
            id: '2',
            primaryText: 'Redwoods',
          },
          {
            text: 'Walk in the park',
            id: '3',
            primaryText: 'Session',
          },
        ]),
      900,
    );
  });
}

function getStatementsRequest() {
  return {
    type: StatementTypes.RequestStatements as StatementTypes.RequestStatements,
  };
}

function getStatementsSuccess(payload: StatementItem[]) {
  return {
    type: StatementTypes.SuccessStatements as StatementTypes.SuccessStatements,
    payload,
  };
}

function getStatementsFailure() {
  return {
    type: StatementTypes.FaledStatements as StatementTypes.FaledStatements,
  };
}

export function getStatements() {
  return async (dispatch: any) => {
    try {
      dispatch(getStatementsRequest());

      const statements = await getData();

      dispatch(getStatementsSuccess(statements));
    } catch (error) {
      dispatch(getStatementsFailure());
    }
  };
}
