// src/Kanbas/Assignments/client.ts
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const ASSIGNMENTS_API = `${API_BASE}/api/assignments`;

export const AssignmentClient = {
    createAssignment: async (courseId: string, assignment: any) => {
        const response = await axios.post(
            `${API_BASE}/courses/${courseId}/assignments`,
            assignment
        );
        return response.data;
    },

    findAssignments: async (courseId: string) => {
        const response = await axios.get(
            `${API_BASE}/courses/${courseId}/assignments`
        );
        return response.data;
    },

    findAssignmentById: async (assignmentId: string) => {
        const response = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
        return response.data;
    },

    updateAssignment: async (assignmentId: string, assignment: any) => {
        const response = await axios.put(
            `${ASSIGNMENTS_API}/${assignmentId}`,
            assignment
        );
        return response.data;
    },

    deleteAssignment: async (assignmentId: string) => {
        const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
        return response.data;
    }
};