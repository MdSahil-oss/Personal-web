import React from "react";
import ProjectsBlocks from "./ProjectsBlocks";

class Projects extends React.Component {
    render() {
        return (
            <div className="custom-scrolling-container basis-full overflow-y-auto space-y-5 sm:static absolute w-screen h-screen">
                <div className="w-11/12 m-auto h-auto flex flex-col space-y-2">
                    <h2 className="text-slate-600 font-bold text-xl">Projects</h2>
                    <div className=" w-full h-auto flex flex-row flex-wrap justify-center rounded-xl">
                        <ProjectsBlocks />
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;