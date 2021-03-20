import React from 'react';
import LoginForm from './LoginForm'

class LoginMain extends React.Component {
    render() { 
        const question = this.props.form == 0 ? {text:"Don't have an account?", form:1, state:"Register"} : {text:"Have an account already?", form:0, state:"Log In"};
        return <>
            <main>
                <div className="container">
                    <div className="second-container">
                        <LoginForm {...this.props} />
                    </div>
                </div>
                <div className="container">
                    <div className="second-container">
                        <p id="login-question">{question.text}<span onClick={()=>this.props.setForm(question.form)}>{question.state}</span></p>
                    </div>
                </div>
            </main>
        </>; 
    } 
} 

export default LoginMain;