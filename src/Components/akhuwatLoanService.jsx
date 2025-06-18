import React from 'react';
import CountUp from 'react-countup';
import SecImg from '../Images/12.jpg'
import akhuwat13 from '../Images/Akhuwat13.jpg'
import akhuwat14 from '../Images/Akhuwat14.jpg'


const akhuwatLoanServices = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto" , fontSize:"22px"}}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Loan Services in Pakistan: Making Dreams Come True and Moving Things Forward</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        Akhuwat offers a range of custom loan options to help people and businesses get closer to financial stability and success. Akhuwat's interest-free loans are designed to help you reach your goals, whether they are to go to school, start a business, or buy a house.
        </p>
      </div>

      {/* Personal Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">1. Personal loans can help you reach your life goals.</h2>
          <p>
          Personal loans from Akhuwat can help you with a medical emergency, a family celebration, or a personal need, and you won't have to worry about high interest rates. These loans don't charge interest, so you can focus on what's most important to you instead of worrying about money.
          </p>
          <p>Conditions for eligibility that are clear and easy to understand</p>
          <ul>
            <li>Flexible Repayment: Plans that are made to fit your needs</li>
            <li>Fast Approval: Quick processing makes sure that people can get help when they need it most.</li>
            <li>You can get more from an Akhuwat personal loan than just money. They can help you find peace of mind and move forward.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center"
                >
                  <img
                    src={akhuwat13}
                    alt="Money Received"
                    className="img-fluid  wm-100 h-100 mt-5 card-img-top"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="start-0 bg-success text-white p-0"
                    style={{ maxWidth: "100%" }}
                  >
                    <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                    <h2 className="display-4 text-center fw-bold">
                      <CountUp end={14} duration={3} suffix="K+" />
                      </h2>
                  </div>
                </div>
      </div>

      {/* Business Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">2. Business loans: giving entrepreneurs the tools they need to grow</h2>
          <p>
          It can be hard to start or grow a business, but Akhuwat's business loans make it easier by giving you the money you need to make your ideas come true. You can get interest-free loans from Akhuwat whether you're starting a small business or growing an existing one. This way, you can focus on building your business without worrying about money.
          </p>
          <ul>
            <li>Short-term and long-term options: loans are available for both now and later</li>
            <li>Clear terms: there are no hidden fees or charges that come as a surprise.</li>
            <li>Open to All Industries: Support is available for a wide range of industries, from retail to technology.</li>
          </ul>
        </div>
        
      </div>

      {/* Education Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">3. Education loans: Keeping your academic goals alive</h2>
          <p>
      We at Akhuwat think that education is the key to a better future. Our interest-free student loans take away financial problems that might keep students from studying. Akhuwat helps you stay on track with your educational goals by paying for things like tuition, books, and living costs.
          </p>
          <ul>
            <li>Support in every way: pays for some or all of your school costs</li>
            <li>There is no interest, so you can study without having to worry about paying back the loan.</li>
            <li>Flexible Repayment: You can start paying back your loan after you graduate, which makes it easier for you to get a job.</li>
            <li>Both students and business owners can use Akhuwat to help them grow, achieve, and succeed.</li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3 "
                >
                  <img
                    src={akhuwat14}
                    alt="Money Received"
                    className="img-fluid  wm-100 h-80 mt-5 card-img-top"
                    style={{ objectFit: "cover" }}
                  />
                  {/* <div
                    className="start-0 bg-success text-white p-0"
                    style={{ maxWidth: "100%" }}
                  >
                    <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                    <h2 className="display-4 text-center fw-bold">14K+</h2>
                  </div>*/}
                
      </div>
      </div>
            

      {/* Housing Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">4. Home loans can help you buy the house of your dreams</h2>
          <p>
          Getting your own home is a big step in life, and Akhuwat's interest-free home loans are meant to help you reach your goal. Our housing loan services can help you get the money you need to buy a new home or fix up an old one without charging you interest.
          </p>
          <ul>
            <li>Flexible Use: It can be used for both buying a house and fixing it up.</li>
            <li>Simple Steps: It's easy because it requires little paperwork and gets approved quickly.</li>
            <li>Plans that are easy on the wallet: terms that are flexible to fit your budget</li>
            <li>Akhuwat makes it possible to become a homeowner in a safe, easy, and stress-free way.</li>
          </ul>
        </div>
        
        
      </div>
    </div>
  );
};

export default akhuwatLoanServices;