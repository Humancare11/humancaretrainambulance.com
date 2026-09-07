import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import bannerImg from "../assets/Blogs/train-ambulance-eligibility.webp";
import "./Blog1.css";

/* FAQ Item Component */
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-dropdown-item ${open ? "faq-open" : ""}`}>
      <button
        type="button"
        className="faq-dropdown-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="faq-dropdown-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="faq-dropdown-answer">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
};

/* Main Component */
const TrainAmbulanceEligibility = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who can travel by train ambulance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Patients who are medically stable but need assistance or medical supervision during a long-distance railway journey may be suitable. This can include bedridden patients, elderly patients with limited mobility, postoperative patients, oxygen-dependent patients, and patients travelling for specialist treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Can a bedridden patient travel by train ambulance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a medically suitable bedridden patient can potentially travel by train ambulance with appropriate patient-handling assistance and medical support.",
        },
      },
      {
        "@type": "Question",
        name: "Can an oxygen patient travel by train?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some patients requiring oxygen can travel by train ambulance when their condition is stable and appropriate oxygen support has been planned for the journey.",
        },
      },
      {
        "@type": "Question",
        name: "Can ventilator patients use a train ambulance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some ventilator-dependent patients may be transported by rail, but only after careful assessment of their clinical stability, equipment requirements, monitoring needs, and level of medical support required.",
        },
      },
      {
        "@type": "Question",
        name: "Can children use a train ambulance service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, children may be transported by train when medically appropriate. Pediatric patients require a transportation plan based on their age, condition, size, and medical requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Is a train ambulance suitable for an emergency patient?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. Patients who are unstable or require immediate intervention may need a faster or higher-acuity transportation option. Medical suitability should be assessed before choosing rail transportation.",
        },
      },
      {
        "@type": "Question",
        name: "Does the patient's condition affect train ambulance price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The train ambulance cost can change depending on medical staff, equipment, oxygen or respiratory support, ground ambulances, journey duration, and other patient-specific requirements.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Train Ambulance Service in India | Who Can Travel?",
    description:
      "Find out who can travel by train ambulance in India, including bedridden, elderly, postoperative, oxygen-dependent, and medically monitored patients.",
    image: "https://humancaretrainambulance.com" + bannerImg,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://humancaretrainambulance.com/train-ambulance-eligibility",
    },
    publisher: {
      "@type": "Organization",
      name: "Humancare Train Ambulance",
      url: "https://humancaretrainambulance.com",
    },
  };

  return (
    <>
      <Helmet>
        <title>Train Ambulance Service in India | Who Can Travel?</title>
        <meta
          name="description"
          content="Find out who can travel by train ambulance in India, including bedridden, elderly, postoperative, oxygen-dependent, and medically monitored patients."
        />
        <link
          rel="canonical"
          href="https://humancaretrainambulance.com/train-ambulance-eligibility"
        />
        <meta
          property="og:title"
          content="Train Ambulance Service in India | Who Can Travel?"
        />
        <meta
          property="og:description"
          content="Find out who can travel by train ambulance in India, including bedridden, elderly, postoperative, oxygen-dependent, and medically monitored patients."
        />
        <meta
          property="og:url"
          content="https://humancaretrainambulance.com/train-ambulance-eligibility"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={bannerImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Train Ambulance Service in India | Who Can Travel?"
        />
        <meta
          name="twitter:description"
          content="Find out who can travel by train ambulance in India, including bedridden, elderly, postoperative, oxygen-dependent, and medically monitored patients."
        />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      {/* Blog Banner */}
      <section className="blog-banner-d">
        <img
          src={bannerImg}
          alt="Who Can Travel by Train Ambulance? A Guide for Patients and Families in India"
          className="banner-img"
          loading="eager"
          width="1200"
          height="420"
        />
        <div className="banner-overlay"></div>
        <div className="banner-text">
          <h1>
            Who Can Travel by Train Ambulance? A Guide for Patients and
            Families in India
          </h1>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="content-wrapper">
          {/* Intro */}
          <p>
            If a medical traveler has to go to another city for treatment, it is
            the question &ldquo;can he/she make the trip safely without risking
            any complications?&rdquo; that comes first more often than knowing
            about the destination city.
          </p>
          <p>
            Getting to a faraway place via rail is quite common as it is the most
            convenient means of transportation in India, yet a passenger who has
            to depend on health care cannot always be on the train in the
            regular passenger fashion. A patient who cannot be moved around at
            all will need help, someone recovering from surgery might need
            someone to keep their eye on them, and a person relying on oxygen
            would probably want someone checking whether their supply still
            works and their breathing is alright.
          </p>
          <p>
            Hospital on Wheels or train ambulance service is meant for those
            patients who require medical attention during a railway journey.
          </p>
          <p>
            Who can take a{" "}
            <Link
              to="/trainambulance"
              style={{ color: "#0d6efd", fontWeight: 600, textDecoration: "underline" }}
            >
              train ambulance
            </Link>{" "}
            then?
          </p>
          <p>
            To a considerable extent, the answer is not tied to the diagnosis,
            it depends rather on whether the patient&apos;s condition allows
            them to travel, is the patient capable of moving, how many hours of
            continuous nursing they are going to need, and whether they can put
            up with the discomforts of the travel.
          </p>

          {/* Patient's Condition */}
          <h2>The Patient&apos;s Condition Comes First</h2>
          <p>
            Train ambulance qualification does not revolve around a specific
            diagnosis or illness.
          </p>
          <p>
            Two patients given the same diagnose may need different levels of
            transportation. One might easily travel with just a nurse while
            another would likely need a train ambulance that has been fitted out
            to meet the requirements of someone who is seriously injured or very
            ill.
          </p>
          <p>
            Before arranging a train ambulance, healthcare professionals should
            consider questions such as:
          </p>
          <ul>
            <li>Is the patient medically stable?</li>
            <li>Can the patient tolerate several hours of travel?</li>
            <li>Does the patient need oxygen?</li>
            <li>Does the patient require continuous monitoring?</li>
            <li>Can the patient sit, or must they remain lying down?</li>
            <li>Are regular medications required during the journey?</li>
            <li>Could the patient&apos;s condition deteriorate unexpectedly?</li>
            <li>
              What level of medical support would be needed if their condition
              changes?
            </li>
          </ul>
          <p>
            These factors help determine whether rail transportation is
            appropriate.
          </p>

          {/* Suitable Patients */}
          <h2>Patients Who May Be Suitable for Medical Rail Travel</h2>
          <p>
            A{" "}
            <Link
              to="/"
              style={{ color: "#0d6efd", fontWeight: 600, textDecoration: "underline" }}
            >
              rail ambulance
            </Link>{" "}
            can be considered for several types of patients when their condition
            is stable enough for a planned journey.
          </p>

          <h3>1. Bedridden Patients</h3>
          <p>
            Bedridden patients are among the people who gain the most from a
            healthcare-supported train transfer.
          </p>
          <p>
            A wheelchair-bound traveler will have to face several challenges
            related to the railway trip when it comes to ordinary train travel.
            Leaving the bed, going out, the car, reaching the train station,
            getting on the train, and getting to the destination hospital will
            probably be with the help of someone else.
          </p>
          <p>
            Rail ambulance transport can plan a trip based on the patient&apos;s
            condition.
          </p>
          <p>
            The medical transport crew might prepare suitable means &amp; tools
            of patient-handling &amp; help at the same time, and on the ground,
            ambulances might be the means of connection between the hospital and
            the railway station.
          </p>

          <h3>2. Elderly Patients With Limited Mobility</h3>
          <p>
            Age alone does not decide if a patient needs emergency transport by
            train.
          </p>
          <p>
            However, seniors might face problems due to less mobility, low
            strength, walking issues, and several medical demands making a long
            trip quite difficult.
          </p>
          <p>
            When a patient&apos;s illness is not critical but his/her usual
            railway travel is physically very tiresome or difficult, an ambulance
            train journey accompanied by a team of health workers may be
            recommended as a convenient option.
          </p>

          <h3>3. Patients Recovering After Surgery</h3>
          <p>
            Patients sometimes need to travel to another city after surgery
            for:
          </p>
          <ul>
            <li>Follow-up treatment</li>
            <li>Specialist consultation</li>
            <li>Rehabilitation</li>
            <li>Further procedures</li>
            <li>Continued medical care</li>
            <li>Transfer to a preferred hospital</li>
          </ul>
          <p>
            Some postoperative patients are stable but still require assistance
            with movement, medication, or monitoring.
          </p>
          <p>
            For these patients, a train ambulance service may be considered when
            the treating team believes rail transportation is appropriate.
          </p>
          <p>
            The timing of travel is particularly important after surgery.
            Families should not assume that being discharged from one hospital
            automatically means the patient is fit for a long railway journey.
          </p>

          <h3>4. Patients Who Need Oxygen</h3>
          <p>
            Not only when they are well enough that they can travel, some
            patients still need extra oxygen.
          </p>
          <p>
            Traveling by train might not meet their medical needs for these
            patients.
          </p>
          <p>
            Medical train transfer would help the patient to make the best plan
            by considering their oxygen requirement.
          </p>
          <p>
            The patient&apos;s oxygen requirement must be declared before the
            booking is made as their requirement can greatly influence the
            transportation arrangement.
          </p>

          <h3>5. Patients Requiring Regular Medication</h3>
          <p>
            A long journey can interfere with normal medication schedules if it
            is not planned properly.
          </p>
          <p>
            Patients taking regular medicines may need doses during
            transportation according to their doctor&apos;s instructions.
          </p>
          <p>
            A medical escort can help maintain the planned medication schedule
            where appropriate and monitor the patient for relevant changes.
          </p>
          <p>
            This can be particularly useful for patients whose medication cannot
            simply be postponed until they reach their destination.
          </p>

          <h3>6. Patients Requiring Medical Monitoring</h3>
          <p>
            Sometimes it is possible to have a patient who doesn&apos;t need
            intensive care, and still the patient will not travel completely
            without medical supervision.
          </p>
          <p>
            Let&apos;s suppose a patient has medically stabilized, but he needs
            periodic monitoring because of his existing condition or new
            treatment.
          </p>
          <p>
            In such a scenario, a trained ambulance will send medical personnel
            to observe the patient during the journey who will also be able to
            react to the level of care as required.
          </p>
          <p>
            Monitoring needs must be figured out before travel and not left to be
            discovered when the travel begins.
          </p>

          <h3>7. Patients With Restricted Movement</h3>
          <p>Not every patient who needs assistance is bedridden.</p>
          <p>A person may be able to sit but have difficulty:</p>
          <ul>
            <li>Standing</li>
            <li>Walking</li>
            <li>Climbing steps</li>
            <li>Transferring between vehicles</li>
            <li>Managing a long railway station journey</li>
          </ul>
          <p>
            For such patients, transportation support can be more important
            than advanced medical equipment.
          </p>
          <p>
            The right arrangement depends on how much physical assistance the
            patient needs.
          </p>

          <h3>8. Patients Being Transferred to Specialist Hospitals</h3>
          <p>
            A patient may need to leave their current city because a particular
            treatment or specialist is unavailable locally.
          </p>
          <p>This can happen when families need access to:</p>
          <ul>
            <li>Specialized surgery</li>
            <li>Oncology care</li>
            <li>Neurology services</li>
            <li>Cardiac treatment</li>
            <li>Rehabilitation</li>
            <li>Advanced diagnostic facilities</li>
            <li>Other specialist services</li>
          </ul>
          <p>
            If the patient is medically suitable for rail travel, a rail
            ambulance service can provide an option for reaching a hospital in
            another city.
          </p>
          <p>
            The receiving hospital should be identified before the transfer,
            especially when the patient requires admission immediately after
            arrival.
          </p>

          {/* ICU Patients */}
          <h2>Can ICU Patients Travel by Train Ambulance?</h2>
          <p>Sometimes the question deserves more elaborate consideration.</p>
          <p>
            Staying at the ICU does not, by itself, tell us whether rail
            transportation is safe for the patient, regardless of his/her
            condition.
          </p>
          <p>
            What matters the most is whether the patient is clinically stable
            and what level of support he/she needs.
          </p>
          <p>
            A patient who has recovered and is sufficiently stable to plan the
            transfer may be a candidate for rail transportation provided that a
            medical team is adequately equipped.
          </p>
          <p>
            But a patient who needs urgent medical attention and is medically
            unstable is unlikely to be transported by train.
          </p>
          <p>
            The responsibility to make a decision belongs ultimately to the
            patient&apos;s regular doctor, who should first examine the patient.
          </p>

          {/* Ventilator-Dependent Patients */}
          <h2>What About Ventilator-Dependent Patients?</h2>
          <p>Ventilator-dependent patients require particularly careful planning.</p>
          <p>
            A long railway journey can create additional considerations
            involving:
          </p>
          <ul>
            <li>Ventilator requirements</li>
            <li>Oxygen supply</li>
            <li>Monitoring</li>
            <li>Power or battery backup</li>
            <li>Emergency preparedness</li>
            <li>Medical staffing</li>
            <li>Patient stability</li>
            <li>Journey duration</li>
          </ul>
          <p>
            A ventilator requirement should never just be seen as a
            patient&apos;s request for a certain form of accommodation.
          </p>
          <p>
            It is necessary that the medical team evaluate the patient&apos;s
            condition and decide if it is safe for the patient to be moved by
            train and what sort of a backup and support will be required during
            the movement.
          </p>
          <p>
            An alternative mode of transportation may be suggested if the
            medical team thinks that the desired degree of care cannot be
            ensured at any time during the movement.
          </p>

          {/* Children */}
          <h2>Can Children Travel by Train Ambulance?</h2>
          <p>
            Children can require medical transportation just as adults do, but
            their needs are different.
          </p>
          <p>A child may need a train ambulance because of:</p>
          <ul>
            <li>Limited mobility</li>
            <li>Recovery after surgery</li>
            <li>Ongoing medical treatment</li>
            <li>Specialist care in another city</li>
            <li>Need for medical supervision</li>
          </ul>
          <p>
            The child&apos;s age, weight, medical condition, equipment
            requirements, and level of observation should all be considered
            before travel.
          </p>
          <p>
            For infants and medically complex children, the transportation plan
            should be developed particularly carefully with appropriate
            pediatric medical guidance.
          </p>

          {/* Who May Not Be a Good Candidate */}
          <h2>Who May Not Be a Good Candidate for Rail Transfer?</h2>
          <p>
            A{" "}
            <Link
              to="/"
              style={{ color: "#0d6efd", fontWeight: 600, textDecoration: "underline" }}
            >
              train ambulance
            </Link>{" "}
            is not an emergency solution for every medical condition.
          </p>
          <p>Rail transportation may be unsuitable when the patient:</p>
          <ul>
            <li>Is clinically unstable</li>
            <li>Requires immediate emergency intervention</li>
            <li>
              Needs highly specialized critical care that cannot be maintained
              during the journey
            </li>
            <li>Has a condition where prolonged travel presents significant risk</li>
            <li>Requires rapid transportation that railway travel cannot provide</li>
          </ul>
          <p>
            Under these circumstances, using a higher acuity transportation method
            like an air ambulance should be discussed based mainly on the
            patient&apos;s medical condition.
          </p>
          <p>
            Without a doubt, the best way to move the patient is with an option
            that is able to provide the necessary level of care throughout the
            entire trip.
          </p>

          {/* Doctor or Nurse */}
          <h2>Does the Patient Need a Doctor or Nurse?</h2>
          <p>Not every patient requires the same type of medical escort.</p>
          <p>
            The appropriate team depends on the patient&apos;s condition and care
            requirements.
          </p>
          <p>Depending on the transfer, the accompanying team may include:</p>
          <ul>
            <li>Doctor</li>
            <li>Nurse</li>
            <li>Paramedic</li>
            <li>Other qualified medical personnel</li>
          </ul>
          <p>
            A patient with basic mobility needs may require a different level
            of supervision than someone dependent on oxygen or advanced medical
            equipment.
          </p>
          <p>
            Families should therefore ask specifically about who will accompany
            the patient and what their responsibilities will be.
          </p>

          {/* Information to Provide */}
          <h2>What Information Should Families Provide?</h2>
          <p>
            A transportation provider cannot properly plan a medical transfer
            without understanding the patient&apos;s requirements.
          </p>
          <p>
            Before requesting a train ambulance service, families should keep
            the following information ready:
          </p>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "#0f172a" }}>
              Medical details
            </h3>
            <ul>
              <li>Diagnosis</li>
              <li>Current condition</li>
              <li>Recent medical reports</li>
              <li>Recent procedures or surgery</li>
              <li>Current medications</li>
              <li>Oxygen requirement</li>
              <li>Ventilator requirement, if applicable</li>
              <li>Mobility status</li>
            </ul>

            <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "#0f172a", marginTop: "16px" }}>
              Journey details
            </h3>
            <ul>
              <li>Current hospital or pickup location</li>
              <li>Destination city</li>
              <li>Receiving hospital</li>
              <li>Preferred travel date</li>
              <li>Approximate distance</li>
              <li>Family contact information</li>
            </ul>
          </div>
          <p>
            The more accurately the patient&apos;s condition is described, the
            easier it is to determine what kind of transportation support may be
            required.
          </p>

          {/* Cost Factors */}
          <h2>Does Patient Condition Affect Train Ambulance Cost?</h2>
          <p>Yes.</p>
          <p>
            The train ambulance cost is influenced by the requirements of the
            individual transfer rather than simply the railway distance.
          </p>
          <p>
            For example, a patient requiring only basic assistance may have
            different transportation requirements from someone needing
            continuous monitoring, oxygen, or advanced equipment.
          </p>
          <p>Factors that can influence the train ambulance price include:</p>
          <ul>
            <li>Travel distance</li>
            <li>Railway route</li>
            <li>Patient&apos;s condition</li>
            <li>Medical staff</li>
            <li>Equipment</li>
            <li>Oxygen requirements</li>
            <li>Respiratory support</li>
            <li>Ground ambulance services</li>
            <li>Duration of the transfer</li>
          </ul>
          <p>
            Therefore, train ambulance charges can vary considerably from one
            patient to another.
          </p>
          <p>
            The rail ambulance cost should be discussed after the patient&apos;s
            requirements and complete route have been assessed.
          </p>

          {/* IRCTC */}
          <h2>What About Train Ambulance IRCTC?</h2>
          <p>
            Families researching railway transportation for patients may come
            across searches such as train ambulance IRCTC.
          </p>
          <p>
            It is important to separate railway reservation from medical
            transportation.
          </p>
          <p>
            A railway ticket provides the means to travel between stations. It
            does not by itself provide a medical escort, patient-specific
            equipment, oxygen support, hospital pickup, or destination ambulance.
          </p>
          <p>
            A complete rail ambulance service involves planning the medical and
            transportation requirements around the railway journey.
          </p>
          <p>
            Therefore, families should look beyond the ticket and understand
            what medical support is actually included in their transfer
            arrangement.
          </p>

          {/* Suitability Checklist */}
          <h2>A Quick Suitability Checklist</h2>
          <p>
            Before arranging a medical rail transfer, families can use this
            simple checklist:
          </p>

          <div className="b5-table-wrap">
            <table className="b5-compare-table">
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="b5-feature-cell">
                    Is the patient medically stable?
                  </td>
                  <td className="b5-cell-plain">
                    Determines whether a planned rail journey may be appropriate
                  </td>
                </tr>
                <tr>
                  <td className="b5-feature-cell">
                    Can the patient tolerate a long journey?
                  </td>
                  <td className="b5-cell-plain">
                    Helps assess travel suitability
                  </td>
                </tr>
                <tr>
                  <td className="b5-feature-cell">
                    Can the patient walk independently?
                  </td>
                  <td className="b5-cell-plain">
                    Determines mobility assistance
                  </td>
                </tr>
                <tr>
                  <td className="b5-feature-cell">
                    Does the patient need oxygen?
                  </td>
                  <td className="b5-cell-plain">
                    Helps plan respiratory support
                  </td>
                </tr>
                <tr>
                  <td className="b5-feature-cell">
                    Is continuous monitoring required?
                  </td>
                  <td className="b5-cell-plain">
                    Determines medical staffing and equipment
                  </td>
                </tr>
                <tr>
                  <td className="b5-feature-cell">
                    Does the patient need a stretcher?
                  </td>
                  <td className="b5-cell-plain">Helps plan patient handling</td>
                </tr>
                <tr>
                  <td className="b5-feature-cell">
                    Is medication required during travel?
                  </td>
                  <td className="b5-cell-plain">
                    Supports continuity of treatment
                  </td>
                </tr>
                <tr>
                  <td className="b5-feature-cell">
                    Is an ambulance needed at both ends?
                  </td>
                  <td className="b5-cell-plain">
                    Enables bed-to-bed transportation
                  </td>
                </tr>
                <tr>
                  <td className="b5-feature-cell">
                    Is the receiving hospital prepared?
                  </td>
                  <td className="b5-cell-plain">
                    Helps ensure a smooth final handover
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* What Makes Train Ambulance Appropriate */}
          <h2>What Makes a Train Ambulance Appropriate?</h2>
          <p>
            There is no single diagnosis that defines whether a patient can
            travel by train.
          </p>
          <p>Instead, suitability comes down to a combination of factors:</p>

          <div className="b5-quick-answer" style={{ margin: "20px 0" }}>
            <div className="b5-qa-label">Key Suitability Formula</div>
            <p style={{ fontWeight: 600, fontSize: "16px", color: "#0369a1" }}>
              Medical stability + required level of care + mobility + journey
              duration + available medical support
            </p>
          </div>

          <p>
            When these factors are compatible with rail travel, a train ambulance
            service may be a practical choice for a long-distance transfer
            within India.
          </p>
          <p>
            The patient&apos;s treating doctor and medical transportation team
            should work together to determine the safest arrangement.
          </p>

          {/* FAQ */}
          <h2>Frequently Asked Questions</h2>
          <div className="faq-dropdown-list">
            {faqSchema.mainEntity.map((item, index) => (
              <FaqItem
                key={index}
                q={item.name}
                a={item.acceptedAnswer.text}
              />
            ))}
          </div>

          {/* Conclusion */}
          <h2>
            The Right Patient for a Train Ambulance Is a Medically Suitable
            Patient
          </h2>
          <p>
            A train ambulance is not limited by a certain illness or a group of
            elderly people. What defines the need for a train ambulance is
            whether the patient can undertake a railway journey safely with the
            medical support they require. Some patients will only require help
            with getting around, while others may need oxygen, heart rate
            checking machines, medication support or sophisticated medical
            equipment. So family members should not simply choose the cheapest
            train ambulance option. First of all they need to ascertain if
            travelling by train is medically feasible at all and what support the
            patient will get from the hospital pickup till the final hospital
            handover.
          </p>
          <p>
            After the necessary requirements are settled, the patient-centric
            trip plan will be made.
          </p>
        </div>
      </section>
    </>
  );
};

export default TrainAmbulanceEligibility;
