import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

import Akhuwat22 from '../Images/Akhuwat22.jpg'

const PrivacyPolicy = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: "22px" }}>
      <div className="row g-0">
        {/* Main Content */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Privacy Policy</h1>

              <p className="mb-4">
              We're very grateful that you trust Akhuwat Loan enough to give us your personal information. Our top priority is to keep your privacy safe, and we are dedicated to upholding the highest standards of security and privacy. This Privacy Policy tells you how we gather, use, and keep your personal data safe when you use our services or visit our website.
              </p>
              <p className="mb-4">
                If you use Akhuwat Loan's services or look around our website, you agree to the rules in this Privacy Policy.
              </p>
              <div className="my-5 text-center">
                <img
                  src={Akhuwat22}
                  alt="Soft Loan Pakistan"
                  className="img-fluid rounded shadow-sm"
                  style={{ width: "80%", height: "auto" }}
                />
              </div>
              <h2 className="fw-bold mt-5 mb-4">1. Information We Collect</h2>

              <p className="mb-4">
                <strong>1. About the Data We Gather Personal Data</strong>
              </p>
              <ul className="fw-light mx-5">
                <li>
                 Name, address, phone number, email address, and CNIC number
                </li>
                <li>
                Information about your income and bank account
                </li>
              </ul>

              <p className="mb-4">
                <strong>How to Get in Touch:</strong>
              </p>
              <p className="mb-4">
                There are a few things we might get when you call, email, or visit us:
              </p>
              <ul className="fw-light mx-5">
                <li>
                 Your name, phone number, email address, and any other information you give us
                </li>
              </ul>
              <p className="mb-4">
                <strong>Don't Know Me Data</strong>
              </p>
              <p className="mb-4">
                We also get technical information from cookies and other similar technologies, like
              </p>
              <ul className="fw-light mx-5">
                <li>
                 information about the user's device, IP address, browser type, referring URLs, and how they use our site
                </li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">
                2. What We Do With Your Facts
              </h2>
              <p>The following are some ways we might use your information:</p>
              <ul className="fw-light mx-5">
                <li>To look over and process your loan application</li>
                <li>To give information, answer questions, and offer support</li>
                <li>To send you marketing materials (you can stop getting them at any time)</li>
                <li>To meet the requirements of laws and rules</li>
                <li>To make the website experience better by using analytics</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">
              3.  Giving out your details
              </h2>
              <p>In certain situations, we may share your information:</p>
              <ul className="fw-light mx-5">
                <li>
                With service providers we can trust to help us handle loans
                </li>
                <li>
                If the law says so or to keep people safe and protect their rights,
                </li>
                
                
              </ul>

              <p className="mb-4">
               We never sell or rent your personal information to third parties for marketing purposes, even if our business merges or is bought out.
              </p>

              <h2 className="fw-bold mt-5 mb-4">4. Safety of Data</h2>

              <p className="mb-4">
              When personal data is sent or stored, it is protected.
              </p>
              <p className="mb-4">
              Secret information can only be seen by people who are allowed to see it.
              </p>
              <p className="mb-4">
              Regular checks are done to find and fix any weaknesses
              </p>
              <p className="mb-4">
              It's our goal to keep your information safe, but no online method is 100% safe.
              </p>

              <h2 className="fw-bold mt-5 mb-4">
                5. Tracking tools and cookies
              </h2>

              <p className="mb-4">
              To study how people use the website and make it better for them.
              </p>
              <p className="mb-4">
              Make your experience unique.
              </p>
              <p className="mb-4">
              To show ads or information that is useful to you and your interests.
              </p>
             

              <h2 className="fw-bold mt-5 mb-4">6. Your Rights</h2>

              <ul className="fw-light mx-5">
                <li>
                To show ads or information that is useful to you and your interests.
                </li>
                <li>
                 If any of the information is wrong, ask for it to be fixed.

                </li>
                <li>
                  If any of the information is wrong, ask for it to be fixed.
                </li>
               
              </ul>

              <p className="mb-4">
                To exercise these rights, contact us via the details provided
                below.
              </p>

              <h2 className="fw-bold mt-5 mb-4">7. Keeping the Data</h2>

              <p className="mb-4">
              We will only keep your information for as long as it takes to provide services, follow the law, and keep records.
              </p>

              <h2 className="fw-bold mt-5 mb-4">8. Linking to outside sites</h2>

              <p className="mb-4">
              There may be links to other pages on our site.
              </p>
              <p className="mb-4">
                There may be links to other pages on our site.
              </p>


              <h2 className="fw-bold mt-5 mb-4">
                9. Changes to the rules about privacy
              </h2>

              <p className="mb-4">
              This policy may be changed from time to time.
              </p>
              <p className="mb-4">
                Updates to the website or email alerts will let people know about big changes.
              </p>

              <h2 className="fw-bold mt-5 mb-4">10. Get in Touch</h2>

              <p className="mb-4">
              To ask questions or make requests about this Privacy Policy, please email us at
              </p>

              <ul className="fw-light mx-5">
                <li>
                  Send an email to support@Akhuwatloanschemepk.com.
                </li>
                <li>
                Call +92 0346 0760718
                </li>
                <li>
                Its address is F-6, Islamabad, Islamabad Capital Territory, Pakistan.

                </li>
              </ul>

              <p className="text-muted mt-4">Last Updated: October 2024.</p>
            </article>
          </main>
        </div>

        {/* Sidebar */}
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

export default PrivacyPolicy;
