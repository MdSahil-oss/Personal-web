import React from "react";
import Login from "./Login";
import DashboardContents from "./DashboardContents";
import { dashboard } from '../../actions/login';
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
        this.handleLogin();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // if (nextProps.dashboard.loaded) {
        //     // localStorage.setItem("token", nextProps.loginStateData.token);
        //     console.log("Token is correct")
        //     this.setState({isloggedIn: true});
        // }
        console.log(nextProps)
    }

    handleLogin = () => {
        let token = localStorage.getItem("token")
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
    loginStatus: state.dashboard,
}), (dispatch) => ({
    checkLoginStatus: (url, token) => {
        dispatch(dashboard(url, token))
    }
}))(Dashboard);