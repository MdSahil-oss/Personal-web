/* eslint-disable no-unused-expressions */
import { connect } from 'react-redux'
import { getProjects } from '../../actions/projects/manageProjects'

let EditProjects = ({ projectsList }) => {
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
                        Explore
                    </button>
                </a>
            </div>)
    })
    return (
        <>
            {projectsBlocks}
        </>
    )
}

export default connect((state) => {
    // eslint-disable-next-line no-label-var, no-labels
    projectsList: state.projects
},
    { getProjects }
)(EditProjects);