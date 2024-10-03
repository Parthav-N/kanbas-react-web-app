import { Link, useLocation } from "react-router-dom";
import { FaHome, FaClipboardList, FaPencilAlt, FaVideo, FaQuestionCircle, FaUsers } from "react-icons/fa";
import { FaBook } from "react-icons/fa"; 

export default function CoursesNavigation() {
  const location = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link 
        to="/Kanbas/Courses/1234/Home" 
        id="wd-course-home-link"
        className={`list-group-item ${location.pathname === '/Kanbas/Courses/1234/Home' ? 'active text-black border-start border-3 border-primary' : 'text-danger border-0'}`}
      >
        <FaHome className="me-2" /> Home
      </Link>
      <Link 
        to="/Kanbas/Courses/1234/Modules" 
        id="wd-course-modules-link"
        className={`list-group-item ${location.pathname === '/Kanbas/Courses/1234/Modules' ? 'active text-black border-start border-3 border-primary' : 'text-danger border-0'}`}
      >
        <FaBook className="me-2" /> Modules
      </Link>
      <Link 
        to="/Kanbas/Courses/1234/Piazza" 
        id="wd-course-piazza-link"
        className={`list-group-item ${location.pathname === '/Kanbas/Courses/1234/Piazza' ? 'active text-black border-start border-3 border-primary' : 'text-danger border-0'}`}
      >
        <FaPencilAlt className="me-2" /> Piazza
      </Link>
      <Link 
        to="/Kanbas/Courses/1234/Zoom" 
        id="wd-course-zoom-link"
        className={`list-group-item ${location.pathname === '/Kanbas/Courses/1234/Zoom' ? 'active text-black border-start border-3 border-primary' : 'text-danger border-0'}`}
      >
        <FaVideo className="me-2" /> Zoom
      </Link>
      <Link 
        to="/Kanbas/Courses/1234/Assignments" 
        id="wd-course-assignments-link"
        className={`list-group-item ${location.pathname === '/Kanbas/Courses/1234/Assignments' ? 'active text-black border-start border-3 border-primary' : 'text-danger border-0'}`}
      >
        <FaClipboardList className="me-2" /> Assignments
      </Link>
      <Link 
        to="/Kanbas/Courses/1234/Quizzes" 
        id="wd-course-quizzes-link"
        className={`list-group-item ${location.pathname === '/Kanbas/Courses/1234/Quizzes' ? 'active text-black border-start border-3 border-primary' : 'text-danger border-0'}`}
      >
        <FaQuestionCircle className="me-2" /> Quizzes
      </Link>
      <Link 
        to="/Kanbas/Courses/1234/People" 
        id="wd-course-people-link"
        className={`list-group-item ${location.pathname === '/Kanbas/Courses/1234/People' ? 'active text-black border-start border-3 border-primary' : 'text-danger border-0'}`}
      >
        <FaUsers className="me-2" /> People
      </Link>
    </div>
  );
}
