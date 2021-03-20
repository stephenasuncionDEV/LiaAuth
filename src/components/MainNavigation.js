import React from 'react';
import { destroyCookie } from "../cookie.js"

class MainNavigation extends React.Component {
    render() {
        return <>
            {this.props.sidebar == true ?  (
                <div id="sidebar">
                    <header>
                        <div id="logo-container" className="center logo-padding" onClick={()=>this.props.setPage(0)}>
                            <img src="images/logo.png" alt="LiaAuth Logo"/>
                            <h1>LiaAuth</h1>
                        </div>
                    </header>
                    <nav>
                        <ul>
                            <li><a href="#" onClick={(e)=>{e.preventDefault(); this.props.setPage(0);}}>Home</a></li>
                            <li><a href="#" onClick={(e)=>{e.preventDefault(); this.props.setPage(1);}}>Dashboard</a></li>
                            <li><a href="#" onClick={(e)=>{e.preventDefault(); this.props.setPage(2);}}>Documentation</a></li>
                        </ul>
                    </nav>
                    <div id="logout-button">
                        <a href="/" onClick={()=>destroyCookie("logged-in")}>Logout</a>
                    </div>
                    <div id="side-close-button">
                        <a href="#" onClick={(e)=>{e.preventDefault(); this.props.handleSideBarToggle();}}>
                            <img src="images/close.png" alt="close-button" aria-label="close sidebar"/>
                        </a>
                    </div>
                </div>
            ) : null}
        </>;
    }
}

export default MainNavigation;