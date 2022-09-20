import { getProjects, deleteProject } from '../../actions/projects'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

let EditProjects = (props) => {
    let projectsList = [];
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects('/projects/getAll'))
    }, [dispatch])

    let gettingProjects = useSelector((state) => state.projects.data["data"]);
    projectsList = gettingProjects === undefined ? [] : gettingProjects;

    let onDelete = (id) => {
        try {
            let data = { id };
            dispatch(deleteProject('/projects/delete', data));
        } catch (error) {
            console.error("You got an error", error);
        } finally {
            console.info("your request of deletion has been sent");
        }
    }

    let onEdit = () => {
        console.log("You're now Editing something");
    }
    const projectsBlocks = projectsList.map((projectMetadata) => {
        return (
            <div className="rounded-xl w-72 h-64 my-3 mx-4 text-white bg-slate-700 hover:bg-slate-400 hover:text-slate-900 cursor-pointer flex flex-col items-center space-y-2 pt-1">
                <div className=" h-fit w-fit">
                    {projectMetadata["icon"] ?
                        <div className='border rounded-full flex justify-center items-center w-24 h-24 bg-white text-slate-900'>
                            {projectMetadata["icon"]}
                        </div>
                        : <img src={projectMetadata["logo"]} alt="No logo" className='w-24 h-24' />}
                </div>
                <div className="w-11/12 space-y-2">
                    <h2 className=" text-xl text-center">
                        {projectMetadata["name"]}
                    </h2>
                    <div className=' text-sm'>
                        {projectMetadata.usedTechnologies.map((element) => {
                            return (
                                <p>
                                    - {element}
                                </p>
                            )
                        })}
                    </div>
                </div>
                <div className='w-full flex flex-flow justify-evenly'>
                    <button onClick={onEdit} className="bg-white border border-slate-900 text-slate-900 hover:bg-slate-700 hover:text-white w-32 h-8 rounded-2xl">
                        Edit
                    </button>
                    <button onClick={() => { onDelete(projectMetadata["_id"]) }} className="bg-white border border-red-900 text-red-900 hover:bg-red-700  hover:text-white w-32 h-8 rounded-2xl">
                        Delete
                    </button>
                </div>
            </div>)
    })
    return (
        <div className='w-full h-auto'>
            <div className='flex flex-row flex-wrap justify-center'>
                {projectsBlocks}
            </div>
            <div className="m-auto w-fit space-x-2 pl-12 flex">
                <button onClick={props.onCloseAddingEditing} className=" border border-sky-400 w-32 h-9 rounded-3xl bg-sky-400 text-black hover:bg-slate-900 hover:text-sky-400">
                    Back
                </button>
            </div>
        </div>
    )
}

export default EditProjects;