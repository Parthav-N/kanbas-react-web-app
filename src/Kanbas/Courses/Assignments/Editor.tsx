import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AssignmentState, Assignment } from './types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { addAssignment, updateAssignment } from './reducer';

export default function AssignmentEditor() {
    const { aid, cid } = useParams<{ aid: string, cid: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: { assignmentReducer: AssignmentState }) => state.assignmentReducer);

    const [assignment, setAssignment] = useState<Assignment>({
        _id: '',
        title: '',
        description: '',
        points: 100,
        dueDate: '',
        availableFromDate: '',
        availableUntilDate: '',
        course: cid || ''
    });

    useEffect(() => {
        if (aid !== 'new') {
            const existingAssignment = assignments.find((a: Assignment) => a._id === aid);
            if (existingAssignment) {
                setAssignment(existingAssignment);
            }
        }
    }, [aid, assignments, cid]);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setAssignment((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (aid === 'new') {
            const newAssignment = { ...assignment, _id: Date.now().toString() }; // Ensure all fields are included
            console.log('Creating new assignment:', newAssignment);
            dispatch(addAssignment(newAssignment)); // Use the correct action creator
        } else {
            console.log('Updating assignment:', assignment);
            dispatch(updateAssignment(assignment)); // Use the correct action creator
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div className="container mt-4">
            <form id="wd-assignments-editor">
                <div className="form-group">
                    <label htmlFor="wd-name" className='mb-2'>Assignment Name</label>
                    <input id="wd-name" name="title" className="form-control" value={assignment.title} onChange={handleInputChange} />
                </div>
                <br/>
                <div className="form-group mb-4">
                    <label htmlFor="wd-description" className='mb-2'>Description</label>
                    <textarea id="wd-description" name="description" className="form-control" value={assignment.description} onChange={handleInputChange} style={{ height: 'auto', whiteSpace: 'pre-wrap' }} />
                </div>
                <div className="form-group row mb-4 justify-content-center text-right">
                    <label htmlFor="wd-points" className="col-sm-2 col-form-label" style={{ textAlign: 'right' }}>Points</label>
                    <div className="col-sm-2">
                        <input id="wd-points" name="points" className="form-control" type="number" value={assignment.points} onChange={handleInputChange} style={{ width: '390px' }} />
                    </div>
                </div>
                
                <div className="form-group mb-4" style={{ textAlign: 'right' }}>
                    <label htmlFor="assign-section" className="col-form-label" style={{ display: 'inline-block', marginBottom: '10px', marginRight: '10px' }}>Assign</label>
                    <div style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '10px', display: 'inline-block', width: '390px', verticalAlign: 'top' }}>
                        <div style={{ textAlign: 'left', marginBottom: '10px' }}>
                            <label className="col-form-label" style={{ display: 'block', textAlign: 'left', marginBottom: '10px', fontWeight: 'bold' }}>Due</label>
                            <input type="datetime-local" name="dueDate" value={assignment.dueDate} onChange={handleInputChange} className="form-control" style={{ width: '360px' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <div style={{ width: '48%' }}>
                                <label className="col-form-label" style={{ display: 'block', textAlign: 'left', marginBottom: '10px', fontWeight: 'bold' }}>Available From</label>
                                <input type="datetime-local" name="availableFromDate" value={assignment.availableFromDate} onChange={handleInputChange} className="form-control" />
                            </div>
                            <div style={{ width: '48%' }}>
                                <label className="col-form-label" style={{ display: 'block', textAlign: 'left', marginBottom: '10px', fontWeight: 'bold' }}>Until</label>
                                <input type="datetime-local" name="availableUntilDate" value={assignment.availableUntilDate} onChange={handleInputChange} className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ margin: '20px 0' }} />
                
                <div style={{ textAlign: 'right' }}>
                    <button type="button" className="btn btn-secondary" style={{ marginRight: '10px' }} onClick={handleCancel}>Cancel</button>
                    <button type="button" className="btn btn-danger" style={{ backgroundColor: 'red' }} onClick={handleSave}>Save</button>
                </div>
            </form>
        </div>
    );
}