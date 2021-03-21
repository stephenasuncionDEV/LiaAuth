import React from 'react';
import axios from 'axios';
import MainHome from './MainHome';
import MainDashboard from './MainDashboard';
import MainDocumentation from './MainDocumentation';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get("/api/private/users").then(res => {
            this.setState({users: res.data});
        });
    }

    render() {
        const properties = {
            email: this.props.email,
            name: this.props.name,
            setPage: this.props.setPage,
            users: this.state.users
        }
        const containerStyle = this.props.sidebar == false ? {marginLeft: "1rem"} : null;
        return <>
            <main>
                <div className="main-container" style={containerStyle}>
                    <div className="second-container">
                        <div id="toggle-button" onClick={()=>this.props.handleSideBarToggle()}>
                            <img src="images/menu.png" alt="menu toggle"/>
                        </div>
                        {this.props.page == 0 && (
                            <MainHome {...properties}/>
                        )}
                        {this.props.page == 1 && (
                            <MainDashboard {...properties}/>
                        )}
                        {this.props.page == 2 && (
                            <MainDocumentation setPage={this.props.setPage}/>
                        )}
                    </div>
                </div>
            </main>
        </>;
    }
}

export default MainContainer;