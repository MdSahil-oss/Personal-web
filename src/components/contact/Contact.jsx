import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div className="custom-scrolling-container border basis-full h-screen overflow-x-auto flex justify-center items-center">
                <div className="border w-3/5 h-auto text-slate-500 space-y-5">
                    <div className="text-center flex flex-col justify-center items-center">
                        <h3 className=" text-3xl font-bold">Let me know the reason</h3>
                        <h4 className=" text-lg font-semibold">why do you want to contact me</h4>
                    </div>
                    <form className="space-y-5 flex flex-col justify-center items-center">
                        <div className=" space-x-3 w-5/12 flex justify-between">
                            <label htmlFor="name">Name</label>
                            <input id="name" className="w-72 h-10 rounded-3xl text-center" type="text" />
                        </div>
                        <div className=" space-x-3 w-5/12 flex justify-between">
                            <label htmlFor="email">Email</label>
                            <input id="email" className="w-72 h-10 rounded-3xl text-center" type="email" />
                        </div>
                        <div className=" space-x-3 w-5/12 flex">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" className="w-72 rounded-xl h-32 " type="text" />
                        </div>
                        <div className="w-fit space-x-2 pl-12 flex">
                            {/* <input type="button" className=" border w-32 h-9 rounded-3xl" value="Submit" /> */}
                            <button className=" border border-blue-500 w-32 h-9 rounded-3xl bg-blue-500 hover:bg-slate-900 hover:text-blue-500 text-slate-900">Sumit</button>
                            <button className=" border border-red-700 w-32 h-9 rounded-3xl bg-red-700 text-black hover:bg-slate-900 hover:text-red-700">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;