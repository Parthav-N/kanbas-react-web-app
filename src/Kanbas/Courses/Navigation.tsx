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

  const isActive = (path: string) => 
    location.pathname === path ? 'active text-black border-start border-3 border-primary' : 'text-danger border-0';

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(({ label, path, icon: Icon }) => (
        <Link 
          key={path} 
          to={path} 
          className={`list-group-item ${isActive(path)}`}
        >
          <Icon className="me-2" /> {label}
        </Link>
      ))}
    </div>
  );
}
