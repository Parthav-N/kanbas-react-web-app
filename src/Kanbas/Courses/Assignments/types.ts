import { Action } from "@reduxjs/toolkit";

export interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFromDate: string;
  availableUntilDate: string;
  course: string;
}

export interface AssignmentState {
  assignments: Assignment[];
}

export interface CreateAssignmentAction {
  type: "CREATE_ASSIGNMENT";
  payload: Assignment;
}

export interface UpdateAssignmentAction {
  type: "UPDATE_ASSIGNMENT";
  payload: Assignment;
}

export type AssignmentReducerAction = AssignmentAction | Action<string>;
export type AssignmentAction = CreateAssignmentAction | UpdateAssignmentAction;
