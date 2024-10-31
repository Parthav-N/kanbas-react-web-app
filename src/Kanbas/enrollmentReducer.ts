const initialState = {
    enrolledCourses: [] as string[],
};

const enrollmentReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ENROLL_COURSE':
            return {
                ...state,
                enrolledCourses: [...state.enrolledCourses, action.payload],
            };
        case 'UNENROLL_COURSE':
            return {
                ...state,
                enrolledCourses: state.enrolledCourses.filter(id => id !== action.payload),
            };
        default:
            return state;
    }
};

export default enrollmentReducer;
