import React, { useState, useEffect } from 'react';
import './testimonialssection.css';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: " Ritika Sinha",
      location: "Patna",
      avatar: "bg-secondary",
      rating: 5,
      text: "We couldn’t afford an air ambulance, and Humancare’s train service was a lifesaver. The entire journey from Patna to Delhi was smooth, and the medical team was attentive throughout. My father was stable and well-cared for.",
      
    },
    {
      name: "Arvind Mehra",
      location: "Mumbai",
      avatar: "bg-primary",
      rating: 5,
      text: "I was nervous about shifting my post-surgery mother from Lucknow to Mumbai by train, but the ICU setup onboard was impressive. The doctor and nurse handled everything so professionally, it felt like a moving hospital!",
    },
    {
      name: "Shalini Iyer",
      location: "Chennai ",
      avatar: "bg-accent",
      rating: 5,
      text: "Thank you, Humancare, for helping us bring our child from Hyderabad to Chennai safely. The pediatric team was kind, and the incubator setup gave us complete peace of mind.",
    },
    {
      name: "Suresh",
      location: "Nagpur",
      avatar: "bg-secondary",
      rating: 5,
      text: "We had to transfer my uncle from Kolkata to Nagpur. The team managed all the logistics, and the journey was perfectly coordinated. I travelled along, and the staff took care of both of us with patience and care.",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="header1">
          <span className="subtitle">What Families Say</span>
          <h2 className="title">Stories of Compassionate Care and Safe Transfers
</h2>
          <p className="description">
           Hear directly from families and patients who experienced the comfort, safety, and professionalism of our train ambulance services. From long-distance medical transfers to critical patient repatriation, our clients trust us to deliver expert care with empathy. 
          </p>
        </div>
        <div className="testimonial-card">
          <div className="stars">
            {[...Array(currentData.rating)].map((_, i) => (
              <Star key={i} className="star" />
            ))}
          </div>
          <blockquote className="testimonial-text">
            "{currentData.text}"
          </blockquote>
          <div className="author">
            <div className={`avatar ${currentData.avatar}`}>
              <div className="avatar-inner"></div>
            </div>
            <div>
              <div className="author-name">{currentData.name}</div>
              <div className="relationship">{currentData.relationship}</div>
              <div className="location">{currentData.location}</div>
            </div>
          </div>
          <div className="navigation">
            <button onClick={prevTestimonial} className="nav-button">
              <ChevronLeft className="icon" />
            </button>
            <div className="dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="nav-button">
              <ChevronRight className="icon" />
            </button>
          </div>
        </div>
        <div className="testimonial-grid">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="testimonial-box">
              <div className="stars small">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-small" />
                ))}
              </div>
              <p className="snippet">
                "{testimonial.text.substring(0, 120)}..."
              </p>
              <div className="author-mini">
                <div className={`avatar-mini ${testimonial.avatar}`}>
                  <div className="avatar-inner-mini"></div>
                </div>
                <div>
                  <div className="name-mini">{testimonial.name}</div>
                  <div className="location-mini">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
