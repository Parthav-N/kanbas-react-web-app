import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for detecting active route
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
    const { pathname } = useLocation();
    const links = [
        { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
        { label: "Courses", path: "/Kanbas/Courses/1234/Home", icon: LiaBookSolid },
        { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
        { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
        { label: "Labs", path: "/Kanbas/Labs", icon: LiaCogSolid },
    ];

    const isActive = (path: string) => {
        return pathname.startsWith(path) ? 'bg-white text-danger' : 'bg-black text-white';
    };

    return (
        <div id="wd-kanbas-navigation" 
            style={{ width: 110 }} // Set the width to 110px
            className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            
            <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" 
                className="list-group-item bg-black border-0 text-center">
                <img src="/images/neu.png" width="75px" alt="NEU Logo" />
            </a>

            <Link 
                to="/Kanbas/Account/Signin" 
                id="wd-account-link" 
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Account')}`}>
                <FaRegCircleUser className={`fs-1 ${isActive('/Kanbas/Account')}`} />
                Account
            </Link>

            {links.map((link) => (
                <Link key={link.path} to={link.path} className={`list-group-item text-center border-0 ${isActive(link.path)}`}>
                    {React.createElement(link.icon, { className: `fs-1 ${isActive(link.path)}` })}
                    <br />
                    {link.label}
                </Link>
            ))}

            <a href="https://a2--kanbas-clone.netlify.app/#/Labs" id="wd-signout-link" 
                className={`list-group-item text-center border-0 ${isActive('/Labs')}`}>
                <FaSignOutAlt className={`fs-1 ${isActive('/Labs')}`} />
                <br />
                Sign Out
            </a>          
        </div>
    );
}
