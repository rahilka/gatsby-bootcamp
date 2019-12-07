import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <div>
            <h1>About ME</h1>
            <p>I am very enthusiastic about learning Gatsby.js and build few webpages</p>
            <p><Link to="/contact">Want to work with me? Reach out</Link></p>
        </div>
    )
}

export default AboutPage;