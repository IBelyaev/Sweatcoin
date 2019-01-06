import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import StatementList from '../components/list';
import Input from '../components/input';
import { getStatementsSelector, isStatementsLoadedSelector } from '../selectors/statements-selector';
import { deleteStatementActions, changeStatement, addStatement, getStatements } from '../actions/statements-actions';
import withLoading from '../hoc/withLoading';

const StatementListWithLoading = withLoading(StatementList);

function mapStateToProps(state: any) {
	return {
		statements: getStatementsSelector(state),
		isStatementsLoaded: isStatementsLoadedSelector(state)
	};
}

function mapDispatchToProps(dispatch: any) {
	return {
		actions: bindActionCreators(
			{
				deleteStatementActions,
				changeStatement,
				addStatement,
				getStatements
			},
			dispatch
		),
	};
}

type StateProps = ReturnType<typeof mapStateToProps>;

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type Props = StateProps & DispatchProps;

const TestWrapper = styled.div`
	max-width: 500px;
`;

class App extends Component<Props> {
	componentDidMount() {
		this.props.actions.getStatements();
	}

	render() {
		const {
			statements,
			isStatementsLoaded,
			actions: { deleteStatementActions, addStatement, changeStatement },
		} = this.props;

		return (
			<TestWrapper className="App">
				<StatementListWithLoading
					loading={ isStatementsLoaded }
					onChangeItems={changeStatement}
					items={statements}
					onDeleteItemActions={deleteStatementActions}
					onCreateItem={addStatement}
				/>
			</TestWrapper>
		);
	}
}

export default connect<StateProps, DispatchProps>(
	mapStateToProps,
	mapDispatchToProps
)(App);
