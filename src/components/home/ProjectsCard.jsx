import { BsCodeSlash } from "react-icons/bs"

let ProjectsCard = () => {
    return (
        <div className="w-11/12 h-auto rounded-xl m-auto text-white bg-slate-200 dark:bg-slate-800">
            <div className='text-center space-y-1'>
                <h2 className='text:xl md:text-2xl font-bold'>
                    Projects
                </h2>
                <p className='m-auto w-4/6 text-sm md:text-base'>
                    Here is the links of a few projects that have been built by me<br />
                    If interested then check it out
                </p>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap items-center justify-evenly py-5 space-y-2'>
                <a href="/">
                    <div className="rounded-md w-60 h-60 my-3 mx-4 text-white bg-slate-700 hover:bg-slate-300 hover:text-slate-900 cursor-pointer flex flex-col items-center space-y-2 pt-1">
                        <div className="p-2 text-slate-900 bg-white rounded-full h-fit w-fit">
                            <BsCodeSlash size={64} />
                        </div>
                        <div className="w-11/12 space-y-2 flex flex-col items-center">
                            <h2 className=" text-xl text-center">
                                Undo Controlpanel
                            </h2>
                            <div className='text-center text-sm w-4/5'>
                                <p>
                                    This is the project I built during my contribution period of Google Summer of code at the organization Plone.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/">
                    <div className="rounded-md w-60 h-60 my-3 mx-4 text-white bg-slate-700 hover:bg-slate-300 hover:text-slate-900 cursor-pointer flex flex-col items-center space-y-2 pt-1">
                        <div className="p-2 text-slate-900 bg-white rounded-full h-fit w-fit">
                            <BsCodeSlash size={64} />
                        </div>
                        <div className="w-11/12 space-y-2 flex flex-col items-center">
                            <h2 className=" text-xl text-center">
                                InfoAbout.me                            </h2>
                            <div className='text-center text-sm w-4/5'>
                                <p>
                                    This is the project I built during my contribution period of Google Summer of code at the organization Plone.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/">
                    <div className="rounded-md w-60 h-60 my-3 mx-4 text-white bg-slate-700 hover:bg-slate-300 hover:text-slate-900 cursor-pointer flex flex-col items-center space-y-2 pt-1">
                        <div className="p-2 text-slate-900 bg-white rounded-full h-fit w-fit">
                            <BsCodeSlash size={64} />
                        </div>
                        <div className="w-11/12 space-y-2 flex flex-col items-center">
                            <h2 className=" text-xl text-center">
                                Personal Website
                            </h2>
                            <div className='text-center text-sm w-4/5'>
                                <p>
                                    This is the project I built during my contribution period of Google Summer of code at the organization Plone.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                {/* <div className='border border-gray-500 w-4/5 sm:w-96 h-96 rounded-xl flex flex-col justify-evenly items-center'>
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
                </div> */}
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