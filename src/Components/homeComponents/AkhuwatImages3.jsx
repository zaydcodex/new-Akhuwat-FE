import React from 'react';
import akhuwat5 from '../../Images/Akhuwat5.jpg'
import akhuwat6 from '../../Images/Akhuwat6.jpg'

const AkhuwatImages3 = () => {
  return (
    <div className="container-fluid bg-light py-5">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-6 py-3 mb-4 mb-md-0 d-flex justify-content-center">
          <img 
            src={akhuwat5}
            alt="Hasina Bibi - Stitching Business" 
            className="card-img-top rounded "
          
          />
        </div>
  
        <div className="col-md-6 py-3 d-flex justify-content-center">
          <img 
            src={akhuwat6}
            alt="Farzana Bibi - Beauty Parlour" 
            className="card-img-top rounded "
          
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default AkhuwatImages3;