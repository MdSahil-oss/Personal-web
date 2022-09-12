import React from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import NavLinks from "./NavkLinks";
import { BiUser } from "react-icons/bi";// import PropTypes from 'prop-types';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavClosed: true,
            isDisplaySmall: window.screen.width <= 640,
        }
        this.handleNavbar = this.handleNavbar.bind(this);
    }

    handleNavbar() {
        this.setState({
            isNavClosed: !this.state.isNavClosed,
        })
    }

    render() {
        return (
            <nav className={((this.state.isDisplaySmall && this.state.isNavClosed) ? "basis-9" : "basis-20 flex shrink-0") + " h-screen z-10"}>
                <div className={(!this.state.isDisplaySmall && "hidden") + (this.state.isNavClosed ? " basis-1/4 pl-3" : " basis-0") +
                    " bg-transparent"}>
                    <button className=" bg-slate-600 h-16 rounded-l-md" onClick={this.handleNavbar}>
                        {this.state.isNavClosed && <HiChevronLeft size={24} />}
                    </button>
                </div>
                {!this.state.isDisplaySmall ?
                    <div className="h-screen basis-full bg-slate-600">
                        <div className=" justify-center h-1/6 flex flex-col items-center">
                            <div className=" rounded-full p-0 w-10 h-10 focus:bg-slate-700 dark:bg-white dark:text-black hover:bg-slate-700 hover:text-slate-50 ">
                                <a href="/dashboard" className="h-full w-full flex justify-center items-center" >
                                    <BiUser />
                                </a>
                            </div>
                        </div>
                        <NavLinks />
                    </div> :
                    (!this.state.isNavClosed &&
                        <div className="h-screen basis-full bg-slate-600 pl-0">
                            <div className=" justify-around h-1/6 flex flex-col items-center">
                                <button className="border-2 border-black rounded-full" onClick={this.handleNavbar}>
                                    <HiChevronRight size={24} />
                                </button>
                                <div className=" rounded-full p-0 w-10 h-10 focus:bg-slate-700 dark:bg-white dark:text-black hover:bg-slate-700 hover:text-slate-50 ">
                                    <a href="/dashboard" className="h-full w-full flex justify-center items-center" >
                                        <BiUser />
                                    </a>
                                </div>
                            </div>
                            <NavLinks />
                        </div>
                    )
                }
            </nav>
        )
    }
}

export default Navbar;
