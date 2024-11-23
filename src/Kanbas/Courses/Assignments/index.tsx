import React, { useEffect, useState } from "react";
import { BsGripVertical, BsTrash } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoBookSharp, IoChevronDownSharp, IoEllipsisVertical } from "react-icons/io5";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AssignmentState, Assignment } from "./types"; // Import the Assignment type
import { deleteAssignment } from "./reducer";
import "./styles.css";
import { AssignmentClient } from "./client";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { assignments } = useSelector(
    (state: { assignmentReducer: AssignmentState }) => state.assignmentReducer
  );
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const isFaculty = currentUser?.role === "FACULTY";

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<Assignment | null>(null);

  const fetchAssignments = async () => {
    if (!cid) {
        console.error("Course ID is undefined");
        return;
    }
    
    try {
        const results = await AssignmentClient.findAssignments(cid);
        console.log("Fetched assignments:", results);
    } catch (error) {
        console.error("Error fetching assignments:", error);
    }
};

  useEffect(() => {
  fetchAssignments();
  }, [cid]);

  const filteredAssignments = assignments.filter(
    (assignment: Assignment) => assignment.course === cid
  );

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };

  const handleDeleteAssignment = async (assignment: Assignment) => {
    setAssignmentToDelete(assignment);
    setShowConfirmDialog(true);
    try {
        await AssignmentClient.deleteAssignment(assignment._id);
        dispatch(deleteAssignment(assignment._id));
    } catch (error) {
        console.error("Error deleting assignment:", error);
    }
};

  const confirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete._id)); // Dispatch delete action
      setAssignmentToDelete(null);
    }
    setShowConfirmDialog(false);
  };

  const cancelDelete = () => {
    setAssignmentToDelete(null);
    setShowConfirmDialog(false);
  };

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);

    // Array of month names
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month = monthNames[date.getMonth()]; // Get the month name
    const day = date.getDate(); // Get the day
    const hour = date.getHours(); // Get the hour
    const minute = date.getMinutes(); // Get the minute

    // Format hours and minutes
    const formattedHour = hour % 12 || 12; // Convert to 12-hour format
    const formattedMinute = minute < 10 ? `0${minute}` : minute; // Add leading zero if needed
    const period = hour < 12 ? "am" : "pm"; // Determine am/pm

    return `${month} ${day} at ${formattedHour}:${formattedMinute} ${period}`;
  };

  return (
    <div id="wd-assignments">
      <div className="row align-items-center">
        <div className="col-auto flex-grow-1">
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search..."
            style={{ width: "100%" }}
          />
        </div>
        {isFaculty && (
          <div className="col-auto d-flex justify-content-end">
            <button id="wd-add-assignment-group" className="btn mr-1">
              + Group
            </button>
            <button id="wd-add-assignment" className="btn" onClick={handleAddAssignment}>
              + Assignment
            </button>
          </div>
        )}
      </div>
      <br />

      <div className="d-flex justify-content-between align-items-center assignment-header px-3 py-2">
        <div className="d-flex align-items-center wide-rectangle">
          <BsGripVertical className="me-2 fs-5" />
          <IoChevronDownSharp className="me-2 fs-5" />
          <h6 className="mb-0 fw-bold">ASSIGNMENTS</h6>
        </div>
        <div className="d-flex align-items-center">
          <span className="elliptical-outline me-2">40% of Total</span>
          <button className="btn btn-sm btn-outline-primary me-2">+</button>
          <IoEllipsisVertical className="fs-7" />
        </div>
      </div>
      <ul id="wd-assignment-list" className="mt-1">
        {filteredAssignments.map((assignment: Assignment) => (
          <li
            key={assignment._id}
            className="wd-assignment-list-item d-flex align-items-center mt-3"
          >
            <div className="assignment-icons d-flex align-items-center me-2">
              <BsGripVertical className="me-2 fs-5 spacing" />
              <IoBookSharp className="text-success fs-5 spacing" />
            </div>
            <div className="assignment-content text-start flex-grow-1">
              <h3 className="assignment-title mb-0">
                <Link
                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {assignment.title}
                </Link>
              </h3>
              <div className="assignment-details">
                <span className="text-danger">Multiple Modules</span> | <b>Due</b>{" "}
                {formatDate(assignment.dueDate)} | {assignment.points} pts
              </div>
            </div>
            <div className="d-flex">
              <LessonControlButtons />
              {isFaculty && (
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => handleDeleteAssignment(assignment)}
                >
                  <BsTrash />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      {showConfirmDialog && (
        <div className="confirm-dialog">
          <p>Are you sure you want to delete this assignment?</p>
          <button className="btn btn-secondary" onClick={cancelDelete}>
            No
          </button>
          <button className="btn btn-danger ms-2" onClick={confirmDelete}>
            Yes
          </button>
        </div>
      )}
    </div>
  );
}
