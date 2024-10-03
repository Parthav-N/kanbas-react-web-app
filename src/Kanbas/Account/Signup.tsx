import React from "react";
import { Link } from "react-router-dom";


export default function Signup() {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div style={{ width: '400px' }}>
                <h1 className="mb-4">Signup</h1>
                <form>
                    <div className="mb-3">
                        <input 
                            id="wd-username"
                            type="text"
                            placeholder="Username"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            id="wd-password"
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            required
                        />
                    </div>
                    <Link 
                        id="wd-signin-btn"
                        to="/Kanbas/Account/Profile"
                        className="btn btn-primary w-100 mb-3">
                        Sign Up
                    </Link>
                </form>
                <p className="text-center">
                    Already have an account? 
                    <Link 
                        id="wd-signup-link" 
                        to="/Kanbas/Account/Signup" 
                        className="text-primary"> Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
    // return (
        
    //     // <div id="wd-signup-screen">
    //     // <h3>Sign up</h3>
    //     // <input placeholder="username" /><br/>
    //     // <input placeholder="password" type="password" /><br/>
    //     // <input placeholder="verify password" type="password" /><br/>
    //     // <Link to="/Kanbas/Account/Profile" > Sign up </Link><br />
    //     // <Link to="/Kanbas/Account/Signin" >Sign in</Link>
    //     // </div>
    // );
}
