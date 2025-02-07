import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import LogIn from "./page/LogIn.jsx";
import SignUp from "./page/SignUp.jsx";
import Blogs from "./page/Blogs.jsx";
import AboutUs from "./page/AboutUs.jsx";
import ContactPage from "./page/ContactPage.jsx";
import {Toaster} from "react-hot-toast";
import DashBoard from "./page/DashBoard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Services from "./page/Services.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Toaster position="top-center" reverseOrder={false}/>
            <Routes>
                <Route path="/" element={<HomePage /> } />
                <Route path="/login" element={ <LogIn/> } />
                <Route path="/signUp" element={ <SignUp/> } />
                <Route path="/blogs" element={<Blogs/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/dashboard" element={ <PrivateRoute> <DashBoard/> </PrivateRoute> } />

            </Routes>
        </BrowserRouter>
    );
};

export default App;