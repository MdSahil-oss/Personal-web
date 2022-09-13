import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin() {
        let data = {
            userId: document.getElementById('userId').value,
            password: document.getElementById('password').value
        }
        localStorage.getItem("isLoggedIn") && localStorage.removeItem("isLoggedIn")
        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            throw res;
        })
        .then(jsonData => {
            localStorage.setItem("isLoggedIn", jsonData["isLoggedin"])
        })
        .catch((err) => {
            localStorage.setItem("isLoggedIn", false)
            console.error("Error found", err);
        })
        .finally(() => {
            // eslint-disable-next-line no-restricted-globals
            location.reload()
        })
    }

    render() {
        return (
            <div className=" custom-scrolling-container basis-full sm:static absolute h-screen w-screen overflow-x-auto flex justify-center items-center">
                <div className=" w-10/12 sm:w-3/5 h-auto text-slate-500 space-y-5">
                    <div className=" text-center flex flex-col justify-center items-center">
                        <h3 className=" text-3xl font-bold">Login</h3>
                    </div>
                    <form className=" w-full space-y-5 flex flex-col justify-center items-center">
                        <div className=" space-x-3 w-4/5 lg:w-5/12 flex justify-between">
                            <label htmlFor="userId">UserId</label>
                            <input id="userId" className="w-4/5 h-10 rounded-3xl text-center" type="text" />
                        </div>
                        <div className=" space-x-3 w-4/5 lg:w-5/12 flex justify-between">
                            <label htmlFor="password">Password</label>
                            <input id="password" className="w-4/5 h-10 rounded-3xl text-center" type="password" />
                        </div>
                    </form>
                    <div className="m-auto w-fit space-x-2 pl-12 flex">
                        <button onClick={this.handleLogin} className="hover:bg-slate-900 text-white border border-slate-700 bg-slate-700  hover:text-slate-700 w-32 h-9 rounded-2xl">
                            Submit
                        </button>
                        <a href="/">
                            <button className=" border border-red-700 w-32 h-9 rounded-3xl bg-red-700 text-black hover:bg-slate-900 hover:text-red-700">
                                Cancel
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;