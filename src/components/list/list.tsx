import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

import { DeleteItemActions, ChangeItems } from '../../actions/statements-actions';
import ListItem from './list-item';
import { StatementItem } from '../../common-types';

type Props = {
	onChangeItems: (items: StatementItem[]) => ChangeItems;
	items: StatementItem[];
	onDeleteItemActions: (id: string) => DeleteItemActions;
};

const reorder = (list: StatementItem[], startIndex: number, endIndex: number): StatementItem[] => { 
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

export default class List extends React.PureComponent<Props> {
	onDragEnd = (result: DropResult): void => {
		const { onChangeItems, items } = this.props;

		if (!result.destination) {
			return;
		}

		const newItems = reorder(items, result.source.index, result.destination.index);

		onChangeItems(newItems);
	};

	render() {
		const { items, onDeleteItemActions } = this.props;

		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Droppable droppableId="droppable">
					{(provided) => (
						<div ref={provided.innerRef}>
							{items.map(({ text, primaryText, id }, index) => (
								<Draggable key={id} draggableId={id} index={index}>
									{(provided) => {
										return (
											<ListItem
												id={id}
												text={text}
												primaryText={primaryText}
												provided={provided}
												onDeleteItemActions={onDeleteItemActions}
											/>
										);
									}}
								</Draggable>
							))}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		);
	}
}
