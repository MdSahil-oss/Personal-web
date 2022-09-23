import { useState } from "react"
import { useDispatch } from 'react-redux'
import { postProject } from '../../actions/projects'
import React from "react";
import { element } from "prop-types";

const AddProject = (props) => {
    let dispatch = useDispatch();
    let [technologies, setTechnology] = useState("");

    let handleSubmit = () => {
        let mentionedTechnologiesString = document.getElementById("mentionedTechnologies").innerText;
        let name = document.getElementById("name").value;
        let logo = document.getElementById("logo").value;
        let iconName = document.getElementById("iconName").value;
        let mentionedTechnologies = mentionedTechnologiesString.split(', ');
        try {
            if (mentionedTechnologies.length < 3) {
                throw new Error("usedTechnologies must be greater than or equal to 3 technologies");
            }
            else if (iconName !== "" && logo !== "") {
                throw new Error("Only one of Logo and IconName field can be filled");
            }
            else if (iconName === "" && logo === "") {
                throw new Error("One of IconName or Logo field mandotary to fill");
            }

            let techs = [];
            let eachElementOfArrayCanContain = Math.floor(mentionedTechnologies.length / 3)

            for (let i = 0; i < (mentionedTechnologies.length - (mentionedTechnologies.length % 3)); i += eachElementOfArrayCanContain) {
                // Have to improve it.
                let arr = mentionedTechnologies.slice(i, (i + eachElementOfArrayCanContain));
                let str = "";
                arr.forEach((element,index) => {
                    if(index === arr.length-1) {
                        str = str + element
                    } else {
                        str = str + element + ", "
                    }
                })
                str.trim()
                techs.push(str);
            }
            mentionedTechnologies.length % 3 === 1 && (techs[0] += ", " + mentionedTechnologies[mentionedTechnologies.length - 1]);
            mentionedTechnologies.length % 3 === 2 && (techs[1] += ", " + mentionedTechnologies[mentionedTechnologies.length - 2]);

            console.log(techs);
            let data = {
                name: name,
                mentionedTechnologies: techs,
                logo: logo,
                iconName: iconName
            }
            dispatch(postProject('/projects/post', data))
            document.getElementById("mentionedTechnologies").innerText = ""
            document.getElementById("name").value = "";
            document.getElementById("logo").value = "";
            document.getElementById("iconName").value = "";
            setTechnology("");
            console.info("Request has been sent successfully")
        } catch (error) {
            console.error(error);
        }
    }

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
                                    document.getElementById("enteredTechnology").value = ""
                                }} className=" border border-green-400 w-16 h-9 rounded-3xl bg-green-400 text-black hover:bg-slate-900 hover:text-green-400">+</button>
                            </div>
                        </div>
                        {technologies === "" ? undefined : <div id="mentionedTechnologies" className="border w-full h-auto space-x-3 flex justify-between">{technologies}</div>}
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
                    <button onClick={handleSubmit} className="hover:bg-slate-900 text-white border border-slate-700 bg-slate-700  hover:text-slate-700 w-32 h-9 rounded-2xl">
                        Push
                    </button>
                    <button onClick={props.onCloseAddingEditing} className=" border border-sky-400 w-32 h-9 rounded-3xl bg-sky-400 text-black hover:bg-slate-900 hover:text-sky-400">
                        Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddProject;