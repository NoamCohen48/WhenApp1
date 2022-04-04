import React, { useRef } from 'react';

import './LoginForm.css'

import { Link, useNavigate } from 'react-router-dom';

import { findPerson } from '../../../db/api.js'

function LoginForm(props) {
    const usernameInput = useRef();
    const passwordInput = useRef();

    const navigate = useNavigate();

    function Login(event) {
        event.preventDefault();

        let username = usernameInput.current.value;
        let password = passwordInput.current.value;

        //TODO: validation

        let person = findPerson({ username: username, password: password })
        if (person.length === 1) {
            console.log('person found, login');

            let state = { username: username }
            navigate("/Chat", { state: state }) // need to transfer info about who registered
        }

        console.log('not found');

        // TODO: Show Error
    }

    return (
        <>
            <div className="container-lg container-small c-shadow" >
                <div className='logo-center'>
                    <img src='/resources/Logo.png' alt='logo' />
                    <h1>WhenApp</h1>
                </div>

                <div>
                    <form onSubmit={Login} className=''>
                        <div className="form-floating">
                            <input type="text" className="form-control rounded-pill c-shadow" id="inputUsername" placeholder=" " ref={usernameInput} required/>
                            <label htmlFor="inputUsername">User Name</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control rounded-pill c-shadow " id="inputPassword" placeholder=" " ref={passwordInput} required/>
                            <label htmlFor="inputPassword">Password</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg rounded-pill c-shadow">LOGIN</button>
                    </form>
                    <p>To Register Press <Link to="register" className='link-light'>Here</Link></p>
                </div>
            </div>
        </>
    )
}

export default LoginForm;