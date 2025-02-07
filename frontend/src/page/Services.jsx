import MasterLayOut from "../components/MasterLayOut.jsx";
import GetAllService from "../components/GetAllService.jsx";
import ServiceHero from "../components/ServiceHero.jsx";

const Services = () => {
    return (
        <MasterLayOut>
            <ServiceHero/>
            <GetAllService limit={100}/>



        </MasterLayOut>
    );
};

export default Services;