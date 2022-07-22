import React, { useEffect, useRef } from "react";
import './Form.css';
import logo from '../image/bg.jpg';
const Form = () => {
    const email = useRef();
    const username = useRef();
    const confirm = useRef();
    const password = useRef();
    useEffect(() => {
        email.current.focus();

    }, [])
    return (
        <main>
            <figure>
                <img src={logo} />
            </figure>
            <form>
                <span>
                    <label for="username" className="text-small-uppercase">Your name</label>
                    <input className="text-body" id="username" name="username" type="text" required ref={username} onKeyDown={(event) => {
                        if (event.key === "Tab") {
                            event.preventDefault();
                            confirm.current.focus();

                        }
                    }} />
                </span>
                <span>
                    <label for="email" className="text-small-uppercase">Email Address</label>
                    <input className="text-body" id="email" name="email" type="email" required ref={email}
                        onKeyDown={(event) => {
                            if (event.key === "Tab") {
                                event.preventDefault();
                                username.current.focus();

                            }
                        }}
                    />
                </span>
                <span>
                    <label for="city" className="text-small-uppercase">Password</label>
                    <input className="text-body" id="city" name="city" type="text" required ref={password}
                        onKeyDown={(event) => {
                            if (event.key === 'Tab') {
                                event.preventDefault();
                                email.current.focus()
                            }
                        }} />
                </span>
                <span>
                    <label for="city" className="text-small-uppercase">Confirm Password</label>
                    <input className="text-body" id="city" name="city" type="text" required ref={confirm}
                        onKeyDown={(event) => {
                            if (event.key === 'Tab') {
                                event.preventDefault();
                                password.current.focus();
                            }
                        }} />
                </span>
                <input className="text-small-uppercase" id="submit" type="submit" value="Register" />
            </form>
        </main>
    );
}

export default Form;