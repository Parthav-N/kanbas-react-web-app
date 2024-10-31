// In ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface ProtectedRouteProps {
  children: React.ReactNode;
  courseId: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, courseId }) => {
  const user = useSelector((state: any) => state.user);
  
  // Check if the user is enrolled in the course
  const isEnrolled = user.enrollments.includes(courseId);

  if (!isEnrolled) {
    // Redirect to dashboard if not enrolled
    return <Navigate to="/Dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;