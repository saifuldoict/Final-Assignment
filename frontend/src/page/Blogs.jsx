import MasterLayOut from "../components/MasterLayOut.jsx";
import GetAllBlogs from "../components/GetAllBlogs.jsx";
import Slider from "../components/Slider.jsx";

const Blogs = () => {
    return (
        <MasterLayOut>
            <Slider/>
            <GetAllBlogs limit={100} />  {/* Show all blogs */}
        </MasterLayOut>
    );
};

export default Blogs;
