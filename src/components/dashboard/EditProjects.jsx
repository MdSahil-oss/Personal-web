/* eslint-disable no-unused-expressions */
import { connect } from 'react-redux'
import { getProjects } from '../../actions/projects'
import React, { useEffect, useState } from 'react';;

let EditProjects = (props) => {
    let [projectsList, setProjectsList] = useState([])
    useEffect(() => {
        props.getData('/api/')
        if (props.projects["data"] !== undefined) {
            setProjectsList(props.projects["data"])
        }
        // console.log("ran getProjects")
    }, [])
    useEffect(() => {
        if (props.projects["data"] !== undefined) {
            setProjectsList(props.projects["data"])
        }
    }, [props.projects])
    console.log(projectsList)
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
                <a href="/projects">
                    <button className="bg-white border border-slate-900 text-slate-900 hover:bg-slate-700 hover:border-white hover:text-white w-32 h-8 rounded-2xl">
                        Edit
                    </button>
                </a>
            </div>)
    })
    return (
        <>
            {projectsBlocks}
            <div className="m-auto w-fit space-x-2 pl-12 flex">
                <button onClick={props.onCloseAddingEditing} className=" border border-red-700 w-32 h-9 rounded-3xl bg-red-700 text-black hover:bg-slate-900 hover:text-red-700">
                    Cancel
                </button>
            </div>
        </>
    )
}

// Maps `state` to `props`:
// These will be added as props to the component.
function mapState(state) {
    return { projects: state.projects.data }
}

// Maps `dispatch` to `props`:
function mapDispatch(dispatch) {
    return {
        getData(url) {
            dispatch(getProjects(url))
        }
    }
}

export default connect(mapState, mapDispatch)(EditProjects);