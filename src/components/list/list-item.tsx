import React from 'react';
import styled from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import styledComponents from 'styled-components'
import { GripVertical } from 'styled-icons/fa-solid';
import { Cross } from 'styled-icons/icomoon';
import { DraggableProvided } from 'react-beautiful-dnd';

import { DeleteItemActions } from '../../actions/statements-actions';

const ListItemStyled = styled.div`
	width: 100%;
	height: 40px;
	background-color: #f2f4f6;
	border: 2px solid #b3bfcd;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
	overflow: hidden;
	position: relative;
`;

const ListItemText = styled.span`
	color: #325d7c;
	text-transform: inherit;
	white-space: nowrap;
`;

const ListItemPrimary = styledComponentsTS<{isVisible: boolean}>(styled.span)`
	font-weight: bold;
	color: #325d7c;
	text-transform: inherit;
	white-space: nowrap;

	&:after {
		display: ${props => props.isVisible ? 'inline-block' : 'none'};
		content: '·';
		padding: 0 5px;
	}
`;

const DeleteBtn = styled(Cross)`
	width: 8px;
	height: 8px;
	padding: 8px;
	border-radius: 100%;
	background-color: #5f7896;
	color: #f2f4f6;
	display: flex;
	justify-content: space-around;
	align-items: end;
	cursor: pointer;
`;

const GripVerticalBlue = styled(GripVertical)`
	color: #a5b4c5;
`;

const ListItemWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 15px;
`;

const GripVerticalBlueWrapper = styled.div`
	padding: 10px;
`;

const SVGWrapper = styled.div`
	padding-left: 10px;
`;

const TextWrapper = styled.div`
	overflow: hidden;
    text-overflow: ellipsis;
`;

type Props = {
	id: string;
	onDelete?: () => void;
	text?: string;
	primaryText?: string;
	withDeleteBtn?: boolean;
	provided: DraggableProvided;
	onDeleteItemActions: (id: string) => DeleteItemActions;
};

export default class ListItem extends React.PureComponent<Props> {
	static defaultProps = {
		withDeleteBtn: true,
	};

	handelDeleteItem = (id: string) => (): void => {
		this.props.onDeleteItemActions(id);
	};

	render() {
		const { text, id, primaryText, withDeleteBtn, provided: {innerRef, draggableProps, dragHandleProps} } = this.props;
		return (
			<ListItemWrapper ref={innerRef} {...draggableProps}>
				<ListItemStyled>
					<TextWrapper>
						<ListItemPrimary isVisible={!!primaryText} >{primaryText}</ListItemPrimary>
						<ListItemText>{text}</ListItemText>
					</TextWrapper>
					{withDeleteBtn && (
						<SVGWrapper>
							<DeleteBtn onClick={this.handelDeleteItem(id)} />
						</SVGWrapper>
					)}
				</ListItemStyled>
				<GripVerticalBlueWrapper {...dragHandleProps}>
					<GripVerticalBlue size="24" />
				</GripVerticalBlueWrapper>
			</ListItemWrapper>
		);
	}
}
