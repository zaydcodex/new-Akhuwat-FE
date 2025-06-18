
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Infographic from '../Images/Infograph.png'
// import aboutUsImg from '../Images/Asaan Qarz loan service.jpg'
import asaanQarz15 from '../Images/asan qarz15.jpg'
import asaanQarz16 from '../Images/asan qarz16.jpg'
import asaanQarz17 from '../Images/asan qarz17.jpg'

import Akhuwat19 from '../Images/Akhuwat19.jpg'
import Akhuwat20 from '../Images/Akhuwat20.jpg'
import Akhuwat21 from '../Images/Akhuwat21.jpg'

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'21px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">About Us</h1>

              <p className="mb-4">
              Welcome to Akhuwat Loan, the reliable place to get loans in Pakistan. The company Akhuwat Loan was started in 2023 by Dr. Amjad Saqib with a strong goal: to make low-cost loans easy for people and groups all over the country to get.
              </p>
              <p className="mb-4">
              Our main goal is to remove financial obstacles so that people can confidently pursue their business and personal goals. It is our goal to provide clear, dependable, and quick financial solutions that are carefully crafted to meet the specific needs of each of our valued clients.
              </p>
              <p className="mb-4">
              We at Akhuwat Loan think that every Pakistani should have an equal chance at being financially stable and successful, and we're here to make that happen.
              </p>
              <div className="my-5 text-center p-4">
                <img 
                  src={Akhuwat19}
                  alt="Asaan Qarz Loan Logo" 
                  className="img-fluid rounded shadow-sm mw-100 h-100 card-img-top" 
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">What We Do</h2>

              <p className="mb-4">
We at Akhuwat Loan have a simple but powerful goal: to help people who need money the most. We strongly believe that everyone, no matter how much money they make, should be able to get an affordable loan. We want to give people the tools they need to improve their financial health and quality of life by giving them low-interest loans and flexible payment plans.

              </p>

              <p className="mb-4">
                We know how hard it is for millions of people in Pakistan to make ends meet. Getting loans can be hard, especially for people with low incomes. Because of this, we are dedicated to making our services easy to access, quick, and clear by getting rid of common obstacles and providing financial solutions that are tailored to each client.
              </p>

              <h2 className="fw-bold mt-5 mb-4">Why Should You Pick Akhuwat Loan?</h2>

              <ol className="fw-light mx-5">
                <li>The cheapest interest rates in Pakistan</li>
                <p>Our interest rates are some of the lowest in the country, so you can borrow money without having to pay back too much.</p>
                <li>Quick and Simple Approval</li>
                <p>Thank you for your time. Our streamlined process makes sure that approvals happen quickly, so you can get the money you need without having to go through a lot of steps.</p>
                <li>Lots of Loan Choices</li>
                <p>We have flexible options for all of your needs, from personal loans and business financing to emergency funds and help with school fees.</p>
                <li>Totally Open and Honest</li>
                <p>We tell the truth. There are no hidden fees or hard-to-understand terms. You get exactly what you see.</p>
                <li>Financial Solutions That Fit Your Needs</li>
                <p>We spend time getting to know you and your finances so that we can give you loans and repayment plans that work best for you.</p>
              </ol>

              <h2 className="fw-bold mt-5 mb-4">Dr. Amjad Saqib is our head founder.</h2>

              <p className="mb-4">
              The founder of Akhuwat Loan is Dr. Amjad Saqib, a caring and progressive social reformer with a big heart. Because he is always working to help people get access to money and reduce poverty, Dr. Saqib has made Akhuwat a national symbol of hope, empowerment, and honesty. Through ethical lending, he has led Akhuwat to become one of Pakistan's most important institutions, changing lives and communities for the better.
              </p>
              <div className="my-5 text-center">
                <img 
                  src={Akhuwat20}
                  alt="Asaan Qarz Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
              <h3>Akhuwat Loan: Giving Pakistanis Power, One Life at a Time</h3>
              <p className="mb-4">
              A big part of Akhuwat Loan's success is Dr. Amjad Saqib's visionary leadership, his deep knowledge of Pakistan's financial system, and most of all, his unwavering dedication to helping people. His belief that everyone should have fair, easy, and respectful access to financial services is at the heart of our values, and they show in every loan we give.
              </p>


              <h2 className="fw-bold mt-5 mb-4">What We Stand For</h2>

              <ul className="fw-light mx-5">
                <li>Honesty: We are completely open and honest in how we do business. Our relationship with every client is built on trust.</li>
                <li>Approach Focused on the Customer: We put our clients first. We make sure that each person gets the care and attention they need by customizing every service we offer.</li>
                <li>New ideas: We're always adding new digital and modern financial tools so that we can serve you better and more efficiently.</li>
                <li>Being responsible to others: We want to make communities better places to live by helping people, small businesses, and families with long-term money problems.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">The loans we offer</h2>

              <p className="mb-4">
                We have a variety of loan programs that are made to fit different needs:
              </p>

              <ul className="fw-light mx-5">
                <li>Loans for people</li>
                <p >Flexible financing for school, health care, household needs, or emergencies that come up out of the blue.</p>
                <li>Loans for businesses</li>
                <p>Entrepreneurs and small business owners can get help to start, run, or grow their businesses.</p>
                <li>Loans for school</li>
                <p>Giving students affordable, interest-free financial aid to help them follow their dreams.</p>
                <li>Loans for emergencies</li>
                <p>Easy and quick ways to get money when you need it quickly.</p>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Our Promise to Pakistan</h2>

              <p className="mb-4">
              As a proudly Pakistani company, Akhuwat Loan is committed to advancing the country through economic empowerment and growth that benefits everyone. Our goal is to make sure that everyone, no matter where they come from, has the money tools they need to do well.
              </p>

              <p className="mb-4">
              We are here to help you whether you want to start a business, go back to school, or deal with life's unexpected problems. One loan at a time, we're making Pakistan a better place to live and invest in.
              </p>
              <div className="my-5 text-center">
                <img 
                  src={Akhuwat21}
                  alt="Asaan Qarz Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm card-img-top" 
                />
              </div>
              <h2 className="fw-bold mt-5 mb-4">Join the family of Akhuwat Loans</h2>

              <p className="mb-4">
              You're not just applying for a loan when you choose Akhuwat Loan; you're also choosing a partner who will be there for you every step of the way on your financial journey. We're here to help you every step of the way whether you want to grow your business, build your dream home, go to school, or get through a tough personal situation.
              </p>

              <p className="mb-4">
              No-interest loans that are quick, safe, and easy to get Easy to fill out the application  Customer service based on empathy

              </p>
              <p className="mb-4">
              Akhuwat is different because your dreams matter and your goals are our mission. Start today and see for yourself.

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

export default AboutUs;

