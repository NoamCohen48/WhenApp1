import React, { useRef } from 'react';

import './LoginForm.css'

import Container from '../../../Components/Container.js';
import { Link } from 'react-router-dom';

import { findPerson } from '../../../db/api.js'

function LoginForm(props) {
    const usernameInput = useRef();
    const passwordInput = useRef();

    function Login(event) {
        event.preventDefault();

        let username = usernameInput.current.value;
        let password = passwordInput.current.value;

        //TODO: validation

        let person = findPerson({username: username, password: password})
        if(person.length === 1){
            console.log('all good, login');
        }
        console.log('not found');
    }

    return (
        <>
            <Container size='small' className='c-shadow'>
                <div className='logo-center'>
                    <img src='/resources/Logo.png' alt='logo' />
                    <h1>WhenApp</h1>
                </div>

                <div>
                    <form onSubmit={Login}>
                        <div className="form-floating">
                            <input type="text" className="form-control rounded-pill c-shadow" id="inputUsername" placeholder="username" ref={usernameInput} />
                            <label htmlFor="inputUsername">User Name</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control rounded-pill c-shadow" id="inputPassword" placeholder="password" ref={passwordInput} />
                            <label htmlFor="inputPassword">Password</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg rounded-pill c-shadow">LOGIN</button>
                    </form>
                    <p>To Register Press <Link to="register" className='link-light'>Here</Link></p>
                </div>
            </Container>
        </>
    )
}

export default LoginForm;