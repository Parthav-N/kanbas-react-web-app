import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoBookSharp, IoChevronDownSharp, IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import "./styles.css";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = db;

    const filteredAssignments = assignments.filter(assignment => assignment.course === cid);

    return (
        <div id="wd-assignments">
            <div className="row align-items-center">
                <div className="col-auto flex-grow-1">
                    <input id="wd-search-assignment" className="form-control" placeholder="Search..." style={{ width: '100%' }} />
                </div>
                <div className="col-auto d-flex justify-content-end">
                    <button id="wd-add-assignment-group" className="btn mr-1">+ Group</button>
                    <button id="wd-add-assignment" className="btn">+ Assignment</button>
                </div>
            </div> <br />

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
                {filteredAssignments.map(assignment => (
                    <li key={assignment._id} className="wd-assignment-list-item d-flex align-items-center mt-3">
                        <div className="assignment-icons d-flex align-items-center me-2">
                            <BsGripVertical className="me-2 fs-5 spacing" />
                            <IoBookSharp className="text-success fs-5 spacing" />
                        </div>
                        <div className="assignment-content text-start flex-grow-1">
                            <h3 className="assignment-title mb-0">
                                <a href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {assignment.title}
                                </a>
                            </h3>
                            <div className="assignment-details">
                                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                                <br />
                                <b>Due</b> May 13 at 11:59pm | 100 pts
                            </div>
                        </div>
                        <div className="d-flex">
                            <LessonControlButtons />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
