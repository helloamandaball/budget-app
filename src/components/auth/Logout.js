import React, { useRef } from "react"
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Logout = (props) =>{
    const navigate = useNavigate()
    // const email = useRef()
    // const existDialog = useRef()

    const handleLogout = (e) => {
        e.preventDefault()

        localStorage.removeItem("activeUser")
                
        navigate("/login") 
        window.location.reload(false);
        navigate("/")
        }

    return (
        <>
            {/* <button id="logout-button" className="btn" onClick={handleLogout}>Log Out</button> */}
            <button className="logoutBtn" onClick={handleLogout}>LOG OUT</button>
                   
        </>
    )
}