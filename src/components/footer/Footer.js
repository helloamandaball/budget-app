import React from "react";
import "./Footer.css"
import byLogo from ".././images/byLogo.png"

export const Footer = (props) => {
    return (
        <>
            <footer className="footer">
                <div className="footerDiv">
                    <p className="footerText">&#169;2022 by </p>
                    <a href="https://github.com/helloamandaball"><img src={byLogo} alt="amanda" className="byLogoImg" /></a>
                </div>
            </footer>
        </>
    )
}