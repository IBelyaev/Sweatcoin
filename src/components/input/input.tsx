import React, { KeyboardEvent } from 'react';
import styled from 'styled-components';

import { AddItems } from '../../actions/statements-actions';

type State = {
	isInputVisible: boolean;
};

const Wrapper = styled.div`
	margin-right: 44px;
`;

const Button = styled.div`
	height: 40px;
	border: 2px dashed #b3bfcd;
	background-color: #f2f4f6;
	color: #325d7c;
	opacity: 0.6;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const Input = styled.input`
	height: 40px;
	border: 2px solid #b3bfcd;
	width: 100%;
	min-width: 73px;
	padding: 0 20px;
	text-align: center;
	font-size: 16px;
`;

const InputWrapper = styled.div`
	display: flex;
`;

const Text = styled.span`
	color: #325d7c;
	display: flex;
	align-items: center;
	width: 16%;
	justify-content: center;
	padding: 0 10px;
    text-align: center;
`;

const ENTER_KEY_CODE = 'Enter';

type Props = {
	onCreateItem: (text: string) => AddItems;
};

export default class InputList extends React.PureComponent<Props, State> {
	state: State = {
		isInputVisible: false,
	};

	input = React.createRef<HTMLInputElement>();

	handleInputOpen = (): void => this.setState({ isInputVisible: true },() => {
		if (this.input.current) {
			this.input.current.focus();
		}
	});

	handelInputClose = (event: any): void => {
		if (event.key === ENTER_KEY_CODE) {
			this.setState({ isInputVisible: false });
			this.props.onCreateItem(event.target.value);
		}
	};

	render() {
		const { isInputVisible } = this.state;

		return <Wrapper>{isInputVisible ? this.renderInput() : this.renderBtn()}</Wrapper>;
	}

	renderInput = (): JSX.Element => {
		return (
			<InputWrapper>
				<Text>Post text</Text>
				<Input ref={this.input} onKeyPress={this.handelInputClose} />
			</InputWrapper>
		);
	};

	renderBtn = (): JSX.Element => {
		return <Button onClick={this.handleInputOpen}>Add a statement +</Button>;
	};
}
