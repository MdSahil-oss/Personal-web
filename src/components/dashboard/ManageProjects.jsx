import React from "react";
import SelectingPage from "./SelectingPage";
import EditProjects from "./EditProjects";
import AddProject from "./AddProject";

class ManageProjects extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignout = this.handleSignout.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onCloseAddingEditing = this.onCloseAddingEditing.bind(this);
        this.state = {
            isLoggedIn: false,
            isAddingOn: false,
            isEditingOn: false
        }
    }

    handleSignout() {
        localStorage.removeItem("token")
        localStorage.removeItem("isLoggedIn")
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    componentDidMount() {
        if(!localStorage.getItem("isLoggedIn") || localStorage.getItem("isLoggedIn") !== "true") {
            // this.setState({isLoggedIn: true});
            window.location.replace("/dashboard")
        }
    }

    onAdd() {
        this.setState({
            isAddingOn: true,
            isEditingOn: false
        })
    }

    onEdit() {
        this.setState({
            isAddingOn: false,
            isEditingOn: true
        })
    }

    onCloseAddingEditing() {
        this.setState({
            isAddingOn: false,
            isEditingOn: false
        })
    }

    render() {
        return (
            <div className=" custom-scrolling-container basis-full overflow-y-scroll p-1 w-screen h-screen flex flex-col items-start sm:static absolute">
                <div className=" space-x-1">
                    <button onClick={this.handleSignout} className=" border border-red-500 w-24 h-9 rounded-lg bg-red-500 text-black hover:bg-slate-900 hover:text-red-500">
                        Sign out
                    </button>
                    <a href="/dashboard">
                        <button className=" border border-sky-400 w-24 h-9 rounded-lg bg-sky-400 text-black hover:bg-slate-900 hover:text-sky-400">
                            Dashboard
                        </button>
                    </a>
                </div>
                {(this.state.isAddingOn || this.state.isEditingOn) ?
                    (this.state.isAddingOn ?
                        <AddProject onCloseAddingEditing={this.onCloseAddingEditing} /> :
                        <EditProjects onCloseAddingEditing={this.onCloseAddingEditing}
                        />) :
                    <SelectingPage onAdd={this.onAdd} onEdit={this.onEdit} />}
            </div>
        )
    }
}

export default ManageProjects;