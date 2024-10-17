import { Link, useLocation, useParams } from "react-router-dom";
import { FaHome, FaClipboardList, FaPencilAlt, FaVideo, FaQuestionCircle, FaUsers, FaBook } from "react-icons/fa";
import React from "react";

export default function CoursesNavigation() {
  const location = useLocation();
  const { cid } = useParams();

  const links = [
    { label: "Home", path: `/Kanbas/Courses/${cid}/Home`, icon: FaHome },
    { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules`, icon: FaBook },
    { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza`, icon: FaPencilAlt },
    { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom`, icon: FaVideo },
    { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments`, icon: FaClipboardList },
    { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes`, icon: FaQuestionCircle },
    { label: "People", path: `/Kanbas/Courses/${cid}/People`, icon: FaUsers },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(({ label, path, icon: Icon }) => (
        <Link 
          key={path} 
          to={path} 
          className={`list-group-item d-flex align-items-center ${isActive(path) ? 'text-black' : 'text-danger'}`}
          style={{
            paddingLeft: '1.5rem',
            backgroundColor: 'transparent', // Ensure transparent background
            border: 'none', // Remove default border
            position: 'relative', // For absolute positioning of the line
            height: 'auto', // Set height to auto to avoid box sizing
          }}
        >
          {isActive(path) && (
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
          <Icon className="me-2" /> {label}
        </Link>
      ))}
    </div>
  );
}
