import React from 'react';
import axios from 'axios';
import DashboardStats from './DashboardStats'
import DashboardProject from './DashboardProject'
import DashboardLicense from './DashboardLicense'

class MainDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            licenseCount: 0,
            proj: []
        }

        this.getProjectsByUser = this.getProjectsByUser.bind(this);
        this.getLicenseCount = this.getLicenseCount.bind(this);
    }

    getProjectsByUser() {
        axios.get(`/api/private/projects/${this.props.email}`)
        .then(res => {
            this.setState({proj: res.data.projects});
        });
    }

    getLicenseCount() {
        axios.get(`/api/private/licensecount/${this.props.email}`)
        .then(res => {
            this.setState({licenseCount: res.data.licenseCount});
        });
    }

    componentDidMount() {
        this.getProjectsByUser();
        this.getLicenseCount();
    }

    render() {
        const clears = {clear: "both"};
        const properties = {
            getProjectsByUser: this.getProjectsByUser,
            getLicenseCount: this.getLicenseCount,
            licenseCount: this.state.licenseCount,
            users: this.props.users,
            email: this.props.email,
            proj: this.state.proj
        }
        return <>
            <div className="dashboard-container">
                <h1 className="main-heading float-left">Dashboard 📝</h1>
                <h2 className="user-name float-right">{this.props.name}</h2>
                <div style={clears}></div>
                <hr/>
                <DashboardStats {...properties}/>
                <DashboardProject {...properties}/>
                {this.state.proj.length > 0 && <DashboardLicense {...properties}/>}
            </div>
        </>;
    }
}

export default MainDashboard;