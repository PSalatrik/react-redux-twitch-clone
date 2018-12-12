import { SIGN_IN, SIGN_OUT } from './types.js'

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId //this.auth.currentUser.get().getId()
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
}; 