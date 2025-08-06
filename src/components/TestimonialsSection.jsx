import React, { useState, useEffect } from 'react';
import './testimonialssection.css';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai to Delhi",
      avatar: "bg-secondary",
      rating: 5,
      text: "During my mother's critical condition, MediTrain provided exceptional care. The medical team was professional and compassionate. They treated my mother like their own family member. The train ambulance was well-equipped and gave us peace of mind during the journey.",
      relationship: "Son"
    },
    {
      name: "Sunita Patel",
      location: "Bangalore to Kolkata",
      avatar: "bg-primary",
      rating: 5,
      text: "I was scared about transferring my husband over such a long distance, but MediTrain made it seamless. The doctor and nurses were constantly monitoring him, and they kept us informed every step of the way. Truly grateful for their service.",
      relationship: "Wife"
    },
    {
      name: "Dr. Amit Verma",
      location: "Chennai to Hyderabad",
      avatar: "bg-accent",
      rating: 5,
      text: "As a physician myself, I was impressed by the medical standards maintained by MediTrain. The equipment was state-of-the-art, and the medical protocols were followed meticulously. They provided excellent care for my elderly father.",
      relationship: "Doctor & Son"
    },
    {
      name: "Meera Reddy",
      location: "Pune to Ahmedabad",
      avatar: "bg-secondary",
      rating: 5,
      text: "The team went above and beyond to ensure my daughter was comfortable during the transfer. They explained everything clearly and were so patient with all our questions. The journey was smooth and safe. Highly recommended!",
      relationship: "Mother"
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
          <h2 className="title">Stories of Hope and Healing</h2>
          <p className="description">
            Read how MediTrain has touched lives and brought families together during their most challenging times.
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
