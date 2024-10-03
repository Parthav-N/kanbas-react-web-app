import { Link, useLocation } from "react-router-dom";
import { FaSignInAlt, FaUserPlus, FaUser } from "react-icons/fa"; // Import relevant icons

export default function AccountNavigation() {
    const location = useLocation(); // Use useLocation to access current pathname

    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <Link 
                to="/Kanbas/Account/Signin" 
                id="wd-signin-link"
                className={`list-group-item ${location.pathname === '/Kanbas/Account/Signin' ? 'active bg-primary text-white' : 'text-danger border-0'}`}
            >
                <FaSignInAlt className="me-2" /> Signin
            </Link>

            <Link 
                to="/Kanbas/Account/Signup" 
                id="wd-signup-link"
                className={`list-group-item ${location.pathname === '/Kanbas/Account/Signup' ? 'active bg-primary text-white' : 'text-danger border-0'}`}
            >
                <FaUserPlus className="me-2" /> Signup
            </Link>

            <Link 
                to="/Kanbas/Account/Profile" 
                id="wd-profile-link"
                className={`list-group-item ${location.pathname === '/Kanbas/Account/Profile' ? 'active bg-primary text-white' : 'text-danger border-0'}`}
            >
                <FaUser className="me-2" /> Profile
            </Link>
        </div>
    );
}
