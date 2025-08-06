import React, { useEffect, useState } from 'react';
import './HumanCarePreloader.css';

const HumanCarePreloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.classList.remove('no-scroll-y');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="human-preloader"
      style={{ display: isLoaded ? 'none' : 'block' }}
    >
      <div
        id="ctn-human-preloader"
        className={`ctn-human-preloader ${isLoaded ? 'loaded' : ''}`}
      >
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            {'HUMANCARE'.split('').map((char, index) => (
              <span
                key={index}
                className="letters-loading"
                data-text-preloader={char}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </section>
  );
};

export default HumanCarePreloader;
