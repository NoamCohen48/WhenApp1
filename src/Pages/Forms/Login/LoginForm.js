import React from 'react';

import './LoginForm.css'

import Container from '../../../Components/Container.js';
import { Link } from 'react-router-dom';

function LoginForm(props) {
    return (
        <>
            <Container size='small' className='c-shadow'>
                <div className='logo-center'>
                    <img src='/resources/Logo.png' alt='logo' />
                    <h1>WhenApp</h1>
                </div>

                <div>
                    <form>
                        <div className="form-floating">
                            <input type="email" className="form-control rounded-pill c-shadow" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control rounded-pill c-shadow" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
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