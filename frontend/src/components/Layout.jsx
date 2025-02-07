import { Link, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { logOutUser } from "../apiCalls/apiCalls.js";
import { useState } from "react";
import Loader from "./Loader.jsx";
import { FiMenu, FiX } from "react-icons/fi";

const Layout = () => {
    const [loading, setLoading] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    let isLogin = Cookies.get("token");

    const onLogout = async () => {
        setLoading(true);
        let result = await logOutUser();
        if (result) {
            window.location.href = "/";
            setLoading(false);
        }
    };

    return (
        <section>
            {loading && <Loader />}
            <header className="bg-purple-50 shadow-md dark:bg-dark flex h-[80px] px-4 md:px-6 lg:px-10">
                <div className="container-fluid mx-auto flex items-center justify-between w-full">
                    {/* Logo */}
                    <Link to="/">
                        <img src="logo.png" className="min-w-[80px] max-w-[90px]" alt="Logo" />
                    </Link>

                    <button
                        className="md:hidden text-gray-700 dark:text-white text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>

                    <nav
                        className={`fixed md:relative inset-0 md:inset-auto md:flex md:items-center md:justify-center bg-white dark:bg-gray-900 z-50 md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 w-full md:w-auto ${
                            menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                        }`}
                    >
                        <ul className="flex flex-col md:flex-row gap-6 md:gap-4 md:text-nowrap items-center p-10 md:p-0">
                            {[
                                { path: "/", label: "Home" },
                                { path: "/aboutus", label: "About Us" },
                                { path: "/blogs", label: "All Blogs" },
                                { path: "/services", label: "Services" },
                                { path: "/contact", label: "Contact" }
                            ].map(({ path, label }) => (
                                <li key={path}>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "px-4 py-2 bg-gray-700 text-white rounded-xl"
                                                : "px-4 py-2 bg-gray-200 rounded-xl"
                                        }
                                        to={path}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        {!!isLogin ? (
                            <>
                                <button
                                    onClick={onLogout}
                                    className="bg-red-700 text-white rounded-xl px-4 py-2  md:text-nowrap md:px-6 md:py-2 md:text-sm md: lg:px-10"
                                >
                                    Log Out
                                </button>
                                <Link
                                    to="/dashboard"
                                    className="bg-purple-700 text-white rounded-xl px-4 py-2 md:text-nowrap md:px-6 md:py-2 md:text-sm md: lg:px-10"
                                >
                                    Go Dashboard
                                </Link>
                            </>
                        ) : null}
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Layout;
