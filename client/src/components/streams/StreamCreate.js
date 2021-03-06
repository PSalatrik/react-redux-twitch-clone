import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

	renderError({error, touched}){
		if(touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
				);
		}
	}

	renderInput = ({ input, label, meta }) => {

		const className = `field ${meta.error && meta.touched ?  'error': ''} `

		return ( 
		   <div className={className}>
			<label>{label}</label>
			<input {...input} autoComplete="off"/>
			{this.renderError(meta)}
		   </div>
			);
	};

	onSubmitSCPROP(formValues) {
		console.log(formValues);
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmitSCPROP)}  className="ui form error">
				<Field name="title" component={this.renderInput} label="Enter Title" />
				<Field name="discription" component={this.renderInput} label="Give a Discription"/>
			  <button className="ui button primary">Submit</button> 
			</form>
			);
	}
}

const validate = (formValues) => {
	const errors = {};
	if(!formValues.title) {
		errors.title = "You must enter a title";
	}

	if(!formValues.discription){
		errors.discription = "You must enter a discription";
	}

	return errors;
}



export default reduxForm({
	 form: 'streamCreateForm',
	 validate: validate
}) (StreamCreate);