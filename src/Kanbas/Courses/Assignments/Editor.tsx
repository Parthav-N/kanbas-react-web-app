import React from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import * as db from "../../Database"; 

export default function AssignmentEditor() {
    const { aid, cid } = useParams(); 
    const { assignments } = db; 

    const assignment = assignments.find(assignment => assignment._id === aid);

    if (!assignment) {
        return <div>Assignment not found</div>;
    }

    return (
        <div className="container mt-4">
            <form id="wd-assignments-editor">
                <div className="form-group">
                    <label htmlFor="wd-name" className='mb-2'>Assignment Name</label>
                    <input id="wd-name" className="form-control" defaultValue={assignment.title} />
                </div> <br/>
                <div className="form-group mb-4">
                    <label htmlFor="wd-description" className='mb-2'>Description</label>
                    <div id="wd-description" className="form-control" style={{ height: 'auto', whiteSpace: 'pre-wrap' }}>
                        The assignment is <a href="" style={{ color: 'red' }}>available online</a>. <br /><br />
                        Submit a link to the landing page of your Web application running on Netlify. <br /><br />
                        The landing page should include the following:
                        <ul>
                            <li>Your full name and section</li>
                            <li>Links to each of the lab assignments</li>
                            <li>Link to the Kanbas application</li>
                            <li>Links to all relevant source code repositories</li>
                        </ul>
                        The Kanbas application should include a link to navigate back to the landing page.
                    </div>
                </div>
                <div className="form-group row mb-4 justify-content-center text-right">
                    <label htmlFor="wd-points" className="col-sm-2 col-form-label" style={{ textAlign: 'right' }}>Points</label>
                    <div className="col-sm-2">
                        <input id="wd-points" className="form-control" type="number" defaultValue={100} style={{ width: '390px' }} />
                    </div>
                </div>
                <div className="form-group row mb-4 justify-content-center text-right">
                    <label htmlFor="wd-group" className="col-sm-3 col-form-label" style={{ textAlign: 'right' }}>Assignment Group</label>
                    <div className="col-sm-2">
                        <select id="wd-group" className="form-control" style={{ width: '390px' }}>
                            <option value="Assignments">ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row mb-4 justify-content-center text-right">
                    <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label" style={{ textAlign: 'right' }}>Display Grade as</label>
                    <div className="col-sm-2">
                        <select id="wd-display-grade-as" className="form-control" style={{ width: '390px' }}>
                            <option value="Percentage">Percentage</option>
                        </select>
                    </div>
                </div>
                <div className="form-group mb-4" style={{ textAlign: 'right' }}>
                    <label htmlFor="wd-submission-type" className="col-form-label" style={{ display: 'inline-block', marginBottom: '10px', marginRight: '10px' }}>Submission Type</label>
                    <div style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '10px', display: 'inline-block', width: '390px', verticalAlign: 'top' }}>
                        <div style={{ textAlign: 'left', marginBottom: '10px' }}>
                            <select id="wd-submission-type" className="form-control" style={{ display: 'inline-block', width: '360px' }}>
                                <option value="Online">Online</option>
                            </select>
                        </div>
                        <label className="col-form-label" style={{ display: 'block', textAlign: 'left', marginBottom: '10px', fontWeight: 'bold' }}>Online Entry Options</label>
                        <div style={{ textAlign: 'left' }}>
                            <div className="form-check">
                                <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id="wd-website-url" className="form-check-input" defaultChecked />
                                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group mb-4" style={{ textAlign: 'right' }}>
                    <label htmlFor="assign-section" className="col-form-label" style={{ display: 'inline-block', marginBottom: '10px', marginRight: '10px' }}>Assign</label>
                    <div style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '10px', display: 'inline-block', width: '390px', verticalAlign: 'top' }}>
                        <div style={{ textAlign: 'left', marginBottom: '10px' }}>
                            <label className="col-form-label" style={{ display: 'block', textAlign: 'left', marginBottom: '10px', fontWeight: 'bold' }}>Assign to</label>
                            <select name="skills" className="form-control" style={{ width: '360px' }}>
                                <option value="everyone">Everyone</option>
                                <option value="skill1">Someone</option>
                                <option value="skill2">Noone</option>
                            </select>
                        </div>
                        <div style={{ textAlign: 'left', marginBottom: '10px' }}>
                            <label className="col-form-label" style={{ display: 'block', textAlign: 'left', marginBottom: '10px', fontWeight: 'bold' }}>Due</label>
                            <input type="datetime-local" name="due-date" defaultValue="2024-05-13T11:59" className="form-control" style={{ width: '360px' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <div style={{ width: '48%' }}>
                                <label className="col-form-label" style={{ display: 'block', textAlign: 'left', marginBottom: '10px', fontWeight: 'bold' }}>Available From</label>
                                <input type="datetime-local" name="available-from" defaultValue="2024-05-06T12:00" className="form-control" />
                            </div>
                            <div style={{ width: '48%' }}>
                                <label className="col-form-label" style={{ display: 'block', textAlign: 'left', marginBottom: '10px', fontWeight: 'bold' }}>Until</label>
                                <input type="date" name="available-until" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr style={{ margin: '20px 0' }} />
                
                <div style={{ textAlign: 'right' }}>
                    <Link to={`#/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary" style={{ marginRight: '10px' }}>Cancel</Link>
                    <button type="button" className="btn btn-danger" style={{ backgroundColor: 'red' }}>Save</button>
                </div>
            </form>
        </div>
    );
}
