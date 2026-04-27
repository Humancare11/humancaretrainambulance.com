import './core.css';

/* ─── DATA ─────────────────────────────────────────── */
const STATS = [
  { num: '1000', unit: '+', label: 'Transfers Completed' },
  { num: '10',   unit: '+', label: 'Years of Experience' },
  { num: '24/7', unit: '',  label: 'Emergency Support' },
  { num: '100',  unit: '%', label: 'Safe & Monitored' },
];

const PROBLEMS = [
  { icon: '📋', title: 'Complex Booking Process',   body: 'Train ambulance booking involves multiple steps — IRCTC approvals, documentation, and medical permissions — all confusing during emergencies.' },
  { icon: '⏱️', title: 'Critical Transfer Delays',  body: 'Waiting for the right train or missing urgent transfer windows puts the patient at serious risk and delays critical care.' },
  { icon: '💰', title: 'Unclear Pricing',           body: 'Unexpected charges and unclear pricing for medical setup create added financial pressure during stressful situations.' },
  { icon: '⚙️', title: 'Logistical Overwhelm',     body: 'Coordinating hospitals, rail bookings, and patient care simultaneously is overwhelming without expert guidance.' },
];

const SERVICES = [
  { icon: '🚑', title: 'ICU Train Ambulance', items: ['Fully equipped with oxygen, monitors & ICU setup', 'Doctor & paramedic support throughout the journey', 'Safe long-distance patient transfer via rail'] },
  { icon: '📞', title: 'Booking Assistance',  items: ['Quick, hassle-free train ambulance booking', 'Complete IRCTC coordination & documentation', 'Arrangements ready within 30–60 minutes'] },
  { icon: '🏥', title: 'Bed-to-Bed Transfer', items: ['Pickup from hospital or home, drop at destination', 'Continuous medical care throughout the journey', 'Seamless hospital-to-hospital coordination'] },
  { icon: '🌍', title: 'Pan India Coverage',  items: ['Available across 200+ cities in India', 'Reliable intercity rail ambulance service', 'Trusted provider for all major city pairs'] },
];

const WHY = [
  { title: '30-Minute Response',          body: 'Our team connects within minutes and initiates your train ambulance booking immediately, 24 hours a day.' },
  { title: 'Complete IRCTC Support',      body: 'From booking to medical approvals and coordination — every step is managed by our dedicated team.' },
  { title: 'Experienced Medical Team',    body: 'Trained doctors and paramedics ensure safe monitoring and care throughout your transfer journey.' },
  { title: 'Transparent Pricing',         body: 'Receive a clear cost estimate before confirming any booking — no hidden charges whatsoever.' },
  { title: 'ICU-Equipped Rail Setup',     body: 'Advanced life support with oxygen, cardiac monitors, and ICU infrastructure for critical patients.' },
  { title: 'Dedicated Coordinator',       body: 'A single point of contact manages your entire transfer from first call to safe arrival.' },
  { title: 'Insurance Assistance',        body: 'We help with documentation and guidance for insurance claims, reducing your burden during emergencies.' },
  { title: 'Patient Dignity & Comfort',   body: 'Continuous care, respectful handling, and full medical support throughout every train ambulance journey.' },
];

const STEPS = [
  { icon: '📞', title: 'Call or WhatsApp',       body: 'Share patient details, current location, and destination with our 24/7 response team.' },
  { icon: '💬', title: 'Get Cost Estimate',       body: 'Receive complete information and a transparent pricing estimate within minutes.' },
  { icon: '⚙️', title: 'We Arrange Everything',  body: 'Full booking, IRCTC coordination, medical setup, and travel planning — all handled.' },
  { icon: '🚑', title: 'Safe Patient Transfer',   body: 'Patient is transferred via ICU-equipped rail ambulance with continuous medical support.' },
];

const CITIES_MAJOR = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur'];
const CITIES_MORE  = ['Patna', 'Ranchi', 'Lucknow', 'Varanasi', 'Kanpur', 'Siliguri', 'Guwahati', 'Bhopal', 'Indore', 'Chandigarh'];

const FACTORS = [
  { icon: '📍', label: 'Distance & Transfer Route' },
  { icon: '🚑', label: 'Service Type — ICU or Basic Setup' },
  { icon: '⏱️', label: 'Urgency of Patient Transfer' },
  { icon: '📄', label: 'Medical & IRCTC Documentation' },
  { icon: '👨‍⚕️', label: 'Doctor & Medical Team Requirement' },
  { icon: '🌍', label: 'City-to-City Transfer Distance' },
];

/* ─── COMPONENT ─────────────────────────────────────── */
export default function TrainAmbulanceLanding() {
  return (
    <>
      {/* ALERT BAR */}
      <div className="alert-bar">
        <strong>24/7 Emergency Line Active</strong> — Train Ambulance booking available across India. Call now for immediate assistance.
      </div>

      {/* NAV */}
      <nav>
        <div className="container nav-inner">
          <a href="#" className="logo">
            <div className="logo-icon">🚑</div>
            <div className="logo-wordmark">
              <div className="logo-name">Rail<span>Medic</span></div>
              <div className="logo-tagline">Train Ambulance Services</div>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#coverage">Coverage</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#process">How It Works</a></li>
          </ul>
          <div className="nav-right">
            <a href="https://wa.me/" className="btn-outline">💬 WhatsApp</a>
            <a href="tel:+91" className="btn-red">📞 Call Now</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="live-dot" />
              Immediate Assistance Available
            </div>
            <h1>
              India's Most Trusted<br />
              <em>Train Ambulance</em><br />
              Service
            </h1>
            <p className="hero-desc">
              Full ICU setup, oxygen support, and an expert medical team onboard.
              We manage complete train ambulance booking and IRCTC coordination —
              so your focus stays on your patient.
            </p>
            <div className="hero-actions">
              <a href="tel:+91" className="btn-red">📞 Call Immediately</a>
              <a href="https://wa.me/" className="btn-outline">💬 WhatsApp Us</a>
            </div>
            <div className="hero-trust">
              <div className="trust-item"><span className="trust-icon">✅</span> No Hidden Charges</div>
              <div className="trust-item"><span className="trust-icon">⏱️</span> 30–60 Min Response</div>
              <div className="trust-item"><span className="trust-icon">🏥</span> ICU Equipped</div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <div className="hc-label">Service Overview</div>
              <div className="hc-title">Round-the-Clock Rail Ambulance Across India</div>
              <div className="hc-stats">
                {STATS.map(s => (
                  <div className="hc-stat" key={s.label}>
                    <span className="hc-stat-num">{s.num}{s.unit}</span>
                    <span className="hc-stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="hc-live">
                <span className="hc-green" />
                Emergency team is active and ready
              </div>
            </div>
            <div className="hero-mini-cards">
              <div className="mini-card">
                <span className="mini-icon">🛡️</span>
                <h4>IRCTC Coordination</h4>
                <p>Full booking & documentation managed</p>
              </div>
              <div className="mini-card">
                <span className="mini-icon">💊</span>
                <h4>Medical Team</h4>
                <p>Doctors & paramedics onboard</p>
              </div>
              <div className="mini-card">
                <span className="mini-icon">📍</span>
                <h4>200+ Cities</h4>
                <p>Pan India coverage available</p>
              </div>
              <div className="mini-card">
                <span className="mini-icon">🔒</span>
                <h4>Insurance Support</h4>
                <p>Claim assistance provided</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <div className="stats-band">
        <div className="container">
          <div className="stats-row">
            {STATS.map(s => (
              <div className="stat-item" key={s.label}>
                <span className="stat-big">{s.num}<em>{s.unit}</em></span>
                <span className="stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* URGENT BANNER */}
      <div className="urgent">
        <div className="container urgent-inner">
          <div className="urgent-text">
            <h2>Arrange Your Train Ambulance in 30–60 Minutes</h2>
            <p>Fast rail ambulance booking with full ICU setup available across India — day or night.</p>
          </div>
          <div className="urgent-btns">
            <a href="tel:+91" className="btn-white">📞 Call Immediately</a>
            <a href="https://wa.me/" className="btn-white-outline">💬 WhatsApp Now</a>
          </div>
        </div>
      </div>

      {/* PROBLEMS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="label">The Challenge</div>
            <h2>Why Arranging a Train Ambulance Feels Difficult</h2>
            <p>During a medical emergency, every minute matters — and these common challenges can slow everything down.</p>
          </div>
          <div className="problems-grid">
            {PROBLEMS.map(p => (
              <div className="prob-card" key={p.title}>
                <div className="prob-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-alt" id="services">
        <div className="container">
          <div className="services-layout">
            <div className="services-sidebar">
              <div className="label">What We Offer</div>
              <h2>Complete Train Ambulance Services</h2>
              <p>Safe, fast, and fully managed train ambulance services for every patient transfer need across India — with expert care at every step.</p>
              <a href="tel:+91" className="btn-navy">Get Help Now →</a>
            </div>
            <div className="services-grid">
              {SERVICES.map(s => (
                <div className="svc-card" key={s.title}>
                  <div className="svc-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <ul>
                    {s.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container">
          <div className="section-flex-head">
            <div>
              <div className="label">Why Choose Us</div>
              <h2>Everything Managed. Safe Transfer. No Delays.</h2>
            </div>
          </div>
          <div className="why-grid">
            {WHY.map((w, i) => (
              <div className="why-card" key={w.title}>
                <div className="why-num">0{i + 1}</div>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how" id="process">
        <div className="container">
          <div className="label">How It Works</div>
          <h2>Arranged in Four Simple Steps</h2>
          <div className="steps-row">
            {STEPS.map((s, i) => (
              <div className="step" key={s.title}>
                <div className={`step-circle${i === 0 ? ' active' : ''}`}>{s.icon}</div>
                <h3>Step {i + 1} — {s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="section section-alt" id="coverage">
        <div className="container">
          <div className="coverage-inner">
            <div className="coverage-left">
              <div className="label">Pan India Coverage</div>
              <h2>Connecting 200+ Cities Across India</h2>
              <p>
                Wherever you are, our train ambulance service reaches you swiftly.
                Seamless IRCTC coordination and full medical support for every
                intercity patient transfer, regardless of distance.
              </p>
              <div className="city-group">
                <div className="city-group-label">Major Cities</div>
                <div className="chips">
                  {CITIES_MAJOR.map(c => <span className="chip" key={c}>{c}</span>)}
                </div>
              </div>
              <div className="city-group">
                <div className="city-group-label">Also Covering</div>
                <div className="chips">
                  {CITIES_MORE.map(c => <span className="chip" key={c}>{c}</span>)}
                  <span className="chip-more">+190 more</span>
                </div>
              </div>
              <a href="tel:+91" className="btn-red" style={{ marginTop: '0.5rem' }}>📞 Check Your City</a>
            </div>
            <div className="coverage-visual">
              <div className="cov-icon">🗺️</div>
              <div className="cov-title">Pan India Rail Network</div>
              <div className="cov-note">Intercity train ambulance available between all major stations</div>
              <div className="cov-badge">200+ Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="section-head">
            <div className="label">Transparent Pricing</div>
            <h2>What Does a Train Ambulance Cost?</h2>
            <p>Every transfer is unique. We provide a clear, upfront cost estimate within minutes — no hidden charges.</p>
          </div>
          <div className="pricing-inner">
            <div className="pricing-factors">
              <h3>Cost Depends on These Factors</h3>
              <p>Pricing is determined by the specific nature of your transfer requirement.</p>
              <div className="factor-list">
                {FACTORS.map(f => (
                  <div className="factor" key={f.label}>
                    <div className="factor-icon">{f.icon}</div>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pricing-cta">
              <h3>Get Your Exact Quote in Minutes</h3>
              <p>
                Call us now and receive a complete, transparent cost estimate for your
                train ambulance before confirming any booking. Our team is available
                around the clock for immediate assistance.
              </p>
              <div className="cta-guarantees">
                {['No hidden charges — upfront pricing always', 'Clear breakdown before booking confirmation', 'Insurance documentation assistance provided', 'Flexible payment support available'].map(g => (
                  <div className="guarantee" key={g}>
                    <div className="guarantee-check">✓</div>
                    {g}
                  </div>
                ))}
              </div>
              <a href="tel:+91" className="btn-red">📞 Call for Exact Cost</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="container trust-inner">
          <div className="trust-quote">
            <blockquote>
              "They arranged the entire transfer within an hour. Professional, calm, and the medical team was exceptional throughout the journey."
            </blockquote>
            <cite>— Family of a patient transferred from Mumbai to Patna</cite>
          </div>
          <div className="trust-nums">
            {[
              { num: '1000+', lbl: 'Transfers Done' },
              { num: '10+',   lbl: 'Years Active' },
              { num: '24/7',  lbl: 'Availability' },
            ].map(t => (
              <div className="trust-num-item" key={t.lbl}>
                <span className="tn-num">{t.num}</span>
                <span className="tn-lbl">{t.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Don't Wait in a<br /><em>Critical Situation</em></h2>
          <p>
            Get immediate access to a fully equipped train ambulance with ICU setup,
            oxygen support, and a dedicated medical team ready to transfer your patient safely.
          </p>
          <div className="final-actions">
            <a href="tel:+91" className="btn-red" style={{ padding: '0.95rem 2.2rem', fontSize: '0.95rem' }}>
              📞 Call Immediately — Get Help in Minutes
            </a>
            <a href="https://wa.me/" className="btn-outline" style={{ padding: '0.93rem 2rem', fontSize: '0.95rem' }}>
              💬 WhatsApp Now
            </a>
          </div>
          <p className="final-reassure">Available 24/7 · No hidden charges · IRCTC coordination included · 200+ cities</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon">🚑</div>
                <div className="logo-wordmark">
                  <div className="logo-name">Rail<span>Medic</span></div>
                  <div className="logo-tagline">Train Ambulance Services</div>
                </div>
              </div>
              <p>India's trusted train ambulance service — providing safe, fast, and fully managed patient transfers since 2014.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h5>Services</h5>
                <ul>
                  <li><a href="#">ICU Train Ambulance</a></li>
                  <li><a href="#">Bed-to-Bed Transfer</a></li>
                  <li><a href="#">IRCTC Booking Support</a></li>
                  <li><a href="#">Pan India Coverage</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h5>Information</h5>
                <ul>
                  <li><a href="#">How It Works</a></li>
                  <li><a href="#">Pricing Guide</a></li>
                  <li><a href="#">City Coverage</a></li>
                  <li><a href="#">Insurance Support</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h5>Contact</h5>
                <ul>
                  <li><a href="tel:+91">📞 Call Now</a></li>
                  <li><a href="https://wa.me/">💬 WhatsApp</a></li>
                  <li><a href="#">Emergency Helpline</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 RailMedic Train Ambulance Services. All rights reserved.</p>
            <p>Available 24/7 across 200+ cities in India.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="float-btns">
        <a href="https://wa.me/" className="float-btn float-wa">
          💬 <span>WhatsApp</span>
        </a>
        <a href="tel:+91" className="float-btn float-call">
          📞 <span>Call Now</span>
        </a>
      </div>
    </>
  );
}