import React from "react";
import AddingForm from "./AddingForm";
import SelectingPage from "./SelectingPage";

class ManageProjects extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignout = this.handleSignout.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onCloseAddingEditing = this.onCloseAddingEditing.bind(this);
        this.state = {
            isLoggedIn: false,
            isAdding: false,
            isEditing: false
        }
    }

    handleSignout() {
        console.log("Handling Signing out")
        localStorage.removeItem("isLoggedIn")
        this.setState({ isLoggedIn: false });
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

    onAdd() {
        console.log("editing off");
        console.log("adding On");
    }

    onEdit() {
        console.log("Adding Off");
        console.log("Editing On");
    }

    onCloseAddingEditing() {
        console.log("Closing adding and editing");
    }

    render() {
        return (
            <div className="custom-scrolling-container p-1 w-screen h-screen flex flex-col items-start sm:static absolute">
                <div className="space-x-1">
                    <button onClick={this.handleSignout} className=" border border-red-700 w-24 h-9 rounded-lg bg-red-700 text-black hover:bg-slate-900 hover:text-red-700">
                        Sign out
                    </button>
                    <a href="/dashboard">
                        <button className=" border border-sky-700 w-24 h-9 rounded-lg bg-sky-700 text-black hover:bg-slate-900 hover:text-sky-700">
                            Dashboard
                        </button>
                    </a>
                </div>
                {(this.state.isAdding || this.state.isEditing) ? (this.state.isAdding ?
                    <AddingForm onCloseAddingEditing={this.onCloseAddingEditing} /> : <div></div>) :
                    <SelectingPage onAdd={this.onAdd} onEdit={this.onEdit} />}
            </div>
        )
    }
}

export default ManageProjects;