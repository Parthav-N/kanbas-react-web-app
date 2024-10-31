import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";
import enrollmentReducer from "./enrollmentReducer";

const store = configureStore({
    reducer: {
        enrollmentReducer,
        modulesReducer,
        accountReducer,
        assignmentReducer,
    },
});

export default store;
