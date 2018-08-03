import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
	render() {
		return (
			<View>
				<CardSection>
					<Input
					label="Name"
					placeholder="Jane"
					value={this.props.name}
					onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
					/>
				</CardSection>
				<CardSection>
					<Input
					label="Phone"
					placeholder="085343966997"
					value={this.props.phone}
					onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
					/>
				</CardSection>
			</View>
		);
	}
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
}

const mapStateToProps = (state) => {
	const { name, phone } = state.employeeForm;
	return { name, phone };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);