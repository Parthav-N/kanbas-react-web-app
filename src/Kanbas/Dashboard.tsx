import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as db from "./Database";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard({ 
    courses: initialCourses, 
    course: initialCourse, 
    setCourse: setParentCourse, 
    addNewCourse: addParentNewCourse, 
    deleteCourse: deleteParentCourse, 
    updateCourse: updateParentCourse 
}: {
    courses: any[]; 
    course: any; 
    setCourse: (course: any) => void;
    addNewCourse: () => void; 
    deleteCourse: (course: any) => void;
    updateCourse: () => void; 
}) {
    // Use useState for local courses and course
    const [courses, setCourses] = useState<any[]>(initialCourses);
    const [course, setCourse] = useState<any>(initialCourse || {
        _id: "0", 
        name: "New Course", 
        number: "New Number",
        startDate: "2023-09-10", 
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg", 
        description: "New Description"
    });

    // Corrected addNewCourse to avoid confusion with props
    const handleAddNewCourse = () => {
        const newCourse = { ...course, _id: new Date().getTime().toString() };
        setCourses([...courses, newCourse]);
        setParentCourse(newCourse); // Optional: sync with parent if necessary
    };

    // Ensure deleteCourse takes a course object
    const handleDeleteCourse = (courseId: string) => {
        setCourses(courses.filter(c => c._id !== courseId));
        deleteParentCourse(courseId); // Optional: sync with parent if necessary
    };

    // Ensure updateCourse updates the current course
    const handleUpdateCourse = () => {
        setCourses(courses.map(c => (c._id === course._id ? course : c)));
        updateParentCourse(); // Optional: sync with parent if necessary
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> 
            <h5>
                New Course
                <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={handleAddNewCourse}>
                    Add
                </button>
                <button className="btn btn-warning float-end me-2" onClick={handleUpdateCourse} id="wd-update-course-click">
                    Update
                </button>
            </h5>
            <hr />
            <input 
                value={course.name} 
                className="form-control mb-2" 
                onChange={(e) => setCourse({ ...course, name: e.target.value })} 
            />
            <textarea 
                value={course.description} 
                className="form-control" 
                onChange={(e) => setCourse({ ...course, description: e.target.value })} 
            />
            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> 
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <img src={course.image} width="100%" height={160} alt={course.name} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                                        <p className="wd-dashboard-course-description card-text overflow-hidden" style={{ maxHeight: 100 }}>
                                            {course.description}
                                        </p>
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <button className="btn btn-primary float-start">Go</button>
                                            <button 
                                                id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2" 
                                                style={{ marginLeft: "auto", marginRight: "auto" }}
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    handleDeleteCourse(course._id);
                                                }} 
                                                className="btn btn-danger float-end"
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
