import Cookies from "js-cookie";
import {Navigate} from "react-router-dom";


const PrivateRoute = ({ children }) => {
    let isLogin = Cookies.get("token");

    return !!isLogin === true ? children : <Navigate to="/login" />;
};

export default PrivateRoute;