import { Link, useLocation } from "react-router-dom";
import { FaSignInAlt, FaUserPlus, FaUser } from "react-icons/fa"; // Import relevant icons

export default function AccountNavigation() {
    const location = useLocation(); // Use useLocation to access current pathname

    const isActive = (path: string) => location.pathname.startsWith(path);

    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <Link 
                to="/Kanbas/Account/Signin" 
                id="wd-signin-link"
                className={`list-group-item d-flex align-items-center ${isActive('/Kanbas/Account/Signin') ? 'text-black' : 'text-danger'}`}
                style={{
                    paddingLeft: '1.5rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    position: 'relative',
                    height: 'auto',
                }}
            >
                {isActive('/Kanbas/Account/Signin') && (
                    <span 
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            height: '100%',
                            width: '3px',
                            backgroundColor: 'black',
                        }}
                    />
                )}
                <FaSignInAlt className="me-2" /> Signin
            </Link>

            <Link 
                to="/Kanbas/Account/Signup" 
                id="wd-signup-link"
                className={`list-group-item d-flex align-items-center ${isActive('/Kanbas/Account/Signup') ? 'text-black' : 'text-danger'}`}
                style={{
                    paddingLeft: '1.5rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    position: 'relative',
                    height: 'auto',
                }}
            >
                {isActive('/Kanbas/Account/Signup') && (
                    <span 
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            height: '100%',
                            width: '3px',
                            backgroundColor: 'black',
                        }}
                    />
                )}
                <FaUserPlus className="me-2" /> Signup
            </Link>

            <Link 
                to="/Kanbas/Account/Profile" 
                id="wd-profile-link"
                className={`list-group-item d-flex align-items-center ${isActive('/Kanbas/Account/Profile') ? 'text-black' : 'text-danger'}`}
                style={{
                    paddingLeft: '1.5rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    position: 'relative',
                    height: 'auto',
                }}
            >
                {isActive('/Kanbas/Account/Profile') && (
                    <span 
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            height: '100%',
                            width: '3px',
                            backgroundColor: 'black',
                        }}
                    />
                )}
                <FaUser className="me-2" /> Profile
            </Link>
        </div>
    );
}
