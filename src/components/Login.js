import React from 'react';
import axios from 'axios';
import LoginHeader from './LoginHeader';
import LoginMain from './LoginMain';
import LoginFooter from './LoginFooter';

class Login extends React.Component {
    constructor(props) {
        super(props);

        /*
            Form
            0 = login
            1 = register
        */
        this.state = {
            form: 0,
            status: [],
            email: "",
            name: "",
            password: "",
            confirmpass: ""
        }

        this.setForm = this.setForm.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleConfirmPassChange = this.handleConfirmPassChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.form != prevState.form) {
            this.setState({
                name: "",
                password: "",
                confirmpass: "",
                status: []
            });
        }
    }

    setForm(frm) { 
        this.setState({ 
            form:frm 
        })
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value,
            status: []
        })
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value,
            status: []
        })
    }

    handlePassChange(event) {
        this.setState({
            password: event.target.value,
            status: []
        })
    }

    handleConfirmPassChange(event) {
        this.setState({
            confirmpass: event.target.value,
            status: []
        })
    }

    handleRegister(event) {
        event.preventDefault();
        axios.post('/api/private/register', {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            confirm: this.state.confirmpass
        })
        .then(res => {
            this.setState({
                name: "",
                password: "",
                confirmpass: "",
                status: res.data.status
            });
        }) 
        .catch(error => {
            this.setState({status: error.response.data.status});
        });
    }

    handleLogin(event) {
        event.preventDefault();
        axios.post('/api/private/login', {
            email: this.state.email,
            password: this.state.password,
        })
        .then(res => {
            location.reload();
            this.setState({status: res.data.status});
        }) 
        .catch(error => {
            this.setState({status: error.response.data.status});
        });
    }

    render() {
        const formProps = {
            setForm: this.setForm,
            handleRegister: this.handleRegister,
            handleLogin: this.handleLogin,
            handleEmailChange: this.handleEmailChange,
            handleNameChange: this.handleNameChange,
            handlePassChange: this.handlePassChange,
            handleConfirmPassChange: this.handleConfirmPassChange,
            email: this.state.emails,
            name: this.state.name,
            password: this.state.password,
            confirmpass: this.state.confirmpass,
            form: this.state.form,
            status: this.state.status
        };
        return <>
            <LoginHeader />
            <LoginMain {...formProps}/>
            <LoginFooter />
        </>; 
    } 
} 

export default Login;