import React, { useState } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// import Button from 'react-bootstrap/Button';
import "./NavBar.css"
import menuIcon from ".././images/menuIcon.png"
import searchIcon from ".././images/searchIcon.png"
import { Nav } from "react-bootstrap"


export const NavBar = (props) => {
    const [navBarMenu, setNavBarMenu] = useState(false);
    const showNavBarMenu = () => setNavBarMenu(!navBarMenu);


        return (
            <>
                <div className="hdrNavBar">
                    <div className="menuIconDiv">
                        <Link to='#' className="">
                            <img src={menuIcon} alt="menu icon" className="menuIcon" />
                        </Link>
                    </div>
                    <div className="hdrTitle">
                        Budget Tracker
                    </div>
                    <div className="logoutBtnDiv">
                    <Link className="logout" to="/budgets/create/">
                        <button className="logoutBtn">LOG OUT</button>
                    </Link>
                    </div>
                </div>
                <nav className={navBarMenu ? 'navBar active' : 'navBar'}>
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
                        <li className="navItem-search">
                            <form action="/" method="get" className="searchBox">
                                <label htmlFor="header-search">
                                    <span className="visually-hidden">Search</span>
                                </label>
                                <img src={searchIcon} alt="search icon" className="searchIcon" />
                                <input className="searchInput"
                                    type="text"
                                    id="header-search"
                                    placeholder=""
                                    name="search" 
                                />
                            </form>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
