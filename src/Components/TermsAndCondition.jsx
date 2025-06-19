import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const TermsAndConditions = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: "22px" }}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Terms And Condition – Akhuwat Loan</h1>

              <p className="mb-4">
                Hi, and welcome to Akhuwat Loan! This page tells you what the
                rules are for using our website and services. You shouldn't use
                our platform if you don't agree with any of these terms. If you
                keep using the site, that means you agree to follow them.
              </p>

              <p className="mb-4">
                It is possible for Akhuwat Loan to change these Terms and
                Conditions at any time and without notice. You are responsible
                for checking this page often to see if there are any changes.
              </p>

              <h2 className="fw-bold mt-5 mb-4">1. What They Mean</h2>
              <p>
                "Akhuwat Loan" refers to the website and loan services that are
                part of the Akhuwat loan program. As a service provider, "We,"
                "Us," and "Our" mean the company. "You" and "Your" mean the
                people who use our site and services.
              </p>

              <h2 className="fw-bold mt-5 mb-4">2. Use of Website</h2>
              <p>
                You agree that you are at least 18 years old and legally able
                to make agreements by visiting our website. You also agree to
                only use our website for legal reasons and not do anything bad
                to it, like hacking, putting malware on it, or using bots.
              </p>

              <h2 className="fw-bold mt-5 mb-4">3. Help with Loans</h2>
              <p>
                Akhuwat Loan helps people in Pakistan who are eligible to apply
                for financial help. When you apply, you must meet our
                requirements and give us correct information. We can choose not
                to accept or reject any application. Before the agreement is
                signed, the loan terms, such as how much is due and any interest
                that will be charged, will be made clear. Once you're accepted,
                you have to follow the terms of the loan.
              </p>

              <h2 className="fw-bold mt-5 mb-4">4. Eligibility for Loans</h2>
              <p>
                To be eligible, you must live in or be a citizen of Pakistan,
                be at least 18 years old, have a valid CNIC, show proof of
                income, and give accurate information about your finances. If
                you don't meet these standards, you might be turned down.
              </p>

              <h2 className="fw-bold mt-5 mb-4">5. Paying back a loan</h2>
              <p>
                You promise to pay back the loan on time, usually once a month,
                after you get it. If you pay your bills late, you might have to
                pay extra fees or have your credit score go down. You can pay it
                back early without being charged extra, and in some cases,
                paying early may even lower your interest rate.
              </p>

              <h2 className="fw-bold mt-5 mb-4">6. Rates of interest and fees</h2>
              <p>
                Our loan rates are fair and depend on the type of loan, the
                amount, and the length of the loan. Any fees that are involved,
                like processing, application, or late fees, will be made clear.
              </p>

              <h2 className="fw-bold mt-5 mb-4">7. Privacy and How We Use Data</h2>
              <p>
                We keep your personal information safe and only use it to
                process your loan, check your information, and talk to you. We
                don't give or sell your information unless the law says we have
                to or it's needed to finish the loan process for you.
              </p>

              <h2 className="fw-bold mt-5 mb-4">8. Links to other websites</h2>
              <p>
                There may be links to other sites on our website for your
                convenience. We don't support or take responsibility for the
                content or problems that come up on these outside sites.
              </p>

              <h2 className="fw-bold mt-5 mb-4">9. The rights to intellectual property</h2>
              <p>
                The logos, text, and pictures on this website are all owned by
                Akhuwat Loan and are protected by intellectual property laws.
                You can't copy our content or use it for business without our
                permission.
              </p>

              <h2 className="fw-bold mt-5 mb-4">10. Activities Not Allowed</h2>
              <p>
                You agree not to give us false information, do anything illegal
                like fraud or money laundering, mess with the website's
                functionality, get to other people's personal information, or
                abuse our services. If you break these rules, you could lose
                your service and face legal consequences.
              </p>

              <h2 className="fw-bold mt-5 mb-4">11. Limitation of Liability</h2>
              <p>
                We work hard to be reliable, but we can't promise that our
                services will always work perfectly or without problems. We're
                not responsible for any harm, data loss, or money you lose
                because you use our services.
              </p>

              <h2 className="fw-bold mt-5 mb-4">12. Stopping of Services</h2>
              <p>
                If you break our rules, commit fraud, or don't pay back what you
                owe, we may suspend or terminate your access to our services.
                You are still responsible for all loan payments that are still
                due.
              </p>

              <h2 className="fw-bold mt-5 mb-4">13. Laws that govern</h2>
              <p>
                The laws of Pakistan govern these terms, and any legal disputes
                will be settled by courts in Pakistan.
              </p>

              <h2 className="fw-bold mt-5 mb-4">14. Changes to the terms</h2>
              <p>
                We may change these terms at any time, and any changes will be
                shown on this page. If you use our services after reading this,
                you agree to the most recent version of our Terms and
                Conditions.
              </p>

              <h2 className="fw-bold mt-5 mb-4">15. Contact Us</h2>
              <p>
                If you have any questions, issues, or requests about these Terms
                and Conditions, please get in touch with us.
              </p>
              <p>
                Email:{" "}
                <a href="mailto:support@Akhuwatloanschemepk.com">
                  support@Akhuwatloanschemepk.com
                </a>
              </p>
              <p>Phone: +92 340 1003463</p>
              <p>
                Office Address: F-6, Islamabad, Islamabad Capital Territory,
                Pakistan
              </p>

              <p className="mt-4 text-muted">Last Updated: October 2024</p>
              <p className="mt-4 ">
                We're glad you picked Akhuwat Loan. We are committed to
                providing you with clear and reliable banking services.
              </p>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3 ">
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

export default TermsAndConditions;
