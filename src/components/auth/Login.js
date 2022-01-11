import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"


export const Login = (props) => {
    const email = useRef()
    // eslint-disable-next-line
    const password = useRef()
    const existDialog = useRef()
    const navigate = useNavigate() //now needs to be navigate and useNavigate()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("activeUser", exists.id)
                    localStorage.setItem("activeEmail", exists.email)
                    localStorage.setItem("activeUserName", exists.username)
                    props.setLoggedin(true)
                    navigate("/") // change to navigate("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section className="vertically-center">
                <form className="form--login" onSubmit={handleLogin}>
                    <h1><sup>&#x24;</sup>&#x24; Budget Tracker</h1>
                    {/* <h3>Please sign in</h3> */}
                    <div className="emailLogin">
                        <fieldset>
                            {/* <label htmlFor="inputEmail"> Enter your email </label> */}
                            <input ref={email} type="email"
                                id="email"
                                className="form-control emailInputBox"
                                placeholder="Enter your email"
                                required autoFocus />
                        </fieldset>
                        <fieldset>
                            <button type="submit">
                                LOG IN
                            </button>
                        </fieldset>
                    </div>
                </form>
                <div className="link--register">
                    <Link to="/register">Not a member yet? Sign up today!</Link>
                </div>
            </section>
        </main>
    )
}


