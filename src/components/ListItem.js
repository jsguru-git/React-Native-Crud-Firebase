import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
import CheckBox from 'react-native-check-box';

class ListItem extends Component {
	onRowPress() {
		Actions.employeeEdit({ employee: this.props.employee });
	}

	render() {
		const { name, flag } = this.props.employee;
		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<CheckBox style={styles.titleStyle}
							leftTextStyle={{fontSize: 18}}
							leftText={name}
							isChecked={flag}
							disabled={true}
					/>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		padding: 15
	}
}

export default ListItem;