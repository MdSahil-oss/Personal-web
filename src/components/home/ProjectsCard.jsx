import { BsCodeSlash } from "react-icons/bs"

let ProjectsCard = () => {
    return (
        <div className="border border-slate-400 w-11/12 h-auto rounded-xl m-auto text-white bg-slate-200 dark:bg-slate-800">
            <div className='text-center space-y-1'>
                <h2 className='text:xl md:text-2xl font-bold'>
                    Projects
                </h2>
                <p className='m-auto w-4/6 text-sm md:text-base'>
                    Here is the links of a few projects that have been built by me<br />
                    If interested then check it out
                </p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-evenly py-5 space-y-2'>
                <div className='border border-gray-500 w-4/5 sm:w-96 h-96 rounded-xl flex flex-col justify-evenly items-center'>
                    <div className='w-min p-3 border border-gray-500 rounded-full'>
                        <BsCodeSlash size={64} />
                    </div>
                    <div className='w-4/5 text-center space-y-3'>
                        <h3 className='text-2xl font-semibold'>
                            Undo ControlPanel
                        </h3>
                        <p>
                            This is the project I built during my contribution period of Google Summer of code at the organization Plone.
                        </p>
                    </div>
                    <a href="/">
                        <button className="w-28 h-10 rounded-3xl bg-slate-600 hover:bg-slate-700 text-white">
                            Explore
                        </button>
                    </a>
                </div>
                <div className='border border-gray-500 w-4/5 h-96 sm:w-96 rounded-xl flex flex-col justify-evenly items-center'>
                    <div className='w-min border border-gray-500 p-3 rounded-full'>
                        <BsCodeSlash size={64} />
                    </div>
                    <div className='w-4/5 text-center space-y-3'>
                        <h3 className='text-2xl font-semibold'>
                            Personal Website
                        </h3>
                        <p>
                            This is the web site you're on.
                        </p>
                    </div>
                    <a href="/">
                        <button className="w-28 h-10 rounded-3xl bg-slate-600 hover:bg-slate-700 text-white">
                            Explore
                        </button>
                    </a>
                </div>
            </div>
            <div className="flex flex-row space-x-2 w-fit m-auto">
                <a href="/">
                    <button className="w-20 h-7 rounded-3xl bg-white hover:bg-slate-300 text-slate-700">
                        More
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ProjectsCard;