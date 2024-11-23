import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: "M101",
        name: "Introduction to Rocket Propulsion",
        description: "Basic principles of rocket propulsion and rocket engines.",
        course: "RS101",
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <h4>Modify Title</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })}/>
            <hr />

            <h4>Modify Score</h4>
            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input className="form-control w-75" id="wd-assignment-score"
                defaultValue={assignment.score} 
                onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value)})}/>
            <hr />
            
            <h4>Modifying Assignment Completion</h4>
            
            <input
                type="checkbox"
                checked={assignment.completed}
                onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
            />

            <a id="wd-update-assignment-completed"
                className="btn btn-primary ms-2"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Score
            </a>
            
                
            <hr />
            

            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr/>
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr/>
            <h4>Working on Modules</h4>
            <h4>Retrieving Modules</h4>
            <a id="wd-retrieve-modules" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a><hr/>
            <h4>Retrieving the name of the module</h4>
            <a id="wd-retrieve-modules" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a><hr/>
            <h4>Modifying module name</h4>
            <a id="wd-update-modules-title"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Name
            </a>
            <input className="form-control w-75" id="wd-modules-title"
                defaultValue={module.name} onChange={(e) =>
                setModule({ ...module, name: e.target.value })}/>
            <hr />

            <h4>Modifying module description</h4>
            <a id="wd-update-modules-description"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Name
            </a>
            <input className="form-control w-75" id="wd-modules-description"
                defaultValue={module.description} onChange={(e) =>
                setModule({ ...module, description: e.target.value })}/>
            <hr />
        </div>
    );
}
