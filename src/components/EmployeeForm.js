import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';
import CheckBox from 'react-native-check-box';

class EmployeeForm extends Component {
	render() {
		return (
			<View>
				<CardSection>
					<Input
					label="Title"
					placeholder="Please type..."
					value={this.props.name}
					onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
					/>
				</CardSection>
				<CheckBox style={{paddingTop: 15, paddingBottom: 15, paddingLeft: 30, paddingRight: 30}}
					isChecked={this.props.flag}
					leftTextStyle={{fontSize: 18}}
					leftText="flag"
					onClick={() => this.props.employeeUpdate({ prop: 'flag', value: !this.props.flag })}
				/>

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
	const { name, flag } = state.employeeForm;
	return { name, flag };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);