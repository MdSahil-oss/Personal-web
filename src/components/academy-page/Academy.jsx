import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BsGithub } from 'react-icons/bs'

class Academy extends React.Component {
    render() {
        return (
            <div className="custom-scrolling-container sm:static h-screen w-screen overflow-x-auto absolute flex flex-row justify-around p-10 flex-wrap">
                <div className="w-2/5 h-4/5 flex flex-col items-center space-y-3 m-10 rounded-2xl bg-slate-700 hover:text-slate-900 hover:bg-slate-300 text-white">
                    <div className=" rounded-full w-fit h-fit">
                        <HiOutlineAcademicCap size={72} />
                    </div>
                    <div className=" text-center w-4/5 space-y-2">
                        <h1 className=" text-2xl font-bold">Undergrade Student</h1>
                        <p className="">
                            I'm currently a Undergraduate student who is pursuing bachelors in Computer Science from
                            MDU (Maharshi Dayanand University) and expected graduation date is August 2024.
                        </p>
                        <p className="">
                            I'm also an Open source contributor where I keep contributing to organizations' open source projects.
                        </p>
                        <p className="">
                            The organizations I contributed to yet are <a className=" underline" href="https://plone.org/">Plone</a>&nbsp;
                            and <a className="underline" href="https://www.cncf.io/">CNCF</a> in the repositories like&nbsp;
                            <a className="underline" href="https://github.com/plone/volto">Volto</a>, <a className="underline" href="https://github.com/plone/plone.restapi">plone.restapi</a>,&nbsp;
                            <a className="underline" href="https://www.google.com/">DNS-server</a> and <a className="underline" href="http://www.google.com/">Kyverno</a>.
                        </p>
                        <p>
                            For more information about my github contributions visit my my github page.
                        </p>
                    </div>
                    <a target="_blank" href="https://github.com/MdSahil-oss/">
                        <button className="border m-auto flex justify-evenly items-center border-slate-900 hover:bg-slate-800 hover:text-slate-300 rounded-2xl h-8 w-24">
                            <BsGithub />
                            Github
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Academy;