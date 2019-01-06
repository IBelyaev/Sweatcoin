import React from 'react';
import styled from 'styled-components';

import List from './list';
import Input from '../input';
import { StatementItem } from '../../common-types';
import { DeleteItemActions, ChangeItems, AddItems } from '../../actions/statements-actions';

type Props = {
	onCreateItem: (text: string) => AddItems;
	onChangeItems: (items: StatementItem[]) => ChangeItems;
	items: StatementItem[];
	onDeleteItemActions: (id: string) => DeleteItemActions;
};

export default class StatementList extends React.PureComponent<Props> {
	render() {
		const { onCreateItem, onChangeItems, items, onDeleteItemActions } = this.props;

		if (!items) {
			return null;
		}

		return (
			<React.Fragment>
				<List
					onChangeItems={onChangeItems}
					items={items}
					onDeleteItemActions={onDeleteItemActions}
				/>
				<Input onCreateItem={onCreateItem} />
			</React.Fragment>
		);
	}
}
