import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
	state = { showModal: false };
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonPress() {
		const { name, flag } = this.props;
		this.props.employeeSave({ name, flag, uid: this.props.employee.uid });
	}

	onAccept() {
		const { uid } = this.props.employee;
		this.props.employeeDelete({ uid })
	}

	onDecline() {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Save Changs
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
						Delete Item
					</Button>
				</CardSection>
				<Confirm
					visible={this.state.showModal} 
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				>
					Are you sure you want to delete this?
				</Confirm>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, flag } = state.employeeForm;
	return { name, flag };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);