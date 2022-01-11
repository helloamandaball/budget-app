import React from "react";
import "./Footer.css"
import byLogo from ".././images/byLogo.png"

export const Footer = (props) => {
    return (
        <>
            <footer className="footer">
                <p className="littleEmblem"><sup>&#x24;</sup>&#x24;</p>
                <div className="footerDiv">
                    <p className="footerText">&#169;2022 by </p>
                    <a href="https://github.com/helloamandaball"><img src={byLogo} alt="amanda" className="byLogoImg" /></a>
                </div>
            </footer>
        </>
    )
}