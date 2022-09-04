import React from "react";

class NoPage extends React.Component {
    render() {
        return (
            <div className="custom-scrolling-container w-screen h-screen flex justify-center items-center">
                <div className=" w-4/6 h-auto  space-y-3">
                    <h1 className=" text-2xl font-bold text-slate-500 text-center">
                        Hey! I think you got Lost
                    </h1>
                    <div>
                        <p className="text-xl font-semibold text-center">
                            We <span className="text-red-900">don't</span> have any page with this URL
                        </p>
                        <p className="text-xl font-semibold text-center">
                            <span className="text-red-900">Don't</span> Worry Go back to the Home page
                        </p>
                    </div>
                    <a href="/" className=" flex justify-center">
                        <button className=" border border-blue-700 w-32 h-9 rounded-3xl bg-blue-700 text-black hover:bg-slate-900 hover:text-blue-700">Go Back</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default NoPage;