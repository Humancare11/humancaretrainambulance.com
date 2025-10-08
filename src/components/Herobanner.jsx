import React from 'react';
import './HeroBanner.css'; // Make sure to import your CSS if it's in a separate file

const HeroBanner = ({ image, heading, paragraph, buttonText, buttonLink }) => {
  return (
    <section className="about-section-pg py-5 text-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
            <h1
              className="about-head fw-bold mb-3"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <p className="mb-4">{paragraph}</p>
            {buttonText && (
              <a href={buttonLink || '#'} className="btn btn-danger px-4 py-2">
                {buttonText}
              </a>
            )}
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img src={image} alt="Banner" className="img-fluid rounded-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
