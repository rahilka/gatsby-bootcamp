import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact Page</h1>
            <p>The best way to reach me is via
            <a href="https://www.twitter.com/aklihar" target="_blank">@aklihar </a>
             on Twitter</p>
             <Footer />
        </div>
    )
}

export default ContactPage;