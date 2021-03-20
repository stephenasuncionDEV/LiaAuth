import React from 'react';

class LoginHeader extends React.Component {
    render() {
        return <>
            <header>
                <div id="logo-container" className="center">
                    <img src="images/logo.png" alt="LiaAuth Logo"/>
                    <h1>LiaAuth</h1>
                </div>
            </header>
        </>;
    }
}

export default LoginHeader;