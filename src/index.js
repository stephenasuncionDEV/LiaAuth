import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login.js";
import App from "./components/App.js";
import { cookieExists, getCookie } from "./cookie.js"

// Check if cookie exists if not make one
if (!cookieExists('logged-in')) {
    document.cookie = "logged-in=false;";
}

const isLoggedIn = getCookie("logged-in") != "true" ? false : true;

if (isLoggedIn == false) {
    // Render Login Page
    ReactDOM.render(<Login />, document.getElementById('react-container'));
}
else {
    // Disable Centering
    document.body.style.display = "block";
    document.body.style.minHeight = "initial";
    document.getElementById('react-container').style.width = "auto";
    document.getElementById('react-container').style.margin = "0";
    document.getElementById('react-container').style.marginTop = "0";
    document.getElementById('react-container').style.height = "100vh";

    // Render Main App
    ReactDOM.render(<App />, document.getElementById('react-container'));
}