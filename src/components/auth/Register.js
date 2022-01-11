import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const username = useRef()
    const email = useRef()
    // eslint-disable-next-line
    const verifyPassword = useRef()
    const conflictDialog = useRef()
    const navigate = useNavigate()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            username: username.current.value
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("activeUser", createdUser.id)
                                localStorage.setItem("activeEmail", createdUser.email)
                                localStorage.setItem("activeUserName", createdUser.username)
                                props.setLoggedin(true)
                                navigate("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password alertBox" ref={conflictDialog}>
                <div className="alertTxt">Account with that email address already exists</div>
                <button className="signInBtn" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>
            <section className="bg">
                <form className="loginForm" onSubmit={handleRegister}>
                    <h2 className="registerHdr">Please Register</h2>
                    {/* <fieldset>
                        <label htmlFor="username" className="loginLabel"> Username </label>
                        <input ref={username} type="text" name="username" id="username" className="usernameSelectField" placeholder="Username" required autoFocus />
                    </fieldset> */}
                    <fieldset>
                        <label htmlFor="inputEmail" className="loginLabel"> Email address </label>
                        <input ref={email} type="email" name="email" id="email" className="emailSelectField" placeholder="Email address" required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <button className="signInBtn" type="submit"> Sign up </button>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}
