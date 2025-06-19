import React from 'react'

const Cards = () => {
  const color = "#108515"
  return (

    <div className='' style={{ backgroundColor: '#f7f8f9' }}>
      <div className='container text-center' >
      {/* <p className='w-70% text-center'>Akhuwat LOAN</p> */}
      <p className='w-70% text-center' style={{paddingTop:'26px'}}>Akhuwat LOAN</p>
      
      <h1 ><b>Our Services</b></h1>
        <h1><b>Do something now to start making tomorrow better.</b></h1>
        <div className="row mt-5 d-flex justify-content-center flex-wrap">
          <div className="col-md-4 col-12 mt-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-money" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Personal Loan in Akhuwat</h5>
                <p className="card-text">You can get a personal loan from the Akhuwat Foundation for up to Rs. 2.5 million. The loan amount is based on your job status, income, credit score, and the amount of debt you have compared to your income. It's open to people between the ages of 24 and 60. The official website of the Akhuwat Foundation makes it easy to check on the status of your loan application. It gives you real-time updates and makes the whole process clear. </p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-suitcase" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Loan for a Business in Akhuwat</h5>
                <p className="card-text">Akhuwat makes it easy to get a business loan, and you can do it all online from your office. These loans are designed to help with short-term cash flow needs, and decisions on approval are usually made within a few hours. The process requires very little paperwork, so you can focus on growing your business without having to wait around. </p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-eye" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Akhuwat Home Loan</h5>
                <p className="card-text">In Pakistan, the Akhuwat Foundation helps people buy, build, or fix up their homes by giving them home loans. The Akhuwat Housing Loan is designed for people who need money quickly. The application process is quick and easy, so you can get the money quickly. People in Pakistan who want an easy and reliable way to live should definitely consider this option.</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4 mb-4">
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-suitcase" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Loan for an Akhuwat Wedding</h5>
                <p className="card-text">You can get a wedding loan from the Akhuwat Foundation to help pay for all of your wedding costs and make sure everything goes smoothly. You can borrow between PKR 500,000 and PKR 6,000,000, and you have 10 to 36 months to pay it back. These loans don't need collateral and are given out quickly—often within 24 hours for current customers—so it's easy and stress-free to stick to your wedding budget. </p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4 mb-4" >
            <div data-aos="zoom-in" data-aos-duration="1000" className="h-100 card border-0 rounded-0">
              <div className="card-body text-start m-4">
                <i class="fa pb-3 fa-refresh" aria-hidden="true" style={{ fontSize: "40px", color: color }}></i>
                <h5 className="card-title">Akhuwat Car Loan
                </h5>
                <p className="card-text">The Akhuwat Foundation offers auto loans with interest rates as low as 1% per year, and you can get financing for up to 100% of the car's "on-road" price. This makes it easier than ever to get your dream car. You can choose a loan term that works for your budget if the repayment terms are flexible. The simple application process makes things easy and convenient, and fast approvals and payments are common for existing customers—sometimes within just 48 hours. You can feel good about hitting the road with Akhuwat's reliable help.
</p>
                <a href="/" className="btn btn-primary border-0 rounded-0" style={{ backgroundColor: color }}>Contact US</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
