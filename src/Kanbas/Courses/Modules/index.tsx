import { IoEllipsisVertical } from "react-icons/io5";
import React, { useState } from "react";
import GreenCheckmark from "./GreenCheckmark";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from 'react-icons/bs';
import { FaPlus } from "react-icons/fa6";
import { useParams } from "react-router";
import * as db from "../../Database";
import ModuleControlButtons from "./ModuleControlButtons";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

interface Module {
    _id: string;
    name: string;
    course: string;
    lessons: Array<{ _id: string; name: string }>;
    editing?: boolean;
}

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");

    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        dispatch(addModule({ name: moduleName, course: cid }));
        setModuleName("");
    };

    const handleDeleteModule = (moduleId: string) => {
        dispatch(deleteModule(moduleId));
    };

    const handleEditModule = (moduleId: string) => {
        dispatch(editModule(moduleId));
    };

    const handleUpdateModule = (module: Module) => {
        dispatch(updateModule(module));
    };

    return (
        <div>
            <ModulesControls 
                setModuleName={setModuleName} 
                moduleName={moduleName} 
                addModule={handleAddModule} 
            />
            <br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules.filter((module: Module) => module.course === cid).map((module: Module) => (
                    <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary"> 
                            <BsGripVertical className="me-2 fs-3" />
                            {!module.editing && module.name}
                            {module.editing && (
                                <input 
                                    className="form-control w-50 d-inline-block"
                                    onChange={(e) => handleUpdateModule({ ...module, name: e.target.value })}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleUpdateModule({ ...module, editing: false });
                                        }
                                    }}
                                    defaultValue={module.name} 
                                />
                            )}

                            <ModuleControlButtons 
                                moduleId={module._id} 
                                deleteModule={handleDeleteModule} 
                                editModule={handleEditModule} 
                            />
                        </div>
                        {module.lessons && module.lessons.length > 0 && (
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons.map((lesson) => (
                                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-3" />
                                        {lesson.name}
                                        <LessonControlButtons />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
