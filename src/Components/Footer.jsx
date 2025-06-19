import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className=" text-white" style={{backgroundColor:'#4e4e4f'}}>
      <div className="container py-5">
        <div className="row">
          {/* Asaan Qarz Foundation Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="mb-4 text-white fw-bold">
              <u>Asaan Qarz Foundation</u>
            </h3>
            <p>
              Dr. Amjad Saqib started the Akhuwat Foundation in 2001. It is the largest interest-free microfinance institution in the world and works to reduce poverty and give people in Pakistan more power. We started out by giving a widow a small loan of Rs. 10,000. Since then, our promise to offer interest-free loans and full support services has changed the lives of millions of people.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="mb-4 text-white fw-bold">
              <u>Quick Links</u>
            </h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Contact Us – Swift Loans</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Success Story: Empowering Lives through Asaan Qarz Loan</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Welcome to Asaan Qarz Loan – Pakistan's Leading Loan Provider</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-md-4 ">
            <h3 className="mb-4 text-white fw-bold">
              <u>Newsletter</u>
            </h3>
            <p>
              Come with us this month as we look at the newest trends in technology, health, and way of life. Learn useful things that will improve your health and help you make smarter, more satisfying decisions in your life!
            </p>
            <div className="input-group mt-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email" 
                aria-label="Email"
              />
              <button 
                className="btn btn-success" 
                type="button"
              >
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-dark py-3 text-white">
  <div className="container d-flex justify-content-between align-items-center flex-wrap">
    <div className="small">
      © Copyright Swift Loan Pakistan. All rights reserved. (APM Id : Webs_Info_875)
    </div>
    <div>
      <Link to="/disclaimer" className="me-3 small text-white text-decoration-none">Disclaimer</Link>
      <Link to="/privacy-policy" className="me-3 small text-white text-decoration-none">Privacy Policy</Link>
      <Link to="/terms-and-conditions" className="small text-white text-decoration-none">Terms and Conditions</Link>
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;