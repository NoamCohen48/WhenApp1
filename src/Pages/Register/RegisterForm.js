import React, { useRef, useState } from 'react';

import '../Login/LoginForm.css'

import './RegisterForm.css'

import { useNavigate } from 'react-router-dom';

import { findPerson, registerPerson } from '../../../db/users.js'
import { useChatContext } from '../../../Components/ContextProvider/ChatContextProvider';

function RegisterForm(props) {

    const usernameInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();
    const nicknameInput = useRef();
    const uploudButton = useRef();
    const avaterInput = useRef();
    const errorText = useRef();

    const [file, setFile] = useState("/resources/emptyAvatar.jpg");

    const navigate = useNavigate();
    const chatContext = useChatContext();

    function Register(event) {
        event.preventDefault();

        let username = usernameInput.current.value;
        let password = passwordInput.current.value;
        let confirmPassword = confirmPasswordInput.current.value;
        let nickname = nicknameInput.current.value;

        let person = findPerson({ username: username })

        if (password !== confirmPassword) {
            errorText.current.style.visibility = "visible";
            errorText.current.textContent = "Passwords are not the same.";
            return;
        }

        if (person.length === 0) {
            // TODO: do it async from db
            registerPerson(username, nickname, password, file);

            chatContext.userEntered(username);
            navigate("../Chat");
        }

        else {
            errorText.current.style.visibility = "visible";
            errorText.current.textContent = "User already been taken."
        }
    }

    function UploudImage(event) {
        uploudButton.current.click(event);
    }

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
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
                        <input type="text" className="form-control" placeholder="User Name" required ref={usernameInput} pattern="^[a-zA-Z0-9]*$"
                            title="Must contain only numbers and letters" />
                        <input type="text" className="form-control" placeholder="Nickname" required ref={nicknameInput} pattern="^[a-zA-Z0-9]*$"
                            title="Must contain only numbers and letters" />
                        <input type="password" className="form-control" placeholder="Password" required ref={passwordInput} pattern="^(?!.* )(?=.*\d)(?=.*[A-Z]).{8,}$"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />
                        <input type="password" className="form-control" placeholder="Confirm Password" required ref={confirmPasswordInput} />

                        <div className="avatar" ref={avaterInput} onClick={UploudImage}>
                            <img src={file} className="rounded-3 img-fluid"
                                alt="Avatar" />
                        </div>
                        <input className="file-upload hidden" type="file" accept="image/*" ref={uploudButton} onChange={handleChange}></input>
                        <button type="submit" className="btn btn-primary btn-lg rounded-pill c-shadow">Register</button>
                        <p ref={errorText} className='error'></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterForm;
