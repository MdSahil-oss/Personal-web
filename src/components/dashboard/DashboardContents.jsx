import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";


let DashboardContents = () => {
    let handleSignout = () => {
        // console.log("Handling Signing out")
        localStorage.removeItem("token")
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }
    return (
        <div className="custom-scrolling-container p-1 w-screen h-screen flex flex-col items-start sm:static absolute">
            <button onClick={handleSignout} className=" border border-red-700 w-24 h-9 rounded-lg bg-red-700 text-black hover:bg-slate-900 hover:text-red-700">
                Sign out
            </button>
            <div className=" w-full h-screen md:h-96 flex md:flex-row flex-col items-center justify-evenly text-center">
                <a href="/" className="hover:bg-sky-400 hover:text-black space-y-3 bg-slate-700 md:w-1/3 lg:w-1/4 h-2/5 md:h-3/4 rounded-2xl flex flex-col pt-5 items-center">
                    <div className="">
                        <HiOutlineBookOpen size={128} />
                    </div>
                    <div className=" space-y-2">
                        <h2 className=" text-2xl font-bold">Manage Blogs</h2>
                        <p className=" text-lg ">Create, Delete, Edit, or Post your blogs</p>
                    </div>
                </a>
                <a href="/dashboard/postproject" className="bg-slate-700 hover:bg-sky-400 hover:text-black space-y-3 md:w-1/3 lg:w-1/4 h-2/5 md:h-3/4 rounded-2xl flex flex-col pt-5 items-center">
                    <div className="">
                        <AiOutlineSetting size={128} />
                    </div>
                    <div className=" space-y-2">
                        <h2 className=" text-2xl font-bold">Manage Projects</h2>
                        <p className=" text-lg ">Create, Delete, Edit, or Post your projects</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default DashboardContents;