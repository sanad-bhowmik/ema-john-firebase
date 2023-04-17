import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form >
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id="email" required />
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
    </div>
    );
};

export default Signup;