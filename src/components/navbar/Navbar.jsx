import React from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { BsMask } from "react-icons/bs";
import NavLinks from "./NavkLinks";
import PropTypes from 'prop-types';

class Navbar extends React.Component {

    static propTypes = {
        handleDarkmode: PropTypes.func.isRequired,
    }

    static defaultProps = {
        handleDarkmode: null,
    }

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
                        <div className=" justify-evenly h-1/6 flex flex-col items-center">
                            <button >
                                <BsMask size={24} onClick={this.props.handleDarkmode} />
                            </button>
                        </div>
                        <NavLinks />
                    </div> :
                    (!this.state.isNavClosed &&
                        <div className="h-screen basis-full bg-slate-600 pl-0">
                            <div className=" justify-evenly h-1/6 flex flex-col items-center">
                                <button className="border-2 border-black rounded-full" onClick={this.handleNavbar}>
                                    <HiChevronRight size={24} />
                                </button>
                                <button >
                                    <BsMask size={24} onClick={this.props.handleDarkmode}/>
                                </button>
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
