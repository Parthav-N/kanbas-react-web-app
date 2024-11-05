import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="mt-5">
      <h1 className="text-center">Sign Up</h1>
      <div className="mb-3">
        <input placeholder="username" className="form-control" />
      </div>
      <div className="mb-3">
        <input placeholder="password" type="password" className="form-control" />
      </div>
  
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100">
        Sign Up
      </Link>
      <Link to="/Kanbas/Account/Signin" className="d-block text-center mt-3">
        Already have an account? Sign in
      </Link>
    </div>
  );
}