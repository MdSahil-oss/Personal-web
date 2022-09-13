import React from "react";
import { BiAddToQueue, BiEdit } from "react-icons/bi";

class ManageProjects extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignout = this.handleSignout.bind(this);
        this.state = {
            isLoggedIn: false,
        }
    }

    handleSignout() {
        console.log("Handling Signing out")
        localStorage.removeItem("isLoggedIn")
        this.setState({isLoggedIn: false});
    }
    
    componentDidMount() {
        // if(localStorage.getItem("isLoggedIn") && localStorage.getItem("isLoggedIn") === "true") {
        //     this.setState({isLoggedIn: true});
        // } else {
        //     // eslint-disable-next-line no-restricted-globals
        //     location.reload()
        //     this.setState({isLoggedIn: false});
        // }
    }

    render() {
        return (
            <div className="custom-scrolling-container p-1 w-screen h-screen flex flex-col items-start sm:static absolute">
                <button onClick={this.handleSignout} className=" border border-red-700 w-24 h-9 rounded-lg bg-red-700 text-black hover:bg-slate-900 hover:text-red-700">
                    Sign out
                </button>
                <div className=" w-full h-screen md:h-96 flex md:flex-row flex-col items-center justify-evenly text-center">
                    <div className="hover:bg-slate-400 hover:cursor-pointer hover:text-black bg-slate-700 md:w-1/3 lg:w-1/4 h-2/5 md:h-3/4 rounded-2xl flex flex-col pt-5 items-center">
                        <div className="">
                            <BiAddToQueue size={128} />
                        </div>
                        <div className=" space-y-2">
                            <h2 className=" text-2xl font-bold">Add Project</h2>
                            <p className=" text-lg ">Add your newly created blog</p>
                        </div>
                    </div>
                    <div className="bg-slate-700 hover:cursor-pointer hover:bg-slate-400 hover:text-black md:w-1/3 lg:w-1/4 h-2/5 md:h-3/4 rounded-2xl flex flex-col pt-5 items-center">
                        <div className="">
                            <BiEdit size={128} />
                        </div>
                        <div className=" space-y-2">
                            <h2 className=" text-2xl font-bold">Edit Project</h2>
                            <p className=" text-lg ">Edit your previously created project</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ManageProjects;