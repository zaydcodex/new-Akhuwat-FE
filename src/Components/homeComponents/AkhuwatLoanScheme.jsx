import React from 'react';
import akhuwat9 from '../../Images/Akhuwat9.jpg'

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">Credit Scheme for the Akhuwat Foundation</h1>
            
            <p className="mb-4 fw-bold mt-1">
            A credit system that is easy to use and open to everyone has been created by the Akhuwat Foundation. The application process is quick and easy, and only a few pieces of paper are needed. Akhuwat is well-known in Pakistan for its compassionate and welcoming approach and for offering loans with low interest rates.
            </p>
            
            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
              If you get stuck or need help at any point in the process, all you have to do is call the Akhuwat head office. They will be happy to help you right away. 
              </p>
            </div>
          </div>
          
          <div className="col-lg-7 mt-5">
            <img 
              src={akhuwat9}
              alt="Asaan Qarz Loan Scheme Details in Urdu" 
              className="card-img-top "
              // style={{height:"500px"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default AkhuwatLoanScheme;