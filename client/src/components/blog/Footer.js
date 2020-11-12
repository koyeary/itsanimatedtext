import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="navbar">
            <h2 className="mx-auto">Check me out on <Link to="https://animatedtext.tumblr.com/">tumblr</Link></h2>
        </div>
    )
}

export default Footer;