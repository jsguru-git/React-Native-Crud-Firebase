import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEES_FETCH_SUCCESS,
	EMPLOYEES_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	};
};

export const employeeCreate = ({ name, flag }) => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/items`)
		.push({ name, flag })
		.then(() => { 
			dispatch({ type: EMPLOYEE_CREATE });
			Actions.employeeList({ type: 'reset' });
		});
	};
};

export const employeesFetch = () => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/items`)
		.on('value', snapshot => {
			dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
		});
	};
};

export const employeeSave = ({ name, flag, uid }) => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/items/${uid}`)
		.set({ name, flag })
		.then(() => {
			dispatch({ type: EMPLOYEES_SAVE_SUCCESS })
			Actions.employeeList({ type: 'reset' });
		});
	};
};

export const employeeDelete = ({ uid}) => {
	const { currentUser } = firebase.auth();
	return () => {
		firebase.database().ref(`/users/${currentUser.uid}/items/${uid}`)
		.remove()
		.then(() => {
			Actions.employeeList({ type: 'reset' });
		});
	};
};