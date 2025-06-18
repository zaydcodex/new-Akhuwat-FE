
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'22px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Contact Us – Akhuwat Loans</h1>

              <p className="mb-4">
              At Akhuwat Loan, we're dedicated to giving you the best customer service possible and making your financial journey easy, clear, and stress-free. Our expert team is here to help you at every step, whether you want to apply for a loan, learn more about our services, or need help with an ongoing application.
              </p>

              <p className="mb-4">
              During your whole time with us, we want to keep you informed, confident, and helped.

              </p>

             

              <h2 className="fw-bold mt-5 mb-4">Get in Touch With Us</h2>

              <div className="contact-methods">
                <div className="contact-method mb-4">
                  <h3 className="fw-bold">1. Help by email</h3>
                  <p>
                  Need some help? Our customer service team is email ready to help you with anything, whether you want to start a new loan application, check on an old one, or just ask a question. For quick and helpful help, send us a message and we'll get back to you within 24 hours.

                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">2. Help over the phone</h3>
                  <p>
                  Would you rather talk to someone directly? Get in touch with us through our helpline to talk to a helpful agent. We're here to give you clear answers about your loan options, who can get them, and how to apply. Our phone support is open from 9 a.m. to 6 p.m., Pakistan Standard Time, Monday through Friday.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">3. Come to our office</h3>
                  <p>
                  If you're in or near Islamabad, you can come by our office to get help in person. Our loan experts are happy to meet with you in person to walk you through the process and give you personalized advice about money. We want to help you feel confident in the financial choices you make.
                  </p>
                </div>
              </div>

              <div className="office-address mb-4">
                <h2 className="fw-bold">Office Address: Dasti Loan</h2>
                <p>F-6, Islamabad, Islamabad Capital Territory, Pakistan.</p>
              </div>

              <div className="map-container mb-4 text-center p-5">
                <img 
                  src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/10/map-1536x860.png" 
                  alt="Office Location Map" 
                  className="img-fluid rounded  p-5" 
                />
              </div>

              <div className="quote-section mb-4">
                <h3 className="fw-bold">Get a free loan quote right now.</h3>
                <p>
                If you're ready to apply or just want to know more about your choices, we can help! Get in touch with us for a free, personalised loan advice.

Our skilled staff will walk you through the application process, answer all your questions, and help you get the best loan terms for your needs.

Dasti Loan's goal is to help you reach your financial goals by giving you personalised, interest-free loan options that work for you.
                </p>
                <p>Get in touch with us right away to start making your financial situation better.</p>
              </div>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3">
            <div
              className="sticky-top pr-3"
              style={{ top: "0", paddingRight: "22px" }}
            >
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;

