import React, { useState } from "react"
import { Link } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
// import { Nav } from "react-bootstrap"
// import Button from 'react-bootstrap/Button';
// import menuIcon from ".././images/menuIcon.png"
// import searchIcon from ".././images/searchIcon.png"
import { Logout } from "../auth/Logout"
import "./NavBar.css"

//
export const NavBar = (props) => {
    // const [navBarMenu, setNavBarMenu] = useState(false);
    // const showNavBarMenu = () => setNavBarMenu(!navBarMenu);

    return (
        <>
            <div className="hdrNavBar">
                <div className="menuIconDiv">
                    {/* <Link to='#' className="hamburgerMenuIcon">
                        <img src={menuIcon} alt="menu icon" className="menuIcon" />
                        &#x2630;
                    </Link> */}
                </div>
                <div className="hdrTitleDiv">
                    <Link to="/" className="hdrTitle">
                        <h2 className="hdrTitle">Budget Tracker</h2>
                    </Link>
                </div>
                {/* <div className="logoutBtnDiv">
                    <Link className="logout" to="/budgets/create/">
                        <button className="logoutBtn">LOG OUT</button>
                    </Link>
                </div> */}
                <div className="logoutBtnDiv">
                    <Logout />
                </div>
            </div>
            {/* <nav className={navBarMenu ? 'navBar active' : 'navBar'}>
                <ul className="navList">
                    <li className="navBtn">
                        <Link className="addBudget" to="/budgets/create/">
                            <button className="addBudgetBtn">NEW BUDGET+</button>
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
            </nav> */}
        </>
    )
}
