import React, { useRef } from 'react';

import '../Login/LoginForm.css'

import './RegisterForm.css'

import { Link, useNavigate } from 'react-router-dom';

import { findPerson, registerPerson } from '../../../db/users.js'

function RegisterForm(props) {

    const usernameInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();
    const nicknameInput = useRef();
    const uploudButton = useRef();
    const avaterInput = useRef();


    const navigate = useNavigate();

    function Register(event) {
        event.preventDefault();

        let username = usernameInput.current.value;
        let password = passwordInput.current.value;
        let confirmPassword = confirmPasswordInput.current.value;
        let nickname = nicknameInput.current.value;

        let person = findPerson({ username: username, password: password })
        if (person.length >= 1) {
            console.log('person found, wrong input');

            let state = { username: username }
            navigate("/Chat", { state: state }) // need to transfer info about who registered
        }
    }

    function UploudImage(event) {
        console.log(uploudButton)
        uploudButton.current.click(event);
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
                        <input type="text" class="form-control" placeholder="User Name" required ref={usernameInput} pattern="^[a-zA-Z0-9]*$"
                            title="Must contain only numbers and letters"/>
                        <input type="text" class="form-control" placeholder="Nickname" required ref={nicknameInput} pattern="^[a-zA-Z0-9]*$"
                        title="Must contain only numbers and letters"/>
                        <input type="password" class="form-control" placeholder="Password" required ref={passwordInput} pattern="^(?!.* )(?=.*\d)(?=.*[A-Z]).{8,}$"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />
                        <input type="password" class="form-control" placeholder="Confirm Password" required ref={confirmPasswordInput}/>
                        
                        <div className="avatar" ref={avaterInput} onClick={UploudImage}>
                            <img src="/resources/emptyAvatar.jpg" className="rounded-3 img-fluid"
                                alt="Avatar" />
                        </div>
                        <input className="file-upload hidden" type="file" accept="image/*" ref={uploudButton}></input>
                        <button type="submit" className="btn btn-primary btn-lg rounded-pill c-shadow">Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterForm;
