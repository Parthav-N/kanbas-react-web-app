import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div style={{ width: '400px' }}>
                <h1 className="mb-4">Signin</h1>
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
                        Sign In
                    </Link>
                </form>
                <p className="text-center">
                    Don't have an account? 
                    <Link 
                        id="wd-signup-link" 
                        to="/Kanbas/Account/Signup" 
                        className="text-primary"> Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
