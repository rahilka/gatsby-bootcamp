import React from 'react';
import { Link } from 'gatsby';

import Footer from '../components/footer';
import Header from '../components/header';

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>I am very enthusiastic about learning Gatsby.js and build few webpages</p>
            <p><Link to="/contact">Want to work with me? Reach out</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage;