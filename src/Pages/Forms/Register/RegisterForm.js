import React, { useRef } from 'react';

import '../Login/LoginForm.css'

import './RegisterForm.css'

import { Link, useNavigate } from 'react-router-dom';

import { findPerson ,registerPerson } from '../../../db/api.js'


function RegisterForm(props) {

    const usernameInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();
    const nicknameInput = useRef();

    const navigate = useNavigate();

    function Register(event) {
        event.preventDefault();

        let username = usernameInput.current.value;
        let password = passwordInput.current.value;
        let confirmPassword = confirmPasswordInput.current.value;
        let nickname = nicknameInput.current.value;
    }

    return (
        <>
            <div className="container-lg register-container c-shadow" >
                <div className='logo-right'>
                    <img src='/resources/Logo.png' alt='logo' />
                    <h1>WhenApp</h1>
                </div>

                <div>
                    <form onSubmit={Register} className=''>
                        <div className="form-floating">
                            <input type="text" className="form-control rounded-pill c-shadow" id="inputUsername" placeholder=" " ref={usernameInput} required />
                            <label htmlFor="inputUsername">User Name</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control rounded-pill c-shadow " id="inputNickname" placeholder=" " ref={nicknameInput} required />
                            <label htmlFor="inputPassword">Nickname</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control rounded-pill c-shadow " id="inputPassword" placeholder=" " ref={passwordInput} required />
                            <label htmlFor="inputPassword">Password</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control rounded-pill c-shadow " id="inputPassword" placeholder=" " ref={passwordInput} required />
                            <label htmlFor="inputPassword">Confirm Password</label>
                        </div>
                        <div className="avatar">
                            <img src="/resources/emptyAvatar.jpg" className="rounded-3 img-fluid"
                                alt="Avatar" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg rounded-pill c-shadow">Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterForm;
