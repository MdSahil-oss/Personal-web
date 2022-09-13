import React from "react";
import Login from "./Login";
import DashboardContents from "./DashboardContents";

class Dashboard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleLogin = this.handleLogin.bind(this)
    // }

    render() {
        return (
            localStorage.getItem("isLoggedIn") && localStorage.getItem("isLoggedIn") === "true" ?
                <DashboardContents /> : <Login />
        )
    }
}

export default Dashboard;