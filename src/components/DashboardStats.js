import React from 'react';

class DashboardStats extends React.Component {
    render() {
        return <>
            <div className="statistics-frame">
                <div className="statistics-container">
                    <p><span className="statistics-title">Projects</span><span className="statistics-value">{this.props.proj.length}</span></p>
                </div>
                <div className="statistics-container">
                    <p><span className="statistics-title">Licenses</span><span className="statistics-value">{this.props.licenseCount}</span></p>
                </div>
                <div className="statistics-container">
                    <p><span className="statistics-title">Test</span><span className="statistics-value">0</span></p>
                </div>
                <div className="statistics-container">
                    <p><span className="statistics-title">Test</span><span className="statistics-value">0</span></p>
                </div>
            </div>
        </>; 
    } 
} 

export default DashboardStats;