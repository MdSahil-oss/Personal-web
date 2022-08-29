import { HiOutlineAcademicCap } from "react-icons/hi";
import { BsHouse, BsJournalCode } from "react-icons/bs";
import { CgWorkAlt } from "react-icons/cg";
import { BiMessage } from "react-icons/bi";

function NavLinks() {
    return (
        <div className=" h-3/6 flex flex-col justify-evenly items-center">
            {[
                [<BsHouse size={24} />, '/'],
                [<BsJournalCode size={24} />, '/projects'],
                [<HiOutlineAcademicCap size={24} />, '/academy'],
                [<CgWorkAlt size={24} />, '/work'],
                [<BiMessage size={24} />, '/contact'],
            ].map(([title, url]) => (
                <div className=" rounded-full p-0 w-10 h-10 focus:bg-slate-700 dark:bg-white dark:text-black hover:bg-slate-700 hover:text-slate-50 ">
                    <a href={url} className="h-full w-full flex justify-center items-center" >
                        {title}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default NavLinks;