import React from 'react';
import MainHome from './MainHome';
import MainDashboard from './MainDashboard';
import axios from 'axios';

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
        const homeProps = {
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
                            <MainHome {...homeProps}/>
                        )}
                        {this.props.page == 1 && (
                            <MainDashboard {...homeProps}/>
                        )}
                    </div>
                </div>
            </main>
        </>;
    }
}

export default MainContainer;