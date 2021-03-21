import React from 'react';
import MainNavigation from './MainNavigation';
import MainContainer from './MainContainer';
import { getCookie } from "../cookie.js"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            name: "",
            sidebar: true,
            page: 0 // 0 = home, 1 = dashboard, 2 = documentation
        }  

        this.handleSideBarToggle = this.handleSideBarToggle.bind(this);
        this.setPage = this.setPage.bind(this);
    }

    componentDidMount() {
        this.setState({email: getCookie("email")});
        this.setState({name: getCookie("name")});
    }

    handleSideBarToggle() {
        if (this.state.sidebar == false) {
            this.setState({sidebar: true});
        } else {
            this.setState({sidebar: false});
        }
    }

    setPage(value) { 
        this.setState({ 
            page:value 
        })
    }

    render() {
        const dataProps = { 
            handleSideBarToggle: this.handleSideBarToggle,
            setPage: this.setPage,
            email: this.state.email,
            name: this.state.name,
            sidebar: this.state.sidebar,
            page: this.state.page
        }
        return <>
            <MainNavigation {...dataProps}/>
            <MainContainer {...dataProps}/>
        </>; 
    } 
} 

export default App;