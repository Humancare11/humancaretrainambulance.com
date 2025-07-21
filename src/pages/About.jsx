import React from 'react';

function About() {
    return (
        <div className="about-section">
            <section className="about-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="about-title">About Us</h2>
                            <p className="about-description">
                                We are dedicated to providing the best train ambulance services, ensuring safe and timely transportation for patients in need.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img 
                                src="https://via.placeholder.com/400" 
                                alt="About Us" 
                                className="about-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
