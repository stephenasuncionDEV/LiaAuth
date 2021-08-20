import React from 'react';
import axios from 'axios';

class MainHome extends React.Component {
    render() {
        return <>
            <div className="home-container">
                <h1 className="main-heading">Welcome to LiaAuth ✋</h1>
                <h2 className="user-name">{this.props.name}</h2>
                <hr/>
                <p className="kinda-big">Your reliable partner for</p>
                <span className="big-bold">Licensing</span>
                <p className="kinda-small">Create a licensing system for your software projects quick and easy.</p>
                <button id="create-project-btn" onClick={()=>this.props.setPage(1)}>Create a Project</button>
                <h2 className="padding-top">Recent Users :</h2>
                <div className="data-container">
                    <p>{this.props.users.slice(0, 5).map(user=>user.name + ", ")}</p>
                </div>
            </div>
        </>;
    }
}

export default MainHome;