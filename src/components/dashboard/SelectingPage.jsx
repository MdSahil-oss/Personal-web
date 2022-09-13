import { BiAddToQueue, BiEdit } from "react-icons/bi";

const SelectingPage = ({onAdd, onEdit}) => {
    return (
        <div className=" w-full h-screen md:h-96 flex md:flex-row flex-col items-center justify-evenly text-center">
            <div onClick={onAdd} className="hover:bg-green-500 hover:cursor-pointer hover:text-black bg-slate-700 md:w-1/3 lg:w-1/4 h-2/5 md:h-3/4 rounded-2xl flex flex-col pt-5 items-center">
                <div className="">
                    <BiAddToQueue size={128} />
                </div>
                <div className=" space-y-2">
                    <h2 className=" text-2xl font-bold">Add Project</h2>
                    <p className=" text-lg ">Add your newly created blog</p>
                </div>
            </div>
            <div onClick={onEdit} className="bg-slate-700 hover:cursor-pointer hover:bg-slate-400 hover:text-black md:w-1/3 lg:w-1/4 h-2/5 md:h-3/4 rounded-2xl flex flex-col pt-5 items-center">
                <div className="">
                    <BiEdit size={128} />
                </div>
                <div className=" space-y-2">
                    <h2 className=" text-2xl font-bold">Edit Project</h2>
                    <p className=" text-lg ">Edit your previously created project</p>
                </div>
            </div>
        </div>
    )
}

export default SelectingPage;