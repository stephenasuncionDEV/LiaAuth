import React from 'react';

class MainDocumentation extends React.Component {
    render() {
        const clears = {clear: "both"};
        return <>
            <div className="documentation-container">
                <h1 className="main-heading float-left">Documentation 📃</h1>
                <h2 className="user-name float-right">{this.props.name}</h2>
                <div style={clears}></div>
                <hr/>
                <p><span className="bold">LiaAuth</span> is an API used for licensing softwares.</p>
                <ul>
                    <li><a href="#gettingStarted">Getting Started</a></li>
                    <li className="indent"><a href="#howDoesItWork">How does it work?</a></li>
                    <li className="indent"><a href="#registerLogin">Register / Login</a></li>
                    <li className="indent"><a href="#createProject">Creating a project</a></li>
                    <li className="indent"><a href="#generateLicense">Generating Licence</a></li>
                    <li><a href="#thirdParty">Connecting from 3rd party</a></li>
                    <li><a href="#references">References / Citations</a></li>
                </ul>
                <h2 id="gettingStarted" className="sub-heading">Getting Started</h2>
                <hr/>
                
                <p id="howDoesItWork" className="sub-section bold">How does it work?</p>
                <p>To start, things off you need to create an account. Once you log in you need to create a <a href="#" onClick={(e)=>{e.preventDefault(); this.props.setPage(1);}}>project</a>. Creating a project would make the <a href="#" onClick={(e)=>{e.preventDefault(); this.props.setPage(1);}}>license</a> section appear in which you can generate license according to the project selected.</p>
                <p><span className="bold">LiaAuth</span> gets a request from your application. It checks if the license is in the project requested. If yes, it gets the license from the database and update it. It also checks whether the ip requested is different to limit access of a key to one user.</p>
                
                <p id="registerLogin" className="sub-section bold">Register / Login</p>
                <p>To register an account you need email, name, password, and password must match the confirm-password field.</p>
                <p>Requirements: <span className="requirement">Name: Must only contain letters</span><span className="requirement">Email: Must be valid</span><span className="requirement">Password: Must not be empty</span><span className="requirement">Confirm Password: Must match password</span></p>
                <p>To login an account you need your email and password.</p>
                <p>Requirements: <span className="requirement">Email: Must not be empty</span><span className="requirement">Password: Must not be empty</span></p>
                
                <p id="createProject" className="sub-section bold">Creating a project</p>
                <p>To create a project you must go to Dashboard - <a href="#" onClick={(e)=>{e.preventDefault(); this.props.setPage(1);}}>Project</a></p>
                <p>Requirements: <span className="requirement">Project Name: Must be between 1 and 30 characters</span></p>

                <p id="generateLicense" className="sub-section bold">Generating Licence</p>
                <p>Licences are generated by <a href="https://www.npmjs.com/package/uuid">UUID</a> library in 36 characters format.</p>
                <p>To generate license you must go to Dashboard - <a href="#" onClick={(e)=>{e.preventDefault(); this.props.setPage(1);}}>License</a>. You must choose a project first.</p>

                <h2 id="thirdParty" className="sub-heading">Connecting from 3rd party</h2>
                <hr/>

                <p>Post Request to <a href="#" onClick={(e)=>{e.preventDefault();}}>https://liaauth.herokuapp.com/api/public/checklicense</a></p>
                <div className="diagaram">
                    <p>Request Data</p>
                    <p className="blue">email: String</p>
                    <p className="blue">project: String</p>
                    <p className="blue">license: String</p>
                </div>
                <div className="diagaram">
                    <p>Response</p>
                    <p className="blue">404: "License not found on project"</p>
                    <p className="blue">403: "Key is already used by another user"</p>
                    <p className="blue">403: "Project not found"</p>
                    <p className="blue">200: "License OK"</p>
                </div>
                <p>Sample Project</p>
                <a href="https://www.mediafire.com/file/iwv69l7edax2zjg/LiaAuth_SampleProject.zip/file" target="_blank">Sample C++ Project</a>

                <h2 id="references" className="sub-heading">References / Citations</h2>
                <hr/>
                <div className="reference-container">
                    <p>Logo/Icon</p>
                    <img src="images/logo.png" alt="LiaAuth Logo" className="reference-image"/>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" target="_blank" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a></div>
                </div>
                <div className="reference-container">
                    <p>Validation Regex For Letters Only</p>
                    <p>File: validators.js Line: 14</p>
                    <a href="https://stackoverflow.com/questions/58475407/how-to-check-if-input-in-input-field-has-alphabets-only-in-express-validator" target="_blank">By Hlib Derbenov (StackOverFlow)</a>
                </div>
                <div className="reference-container">
                    <p>Cookies (Server-Side and Client-Side)</p>
                    <p>File: cookie.js</p>
                    <p>By <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie" target="_blank">Mozilla's Documentation of Cookies</a></p>
                    <p>Inspired From <a href="https://www.tutorialspoint.com/expressjs/expressjs_cookies.htm" target="_blank">Tutorialspoint</a></p>
                    <p>Inspired From <a href="https://www.thoughtco.com/using-cookies-with-php-2693786" target="_blank">Thoughtco</a></p>
                </div>
                <div className="reference-container">
                    <p>Hamburger Menu Image</p>
                    <img src="images/menu.png" alt="Hamburger Menu Toggle" className="reference-image"/>
                    <p>By <a href="https://www.pngkey.com/detail/u2e6a9t4t4w7t4u2_mobile-menu-for-barefoot-resort-vacations-hamburger-menu/" target="_blank">pngkey</a></p>
                </div>
                <div className="reference-container">
                    <p>Conditional Rendering</p>
                    <p>Inspired From <a href="https://reactjs.org/docs/conditional-rendering.html" target="_blank">reactjs.org</a></p>
                </div>
                <div className="reference-container">
                    <p>Linear Gradient</p>
                    <p>File: src/style.css Line: 14</p>
                    <p>By <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient()" target="_blank">Mozilla's Documentation of Linear Gradient</a></p>
                </div>
            </div>
        </>;
    }
}

export default MainDocumentation;