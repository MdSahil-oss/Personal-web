import WelcomeCard from './WelcomeCard'
import ServiceCard from './ServiceCard'
import ProjectsCard from "./ProjectsCard";

let HomeSection = ({ handleSkillSection }) => {
    return (
        <div className="custom-scrolling-container basis-full overflow-y-scroll space-y-4" >
            <WelcomeCard handleSkillSection={handleSkillSection} />
            <ProjectsCard />
            <ServiceCard />
        </div>
    )
}
export default HomeSection;