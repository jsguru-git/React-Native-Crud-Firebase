import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeSave } from '../actions';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
import CheckBox from 'react-native-check-box';

class ListItem extends Component {
	render() {
		const { name, flag, uid } = this.props.employee;
		return (
			<View>
				<CheckBox style={styles.titleStyle}
						leftTextStyle={{fontSize: 18}}
						leftText={name}
						isChecked={flag}
						onClick={() => this.props.employeeSave({ name, flag: !flag, uid })}
				/>
			</View>
		);
	}
}

const styles = {
	titleStyle: {
		padding: 15
	}
}

const mapStateToProps = (state) => {
	const { name, flag } = state.employeeForm;
	return { name, flag };
};
// export default ListItem;
export default connect(mapStateToProps, { employeeSave })(ListItem);