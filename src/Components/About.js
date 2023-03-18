import React from 'react';
import './About.css';

function About() {
    return (
        <div className="container">
            <h1>About Us</h1>

            <div className="row">
                <div className="col-lg-6">
                    <h2>Our Mission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet hendrerit nisi. Proin luctus urna vitae enim cursus, ut faucibus metus bibendum. Curabitur efficitur dolor a lacus gravida, sit amet placerat nibh pulvinar. Aliquam nec est tortor.</p>
                </div>

                <div className="col-lg-6">
                    <h2>Our History</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet hendrerit nisi. Proin luctus urna vitae enim cursus, ut faucibus metus bibendum. Curabitur efficitur dolor a lacus gravida, sit amet placerat nibh pulvinar. Aliquam nec est tortor.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
