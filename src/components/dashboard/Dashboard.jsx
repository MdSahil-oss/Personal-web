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
        !(this.state.isloggedIn) && this.handleLogin();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.loginStatus.dashboard.check.loaded) {
            this.setState({isloggedIn: true});
        }
    }

    handleLogin = () => {
        let token = localStorage.getItem("token");
        if (token) {
            this.props.checkLoginStatus('/dashboard', { token });
        }
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
    checkLoginStatus: (url, token) => {
        dispatch(dashboard(url, token))
    }
}))(Dashboard);