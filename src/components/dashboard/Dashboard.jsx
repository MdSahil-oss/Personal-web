import React from "react";
import Login from "./Login";
import DashboardContents from "./DashboardContents";
import { dashboard } from "../../actions/dashboard";
import { connect } from "react-redux";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this)
        this.state = {
            isloggedIn: false,
        }
    }

    componentDidMount() {
        if (localStorage.getItem("isLoggedIn")) {
            localStorage.removeItem("isLoggedIn")
        }
        !(this.state.isloggedIn) && this.handleLogin();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.loginStatus.dashboard.check.loaded) {
            this.setState({isloggedIn: true});
            localStorage.setItem("isLoggedIn", "true");
        }
    }

    handleLogin = () => {
        this.props.checkLoginStatus('/dashboard');
    }

    render() {
        return (
            this.state.isloggedIn ? <DashboardContents /> : <Login />
        )
    }
}

export default connect((state) => ({
    loginStatus: state,
}), (dispatch) => ({
    checkLoginStatus: (url) => {
        dispatch(dashboard(url))
    }
}))(Dashboard);