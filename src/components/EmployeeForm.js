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
				<CardSection>
					<Text style={styles.pickerTextStyle}>Shift</Text>
					<Picker
						style={{ flex: 1 }}
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
					</Picker>
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
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);