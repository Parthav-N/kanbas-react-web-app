import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for detecting active route
import { FaSignOutAlt } from "react-icons/fa";

export default function KanbasNavigation() {
    const location = useLocation(); // To get the current route

    return (
        <div id="wd-kanbas-navigation" 
            style={{ width: 110 }} // Set the width to 110px
            className="list-group rounded-0 position-fixed
            bottom-0 top-0 d-none d-md-block bg-black z-2">
            
            <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" 
                className="list-group-item bg-black border-0 text-center">
                <img src="/images/neu.png" width="75px" alt="NEU Logo" />
            </a>

            <Link 
                to="/Kanbas/Account/Signin" 
                id="wd-account-link" 
                className={`list-group-item text-center border-0 
                    ${['/Kanbas/Account/Signin', '/Kanbas/Account/Signup', '/Kanbas/Account/Profile'].includes(location.pathname) ? 'bg-white text-danger' : 'bg-black text-white'}`}
            >
                <FaRegCircleUser className={`fs-1 ${['/Kanbas/Account/Signin', '/Kanbas/Account/Signup', '/Kanbas/Account/Profile'].includes(location.pathname) ? 'text-danger' : 'text-white'}`} />
                Account
            </Link>


            <Link to="/Kanbas/Dashboard" id="wd-dashboard-link" 
                className={`list-group-item text-center border-0 
                    ${location.pathname === '/Kanbas/Dashboard' ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <AiOutlineDashboard className={`fs-1 ${location.pathname === '/Kanbas/Dashboard' ? 'text-danger' : 'text-white'}`} />
                Dashboard
            </Link>

            <Link to="/Kanbas/Courses/1234" id="wd-course-link" 
                className={`list-group-item text-center border-0 
                    ${location.pathname === '/Kanbas/Courses/1234/Home' ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <LiaBookSolid className={`fs-1 ${location.pathname === '/Kanbas/Courses/1234' ? 'text-danger' : 'text-white'}`} />
                Courses
            </Link>

            <Link to="/Kanbas/Calendar" id="wd-calendar-link" 
                className={`list-group-item text-center border-0 
                    ${location.pathname === '/Kanbas/Calendar' ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <IoCalendarOutline className={`fs-1 ${location.pathname === '/Kanbas/Calendar' ? 'text-danger' : 'text-white'}`} />
                Calendar
            </Link>

            <Link to="/Kanbas/Inbox" id="wd-inbox-link" 
                className={`list-group-item text-center border-0 
                    ${location.pathname === '/Kanbas/Inbox' ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <FaInbox className={`fs-1 ${location.pathname === '/Kanbas/Inbox' ? 'text-danger' : 'text-white'}`} />
                Inbox
            </Link>

            <Link to="/Kanbas/Labs" id="wd-labs-link" 
                className={`list-group-item text-center border-0 
                    ${location.pathname === '/Kanbas/Labs' ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <LiaCogSolid className={`fs-1 ${location.pathname === '/Kanbas/Labs' ? 'text-danger' : 'text-white'}`} /><br />
                Labs
            </Link>     
            <a href="https://a2--kanbas-clone.netlify.app/#/Labs" id="wd-signout-link" 
                className={`list-group-item text-center border-0 
                    ${location.pathname === '/Labs' ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <FaSignOutAlt className={`fs-1 ${location.pathname === '/Labs' ? 'text-danger' : 'text-white'}`} /> <br />
                Sign Out
            </a>          
        </div>
    );
}
