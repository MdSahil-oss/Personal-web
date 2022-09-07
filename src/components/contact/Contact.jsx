import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div className=" custom-scrolling-container basis-full sm:static absolute h-screen w-screen overflow-x-auto flex justify-center items-center">
                <div className=" w-10/12 sm:w-3/5 h-auto text-slate-500 space-y-5">
                    <div className=" text-center flex flex-col justify-center items-center">
                        <h3 className=" text-3xl font-bold">Let me know the reason</h3>
                        <h4 className=" text-lg font-semibold">why do you want to contact me</h4>
                    </div>
                    <form className=" w-full space-y-5 flex flex-col justify-center items-center">
                        <div className=" space-x-3 w-4/5 lg:w-5/12 flex justify-between">
                            <label htmlFor="name">Name</label>
                            <input id="name" className="w-4/5 h-10 rounded-3xl text-center" type="text" />
                        </div>
                        <div className=" space-x-3 w-4/5 lg:w-5/12 flex justify-between">
                            <label htmlFor="email">Email</label>
                            <input id="email" className="w-4/5 h-10 rounded-3xl text-center" type="email" />
                        </div>
                        <div className=" w-4/5 lg:w-5/12 space-x-3 flex">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" className=" w-4/5 rounded-xl h-32 " type="text" />
                        </div>
                    </form>
                    <div className="m-auto w-fit space-x-2 pl-12 flex">
                        <button className="hover:bg-slate-900 text-white border border-slate-700 bg-slate-700  hover:text-slate-700 w-32 h-9 rounded-2xl">
                            Submit
                        </button>
                        <a href="/">
                            <button className=" border border-red-700 w-32 h-9 rounded-3xl bg-red-700 text-black hover:bg-slate-900 hover:text-red-700">
                                Cancel
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;