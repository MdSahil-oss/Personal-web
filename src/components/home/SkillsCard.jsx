import { BsExclude } from "react-icons/bs";

let SkillsCard = () => {
    return (
        <div className=" w-full h-96 space-y-4">
            <div className=" w-4/5 h-auto m-auto space-y-1">
                <h3 className=" text-lg text-slate-400 font-semibold underline">
                    Languages
                </h3>
                <div className=" space-y-1">
                    <div className="">
                        <div className="w-11/12 flex justify-between">
                            <p>English</p>
                            <p>80%</p>
                        </div>
                        <div className="border h-1 w-11/12">
                            <div className="bg-white h-full w-11/12 "></div>
                        </div>
                    </div>
                    <div>
                        <div className="w-11/12 flex justify-between">
                            <p>Hindi</p>
                            <p>100%</p>
                        </div>
                        <div className="border h-1 w-11/12">
                            <div className="bg-white h-full w-12/12 "></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-4/5 h-auto m-auto space-y-1">
                <hr />
                <h3 className="text-slate-400 text-lg font-semibold underline">
                    Skills
                </h3>
                <div className=" space-y-1">
                    <div className="">
                        <div className="w-11/12 flex justify-between">
                            <p>HTML</p>
                            <p>100%</p>
                        </div>
                        <div className="border h-1 w-11/12">
                            <div className="bg-white h-full w-12/12 "></div>
                        </div>
                    </div>
                    <div>
                        <div className="w-11/12 flex justify-between">
                            <p>Css</p>
                            <p>75%</p>
                        </div>
                        <div className="border h-1 w-11/12">
                            <div className="bg-white h-full w-10/12 "></div>
                        </div>
                    </div>
                    <div>
                        <div className="w-11/12 flex justify-between">
                            <p>Javascript</p>
                            <p>80%</p>
                        </div>
                        <div className="border h-1 w-11/12">
                            <div className="bg-white h-full w-11/12 "></div>
                        </div>
                    </div>
                    <div>
                        <div className="w-11/12 flex justify-between">
                            <p>React</p>
                            <p>70%</p>
                        </div>
                        <div className="border h-1 w-11/12">
                            <div className="bg-white h-full w-9/12 "></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-4/5 h-auto m-auto space-y-1">
                <hr />
                <h3 className="text-slate-400 text-lg font-semibold underline">
                    Extra Skills
                </h3>
                <div>
                    <div className="flex space-x-2">
                        <BsExclude />
                        <p>Bootstrap, Tailwindcss</p>
                    </div>
                    <div className="flex space-x-2">
                        <BsExclude />
                        <p>Linux, Node.js, Express.js</p>
                    </div>
                    <div className="flex space-x-2">
                        <BsExclude />
                        <p>C/C++, Java, Python</p>
                    </div>
                    <div className="flex space-x-2">
                        <BsExclude />
                        <p>Git, Github</p>
                    </div>
                    <div className="flex space-x-2">
                        <BsExclude />
                        <p>Docker, Kubernetes</p>
                    </div>
                </div>
            </div>
            <hr className="w-4/5 m-auto" />
            <div className=" flex justify-center items-center w-4/5 h-auto m-auto space-y-1">
                <button className="border  p-2 rounded-lg bg-white text-slate-800 hover:bg-slate-600 hover:text-white">Download Resume</button>
            </div>
        </div>
    )
}

export default SkillsCard;