import React from "react";
import './footer.css'
import icon from './icons/icon5.png'
import facebook from './icons/facebook.png'
import instagram from './icons/instagram.png'
import spotify from './icons/spotify.png'
import tiktok from './icons/tiktok.png'
import twitter from './icons/twitter.png'

function Footer() {
    return (
        <footer>
            <div className="logo">
                <img className="footer-icon" src={icon} /> <p>Body Impact</p>
            </div>
                <div className="footer-text">
                    <p>Follow our social networks:</p>
                </div>
                <hr />
            <div className="footer-socialMedias-icons">
                <div className="icons">
                    <img className="footer-socialMedias" src={facebook} alt="" />
                </div>
                <div className="icons">
                    <img className="footer-socialMedias" src={instagram} alt="" />
                </div>
                <div className="icons">
                    <img className="footer-socialMedias" src={spotify} alt="" />
                </div>
                <div className="icons">
                    <img className="footer-socialMedias" src={tiktok} alt="" />
                </div>
                <div className="icons">
                    <img className="footer-socialMedias" src={twitter} alt="" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;