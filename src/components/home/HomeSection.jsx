import WelcomeCard from './WelcomeCard'
import ServiceCard from './ServiceCard'
import ProjectsCard from "./ProjectsCard";

let HomeSection = ({ handleSkillSection }) => {
    return (
        <div id="home-right-container" className="border-2 border-blue-500 basis-full overflow-y-scroll space-y-4" >
            <WelcomeCard handleSkillSection={handleSkillSection} />
            <ServiceCard />
            <ProjectsCard />
        </div>
    )
}
export default HomeSection;