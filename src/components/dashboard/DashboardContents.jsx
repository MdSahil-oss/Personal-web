import { FiUpload } from "react-icons/fi";

let DashboardContents = () => {
    let handleSignout = () => {
        console.log("Handling Signing out")
        localStorage.removeItem("isLoggedIn")
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }
    return (
        <div className="custom-scrolling-container p-1 w-screen h-screen flex flex-col items-start sm:static absolute">
            <button onClick={handleSignout} className=" border border-red-700 w-24 h-9 rounded-lg bg-red-700 text-black hover:bg-slate-900 hover:text-red-700">
                Sign out
            </button>
            <div className=" w-full h-screen md:h-96 flex md:flex-row flex-col items-center justify-evenly text-center">
                <a href="/" className="hover:bg-slate-400 hover:text-black bg-slate-700 md:w-1/3 lg:w-1/4 h-2/5 md:h-3/4 rounded-2xl flex flex-col pt-5 items-center">
                    <div className="">
                        <FiUpload size={128} />
                    </div>
                    <div className=" space-y-2">
                        <h2 className=" text-2xl font-bold">Upload Blog</h2>
                        <p className=" text-lg ">Upload your newly created blog</p>
                    </div>
                </a>
                <a href="/dashboard/postproject" className="bg-slate-700 hover:bg-slate-400 hover:text-black md:w-1/3 lg:w-1/4 h-2/5 md:h-3/4 rounded-2xl flex flex-col pt-5 items-center">
                    <div className="">
                        <FiUpload size={128} />
                    </div>
                    <div className=" space-y-2">
                        <h2 className=" text-2xl font-bold">Upload Project</h2>
                        <p className=" text-lg ">Upload your newly created project</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default DashboardContents;