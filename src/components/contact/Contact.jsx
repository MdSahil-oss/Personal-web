import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div className="custom-scrolling-container border basis-full h-screen overflow-x-auto flex justify-center items-center">
                <div className="border w-3/5 h-auto text-center text-slate-500">
                    <h3 className=" text-3xl font-bold">Let me know the reason</h3>
                    <h4 className=" text-lg font-semibold">why do you want to contact me</h4>
                    <form action="" method="post">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" type="text" />
                        </div>
                        <div>
                            <input type="button" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;