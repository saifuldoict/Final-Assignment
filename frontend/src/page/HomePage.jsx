import MasterLayOut from "../components/MasterLayOut.jsx";
import GetAllBlogs from "../components/GetAllBlogs.jsx";
import Hero from "../components/Hero.jsx";

const HomePage = () => {
    return (
        <MasterLayOut>
            <Hero/>
            <GetAllBlogs limit={6} />  {/* Show only 6 blogs */}
        </MasterLayOut>
    );
};

export default HomePage;
