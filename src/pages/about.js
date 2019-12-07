import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <h1>About Me</h1>
                <p>I am very enthusiastic about learning Gatsby.js and build few webpages</p>
                <p><Link to="/contact">Want to work with me? Reach out</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage;