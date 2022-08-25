import { HiOutlineX } from "react-icons/hi"
import ProfileCard from './ProfileCard'
import SkillsCard from './SkillsCard'

let SkillSection = ({ handleSkillSection, isSkillOpened }) => {
    return (
        <div id="home-left-container" className={
            "border-2 border-violet-500 bg-slate-600 text-white lg:basis-4/12 lg:block lg:static absolute h-screen w-80 sm:w-96 overflow-y-auto"
            + (!isSkillOpened && " hidden")
        } >
            <div>
                {window.screen.width < 1024 &&
                    <button className="border-2 border-slate-300 rounded-full" onClick={handleSkillSection}>
                        <HiOutlineX size={24} />
                    </button>
                }
            </div>
            <div>
                <ProfileCard />
                <SkillsCard />
            </div>
        </div>
    )
}

export default SkillSection;