import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component {
	onButtonPress() {
		const { name, flag } = this.props;
		this.props.employeeCreate({ name, flag });
	}

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>Create</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, flag } = state.employeeForm;
	return { name, flag };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);