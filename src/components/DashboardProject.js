import React from 'react';
import axios from 'axios';

class DashboardProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectInput: "",
            status: []
        }

        this.handleProjectChange = this.handleProjectChange.bind(this);
        this.handleCreateProject = this.handleCreateProject.bind(this);
    }

    handleProjectChange(event) {
        this.setState({
            projectInput: event.target.value,
            status: []
        });
    }

    handleCreateProject(event) {
        event.preventDefault();
        var todayDate = new Date().toISOString().slice(0,10);
        axios.post("/api/private/newproject", {
            email: this.props.email,
            name: this.state.projectInput,
            dateCreated: todayDate
        })
        .then(res => {
            this.props.getProjectsByUser();
            this.setState({
                status: res.data.status,
                projectInput: ""
            });
        }) 
        .catch(error => {
            this.setState({status: error.response.data.status});
        });
    }

    render() {
        const statusStyle = this.state.status[0] != "Project succesfully created" ? "failed" : "success";
        return <>
            <h2 className="sub-heading">Projects 📁</h2>
            <hr/>
            <div className="dashboard-form">
                <h3>Create a new Project</h3>
                <form onSubmit={this.handleCreateProject}>
                    <label>
                        Project Name:
                        <input type="text" value={this.state.projectInput} onChange={this.handleProjectChange}/>
                    </label>
                    <div className="error-container contain-width">
                        <ul className={statusStyle}>{this.state.status.map(s=><li key={s}>{s}</li>)}</ul>
                    </div>
                    <input type="submit" value="Create Project" />
                </form>
                <p>Current Projects: </p>
                <div className="data-container">
                    <div className="data-second-container">
                        <p className="data-item pink">Project Name</p>
                        <p className="data-item pink">Date Created</p>
                    </div>
                    {this.props.proj.map(res=>
                    <div className="data-second-container" key={res.name}>
                        <p className="data-item">{res.name}</p>
                        <p className="data-item">{res.dateCreated.substring(0, 10)}</p>
                    </div>)}
                </div>
            </div>
        </>; 
    } 
} 

export default DashboardProject;