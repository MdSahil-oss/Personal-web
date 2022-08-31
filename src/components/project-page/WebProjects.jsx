import WebProjectsBlocks from './WebProjectsBlocks'

let WebProjects = () => {
   
    return (
        <div className="border-2 border-red-500 w-11/12 m-auto h-auto flex flex-col space-y-2">
            <h2 className="text-slate-600 font-bold text-xl">Web projects</h2>
            <div className="border-2 w-full h-auto flex flex-row flex-wrap justify-center">
                <WebProjectsBlocks />
            </div>
        </div>
    )
}

export default WebProjects;