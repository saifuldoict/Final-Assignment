
import MasterLayOut from "../components/MasterLayOut.jsx";
import GetAllTeamMembers from "../components/GetAllTeamMembers.jsx";
import AboutHero from "../components/AboutHero.jsx";

const AboutUs = () => {
    return (
        <MasterLayOut>
            <AboutHero/>
            <GetAllTeamMembers/>

        </MasterLayOut>
    );
};

export default AboutUs;