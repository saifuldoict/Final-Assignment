import Layout from "./Layout.jsx";
import Footer from "./Footer.jsx";

const MasterLayOut = ({children}) => {


    return (
        <div>
            <Layout/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default MasterLayOut;