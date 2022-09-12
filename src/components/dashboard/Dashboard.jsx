import React from "react";
import Login from "./Login";

class Dashboard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleLogin = this.handleLogin.bind(this)
    // }

    render() {
        return (
            localStorage.getItem("isLoggedIn") && localStorage.getItem("isLoggedIn") === "true" ?
            <div>this is dashboard</div> :
            <Login />
        )
    }
}

export default Dashboard;