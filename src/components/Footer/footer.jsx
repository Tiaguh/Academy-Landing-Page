import React from "react";
import './Footer.css'

import icon from './icons/icon.png'

import facebook from './icons/facebook.png'
import instagram from './icons/instagram.png'
import spotify from './icons/spotify.png'
import tiktok from './icons/tiktok.png'
import twitter from './icons/twitter.png'

export default function Footer() {
    return (
        <footer>
            <div className="logo">
                <img className="footer-icon" src={icon} /> 
                <p>Body Impact</p>
            </div>

            <div className="footer-text">
                <p>Follow our social networks:</p>
            </div>

            <hr />

            <div className="footer-socialMedias-icons">
                <img src={facebook} />
                <img src={instagram} />
                <img src={spotify} />
                <img src={tiktok} />
                <img src={twitter} />
            </div>

        </footer>
    );
}