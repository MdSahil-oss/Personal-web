import React from "react";
import WebProjects from "./WebProjects";

class Projects extends React.Component {
    render() {
        return (
            <div className="custom-scrolling-container border-2 border-green-700 basis-full h-screen overflow-y-auto">
                <WebProjects />                
            </div>
        )
    }
}

export default Projects;