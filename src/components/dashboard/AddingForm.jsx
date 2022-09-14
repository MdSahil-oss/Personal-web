import { useState } from "react"

const AddingForm = ({ onCloseAddingEditing }) => {

    let [technologies, setTechnology] = useState("")

    return (
        <div className=" custom-scrolling-container w-full sm:static absolute h-screen overflow-x-auto flex justify-center items-center">
            <div className=" w-10/12 sm:w-3/5 h-auto text-slate-500 space-y-5">
                <div className=" text-center flex flex-col justify-center items-center">
                    <h3 className=" text-3xl font-bold">Add project details</h3>
                </div>
                <form className=" w-full space-y-5 flex flex-col justify-center items-center">
                    <div className=" w-full sm:w-4/5 space-y-2 flex flex-col items-center">
                        <div className=" w-full space-x-3  flex justify-between">
                            <label htmlFor="name">Name</label>
                            <input id="name" className="w-2/5 h-10 rounded-3xl text-center" type="text" />
                        </div>
                        <div className="w-full space-x-3 flex justify-between">
                            <label htmlFor="technologies">Technologies</label>
                            <div className=" lg:w-2/5 space-x-2">
                                <input id="enteredTechnology" required className="w-3/5 h-10 rounded-3xl text-center" type="text" />
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    if (technologies === "") {
                                        setTechnology(document.getElementById("enteredTechnology").value)
                                    } else {
                                        setTechnology(technologies + ', ' + document.getElementById("enteredTechnology").value)
                                    }
                                }} className=" border border-green-400 w-16 h-9 rounded-3xl bg-green-400 text-black hover:bg-slate-900 hover:text-green-400">+</button>
                            </div>
                        </div>
                        {technologies === "" ? undefined : <div className="border w-full h-auto space-x-3 flex justify-between">{technologies}</div>}
                        <div className="w-full space-x-3 flex justify-between">
                            <label htmlFor="iconName">IconName</label>
                            <input id="iconName" className="w-2/5 h-10 rounded-3xl text-center" type="text" />
                        </div>
                        <div className="w-full space-x-3 flex">
                            <label htmlFor="logo">Logo</label>
                            <input id="logo" type="file" />
                        </div>
                    </div>
                </form>
                <div className="m-auto w-fit space-x-2 pl-12 flex">
                    <button className="hover:bg-slate-900 text-white border border-slate-700 bg-slate-700  hover:text-slate-700 w-32 h-9 rounded-2xl">
                        Submit
                    </button>
                    <button onClick={onCloseAddingEditing} className=" border border-red-700 w-32 h-9 rounded-3xl bg-red-700 text-black hover:bg-slate-900 hover:text-red-700">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddingForm