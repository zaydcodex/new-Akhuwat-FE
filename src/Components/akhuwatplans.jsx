import React from 'react'

const AkhuwatPlans = () => {
    const color = "#108515"
    return (
        <div className='container' >
            <h1 className='text-center py-5'><b>Akhuwat Loan Plans</b></h1>
            <div className="row">
                <div className="row">
                    {[
                        { name: "Plan 1", amount: "50,000", period: "1 Year", installment: "4,167" },
                        { name: "Plan 2", amount: "100,000", period: "1 Year", installment: "8,335" },
                        { name: "Plan 3", amount: "200,000", period: "2 Years", installment: "8,335" },
                        { name: "Plan 4", amount: "500,000", period: "5 Years", installment: "8,335" },
                        { name: "Plan 5", amount: "1,000,000", period: "10 Years", installment: "8,335" },
                        { name: "Plan 6", amount: "2,000,000", period: "10 Years", installment: "16,670" },
                        { name: "Plan 7", amount: "3,000,000", period: "10 Years", installment: "25,000" },
                        { name: "Plan 8", amount: "5,000,000", period: "15 Years", installment: "27,780" }
                    ].map((plan, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <div data-aos="zoom-in" data-aos-duration="1000"  className="card">
                                <div className="card-header" style={{ backgroundColor: color }}>
                                    <h1 className="text-light text-center">{plan.name}</h1>
                                </div>
                                <div className="card-body text-center">
                                    <h2 className="card-title text-center" style={{ fontWeight: "bold", color: color }}>
                                        Rs {plan.amount}
                                    </h2>
                                    <h5>Installment</h5>
                                    <h3>Rs {plan.installment}/month</h3>
                                </div>
                                <div className="card-footer text-center">
                                    <h5>Repayment Period</h5>
                                    <h3>{plan.period}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <h1 className='text-center py-3'><b>Note</b></h1>
            <ul className="list-group pb-4">
                <li className="py-3 list-group-item">
                    <p className="h4 fw-normal">
                        For loans less than 5,00,000 the registration fee is Rs 4,400 which you need to pay first.
                    </p>
                </li>
                <li className="py-3 list-group-item">
                    <p className="h4 fw-normal">
                        For loans from 6,00,000 to 50,00,000 the registration fee is Rs 5,750 which you need to pay first.
                    </p>
                </li>
                <li className="py-3 list-group-item">
                    <p className="h4 fw-normal">
                        After depositing the registration fee, your loan will be approved by Akhuwat Foundation within 2 hours.
                    </p>
                </li>
                <li className="py-3 list-group-item">
                    <p className="h4 fw-normal">
                        The registration fee is refundable.
                    </p>
                </li>
            </ul>



        </div>
    )
}

export default AkhuwatPlans