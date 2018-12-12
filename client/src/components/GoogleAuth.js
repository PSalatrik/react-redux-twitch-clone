import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
	//OAuth Google API for Javascript running inside a browser
	componentDidMount() {
		window.gapi.load('client:auth2', ()=>{
			window.gapi.client.init({
				clientId: '122503935637-1bv0t81b92dv3bnqe27t8cguppgpe005.apps.googleusercontent.com',
				scope: 'email'
				}).then(() => {
					this.auth = window.gapi.auth2.getAuthInstance(); // sets up a session, sort of
					this.onAuthChange(this.auth.isSignedIn.get() );  // lets us know if we are signesd in
					this.auth.isSignedIn.listen(this.onAuthChange); // looks for a change in login
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		if(isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId()); //not to be confused with .this.auth.signIn
		} else {
			this.props.signOut(); // not to be confused with this.auth.signOut
		}
	}

	

	renderAuthButton () {
		if (this.props.isSignedIn === null){
			return null;
		} else if (this.props.isSignedIn === true){
			return (<button onClick={this.auth.signOut} className="ui red google button">
					<i className="google icon" />
					Sign Out 
				   </button>
				   );
		} else return (
				<button onClick={this.auth.signIn} className="ui green google button">
					<i className="google icon" />
					Sign In
				</button>
		); 
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	return {isSignedIn: state.auth.isSignedIn }
};

export default connect( mapStateToProps, { signIn, signOut } ) (GoogleAuth);



//gapi.load('client:auth2');
//gapi.client.init({clientId: 'OAuth client Id' })
//auth.signIn()

