import React from 'react';
import CountUp from 'react-countup';
import myImg from '../Images/Loan Scheme.jpg'
import Akhuwat15 from '../Images/Akhuwat15.jpg'
import Akhuwat16 from '../Images/Akhuwat16.jpg'


const AkhuwatBusinessLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1100px", margin: "0 auto", fontSize: '22px' }}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Business Loan: Giving Pakistani entrepreneurs the tools they need to succeed</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        The Akhuwat Business Loan is meant to help Pakistani business owners, both new and old, get the money they need to start or grow their businesses. Due to strict rules and high interest rates, many people can't use traditional banking services. Akhuwat solves this problem by giving entrepreneurs interest-free loans that help them become financially independent and boost the economy.
        </p>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          
Akhuwat can help you make your business dreams come true, whether you want to open a store, start a service business, or invest in small-scale production.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Key Advantages of Akhuwat Business Loans Interest-Free Help: </h2>
          <p>You can get loans without having to worry about interest, which lets you put profits back into your business.</p>
          <ul>
            <li><strong>No Collateral Needed:</strong> You can get money without putting your own property or assets at risk.</li>
            <li><strong>Flexible Repayment Plans:</strong> The terms of your repayment are based on the cash flow of your business, which makes it easier to stay financially stable.</li>
            <li><strong>Support for Small Businesses:</strong> Akhuwat focusses on helping micro and small businesses grow, which creates jobs and improves communities.</li>
            <li><strong>Promoting Financial:</strong> Inclusive Access to Finance: Giving people in underserved areas more chances to participate in and benefit from the economy.</li>
          </ul>
          <p>With Akhuwat's business loan program, people can start their own businesses without worrying about money.</p>
        </div>
        <div className="col-lg-5 col-md-6 ">
          <img
            src={Akhuwat15}
            alt="Business Loan Support"
            className="img-fluid wm-105 h-100 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">SUPPORTING ENTREPRENEURS</p>
            <h2 className="display-4 text-center fw-bold">
  <CountUp end={14} duration={3} suffix="K+" />
</h2>
          </div>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Steps to Apply for an Akhuwat Business Loan</h2>
          <p>
          Getting a business loan through Akhuwat is quick and straightforward. Follow these easy steps:
          </p>
          <ul>
            <li><strong>Confirm Your Eligibility</strong> To qualify, you must be a Pakistani citizen, belong to a low-income household, and either have a solid business idea or be operating a small existing business.</li>
            <li><strong>Please send in your application:</strong> Please send in your application </li>
            <li><strong>Loan Approval & Disbursement</strong> Once your application is reviewed and approved, the loan amount is disbursed promptly to help you get started.</li>
            <li><strong>Repayment Process:</strong> Repay the loan in easy installments based on the repayment plan set at the time of approval.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6  p-3">
          <img
            src={Akhuwat16}
            alt="Entrepreneur Support"
            className="img-fluid wm-100 h-80 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">BUSINESSES SUPPORTED</p>
            <h2 className="display-4 text-center fw-bold">
  <CountUp end={8000} duration={3} suffix="+" />
</h2>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">Why Akhuwat business loans are the best option</h2>
          <p>
            Akhuwat Business Loans are designed to help business owners at every stage, from starting up to planning to grow. People can get these loans with no interest and no collateral, which makes it easier for them to start their own business and become financially free.
          </p>
          <p>
            By giving small businesses more power, Akhuwat helps make communities stronger by creating jobs, boosting the economy, and making it easier for families all over Pakistan to make a living.
          </p>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">Join the mission to find the Akhuwat</h2>
          <p>
            If you want to grow your business, Akhuwat can help you receive your dreams. You can apply online or at the Akhuwat branch closest to you to take the first step towards becoming a successful business owner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatBusinessLoan;
