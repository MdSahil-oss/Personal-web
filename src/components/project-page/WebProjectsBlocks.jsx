import { webProjectsList } from './WebProjectsList'

let WebProjectsBlocks = () => {
    const projectsBlocks = webProjectsList.map((projectMetadata) => {
        return (
            <div className="rounded-sm w-72 h-64 my-3 mx-4 text-white bg-slate-800 cursor-pointer flex flex-col items-center space-y-2 pt-1">
                <div className=" h-fit w-fit">
                    <img src={projectMetadata["logo"]} alt="Plone" className='w-24 h-24' />
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
                <button className="border bg-white text-slate-900 hover:bg-slate-900 hover:border-white hover:text-white w-32 h-8 rounded-2xl">
                    Explore
                </button>
            </div>)
    })
    return (
        <>
         {projectsBlocks}
        </>
    )
}

export default WebProjectsBlocks;