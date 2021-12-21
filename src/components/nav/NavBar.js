import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// import Button from 'react-bootstrap/Button';
import "./NavBar.css"
import menuIcon from ".././images/menuIcon.png"


export const NavBar = (props) => {
        return (
            <>
                <nav className="hdrNavBar">
                    <div className="menuIconDiv">
                        <img src={menuIcon} alt="menu icon" className="menuIcon" />
                    </div>
                    <div className="hdrTitle">
                        Budget Tracker
                    </div>
                    <div className="logoutBtnDiv">
                    <Link className="logout" to="/budgets/create/">
                        <button className="logoutBtn">LOG OUT</button>
                    </Link>
                    </div>
                </nav>
                <nav className="navBar">
                    <ul className="navList">
                        <li className="navBtn">
                            <Link className="addMonth" to="/budgets/create/">
                                <button className="addMonthBtn">ADD MONTH+</button>
                            </Link>
                            
                        </li>
                        <li className="navItem">
                            <Link className="navLink" to="/months">CURRENT MONTH</Link>
                        </li>
                        <li className="navItem">
                            <Link className="navLink" to="/messages">PAID BILLS</Link>
                        </li>
                        <li className="navItem">
                            <Link className="navLink" to="/tasks">NOTES</Link>
                        </li>
                        <li className="navItem">
                            <Link className="navLink" to="/events">ALL MONTHS</Link>
                        </li>
                        <li className="navItem">
                            <Link className="navLink" to="/events">SEARCH</Link>
                        </li>
                    </ul>
                    {/* <span className="navbar-text">
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </ul>
                    </span> */}
                </nav>
            </>
        )
    }
