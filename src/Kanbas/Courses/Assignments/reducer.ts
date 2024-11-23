import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        description: assignment.description || "", // Add any default values if necessary
        points: assignment.points || 100, // Default to 100 if not provided
        dueDate: assignment.dueDate || "",
        availableFromDate: assignment.availableFromDate || "",
        availableUntilDate: assignment.availableUntilDate || "",
        course: assignment.course,
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      );
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, editAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
