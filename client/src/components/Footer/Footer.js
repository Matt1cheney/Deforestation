import React from 'react';
import Fbook from "../../images/Fbook.svg";
import "./Footer.css";

export default function Footer() {
    return (
        <>
        <div className="footer">
            <p>Footey Boi</p>
            <a href="https://www.facebook.com/Appleseed-Initiative-101798068060276">
                <img src={Fbook} alt="facebook"/>
           </a>
           </div>
        </>
    )
}
