import React from 'react';

class LoginForm extends React.Component {
    render() {
        const form = this.props.form;
        const statusStyle = this.props.status[0] != "Account succesfully created" ? "failed" : "success";
        if (form == 0)
        {
            return <>
                <h1 className="form-heading">Login</h1>
                <p className="form-tagline">Please fill in all the fields</p>
                <form onSubmit={this.props.handleLogin} autoComplete="on">
                    <label>
                        Email:
                        <input type='email' name="email" value={this.props.email} onChange={this.props.handleEmailChange}/>
                    </label>
                    <label>
                        Password:
                        <input type='password' name="password" autoComplete="on" value={this.props.password} onChange={this.props.handlePassChange}/>
                    </label>
                    <div className="error-container">
                        <ul className={statusStyle}>{this.props.status.map(s=><li key={s}>{s}</li>)}</ul>
                    </div>
                    <input type='submit' value='Login' className='form-button-container pink'/>
                </form>
            </>;
        }
        else if (form == 1)
        {
            return <>
                <h1 className="form-heading">Register</h1>
                <p className="form-tagline">Please fill in all the fields</p>
                <form onSubmit={this.props.handleRegister} autoComplete="new-password">
                    <label>
                        Email:
                        <input type='email' name="email" value={this.props.email} onChange={this.props.handleEmailChange}/>
                    </label>
                    <label>
                        Name:
                        <input type='text' name="name" value={this.props.name} onChange={this.props.handleNameChange}/>
                    </label>
                    <label>
                        Password:
                        <input type='password' name="password" autoComplete="off" value={this.props.password} onChange={this.props.handlePassChange}/>
                    </label>
                    <label>
                        Confirm Password:
                        <input type='password' name="confirm" autoComplete="off" value={this.props.confirmpass} onChange={this.props.handleConfirmPassChange}/>
                    </label>
                    <div className="error-container">
                        <ul className={statusStyle}>{this.props.status.map(s=><li key={s}>{s}</li>)}</ul>
                    </div>
                    <input type='submit' value='Register' className='form-button-container pink'/> 
                </form>
            </>;
        }
    } 
} 

export default LoginForm;