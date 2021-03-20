import React from 'react';
import axios from 'axios';

class DashboardLicense extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: "",
            licenseGenerated: "",
            licenses: [],
            status: []
        }

        this.handleSelectProjectChange = this.handleSelectProjectChange.bind(this);
        this.handleGenerateLicense = this.handleGenerateLicense.bind(this);
        this.getLicense = this.getLicense.bind(this);
    }

    getLicense() {
        axios.get(`/api/private/license/${this.state.project}`).then(res => {
            this.setState({
                licenses: res.data,
            });
        });
    }

    componentDidMount() {
        if (this.props.proj.length > 0) {
            this.setState({project: this.props.proj[0].name});
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.project != this.state.project || prevState.licenseGenerated != this.state.licenseGenerated)
        {
            this.getLicense();
        }
    }

    handleSelectProjectChange(event) {
        this.setState({
            project: event.target.value,
            status: [],
            licenseGenerated: ""
        });
    }

    handleGenerateLicense(event) {
        event.preventDefault();
        var todayDate = new Date().toISOString().slice(0,10);
        axios.post(`/api/private/newlicense/${this.state.project}`, {
            name: this.state.project,
            email: this.props.email,
            dateCreated: todayDate,
            dateLastUse: todayDate
        })
        .then(res => {
            this.getLicense();
            this.props.getLicenseCount();
            this.setState({
                status: res.data.status,
                licenseGenerated: res.data.license
            });
        }) 
        .catch(error => {
            this.setState({status: error.response.data.status});
        });
    }

    render() {
        let index = 0;
        return <>
            <h2 className="sub-heading">License 🔑</h2>
            <hr/>
            <div className="dashboard-form">
                <h3>Generate a license</h3>
                <div className="dashboard-form">
                    <form onSubmit={this.handleGenerateLicense}>
                        <label>
                            Choose a project:
                            <select name="project" onChange={this.handleSelectProjectChange} value={this.state.project}>
                                {this.props.proj.map(img=><option key={img.name} value={img.name}>{img.name}</option>)}
                            </select>
                        </label>
                        <p>Current Licenses: </p>
                        <div className="data-container">
                            <div className="data-second-container">
                                <p className="data-item pink">Licenses</p>
                                <p className="data-item pink">Date Created</p>
                            </div>
                            {this.state.licenses.map(res=>
                            <div className="data-second-container" key={res.license}>
                                <p className="data-item">{res.license}</p>
                                <p className="data-item">{res.dateCreated.substring(0, 10)}</p>
                            </div>)}
                        </div>
                        <div className="error-container contain-width">
                            <ul>{this.state.status.map(s=><li key={s}>{s}</li>)}</ul>
                        </div>
                        <input type='submit' value='Generate License' />
                    </form>
                    <p>Generated License: <span className="val-color">{this.state.licenseGenerated}</span></p>
                </div>
            </div>
        </>; 
    } 
} 

export default DashboardLicense;