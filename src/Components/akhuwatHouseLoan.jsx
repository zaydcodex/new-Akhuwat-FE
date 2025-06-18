
import React from 'react';
import CountUp from 'react-countup';
import FirstOne from '../Images/House Loan.jpg';
import SecOne from '../Images/For house loan.jpg';
import Akhuwat17 from '../Images/Akhuwat17.jpg'
import Akhuwat18 from '../Images/Akhuwat18.jpg'



const akhuwatHouseLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto", fontSize:'22px' }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Housing Loan: Making Homeownership Possible</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        Many people want to own their own home, but for many, especially those from low-income families, this goal can seem out of reach because of money issues. Akhuwat's interest-free housing loan program is a great way for families in Pakistan to buy or build a home without having to pay the high costs of traditional loans.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Advantages of Akhuwat's interest-free home loans: 1. Really interest-free:</h2>
          <p>
          Traditional home loans have high interest rates, but Akhuwat offers financing with no interest. This makes monthly payments much easier for families who aren't making a lot of money
          </p>
          <ul>
            <li> No Need for Collateral: Many banks need assets or property as security for home loans. That barrier is broken by Akhuwat, which offers loans without collateral, making them easier for everyone to get.</li>
            <li>Repayment Plans That Are Easy to Change: People who borrow money can pick repayment plans that work with their income and situation. This customised approach makes sure that paying back the loan is still easy and doable.</li>
            <li>Encouraging Financial Inclusion: Akhuwat gives people who might not be able to use traditional banking systems the tools they need to become homeowners by making interest-free home loans available to everyone.</li>
            <li>As its main goal, the Akhuwat housing loan isn't just about buying property; it's also about making life better by giving families safe, secure, and respectable places to live and grow.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src={Akhuwat17}
            alt="Money Received"
            className="img-fluid wm-100 h-100 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">SUPPORTING FAMILIES</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={14} duration={3} suffix="K+" /></h2>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Who Can Hurry Up?</h2>
          <p className=''>
            It is possible for all Pakistani citizens who really need help paying for housing to get an Akhuwat Housing Loan. This interest-free loan is meant to help you along your way, whether you want to build a house, buy your first home, or fix up the one you already have.
          </p>
          <ul>
            <li>Family and individuals with low incomes who can't get loans through normal channels are given priority.</li>
            <li>Basic documents are needed from applicants, such as a valid Computerised National Identity Card (CNIC) and proof of where they live.</li>
            <li>Recommendations and endorsements from people in the community can help your application and show that you are trustworthy and socially responsible.</li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3">
          <img
            src={Akhuwat18}
            alt="Housing Help"
            className="img-fluid wm-100 h-80 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">HOMES BUILT</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={8000} duration={3} suffix="+" /></h2>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-12">
          <h2 className="fw-bold mb-3 text-center">What You Need to Do to Get an Akhuwat Home Loan</h2>
          <ul>
            <li><strong>Make sure you are eligible:</strong> You have to be a citizen of Pakistan and really need help with your housing, whether you want to build, buy, or fix up a home.</li>
            <li><strong>Get the documents you need:</strong> Get the paperwork ready, which includes:

A valid CNIC

Proof of money coming in

A detailed outline or sketch of your home improvement project</li>
            <li><strong>Fill out the application:</strong> Bring your application and the necessary documents to the Akhuwat branch that is closest to you. The staff will help you with the process.</li>
            <li><strong>Review and approval of the application:</strong> Your application will be carefully looked over. You'll get a message soon if your request is approved.</li>
            <li><strong>Payment of the loan:</strong> Once you are approved, the loan money will be sent to you according to the terms you agreed to, so you can start working on your home right away.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default akhuwatHouseLoan;

