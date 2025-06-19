import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../context/appContext';
// import coverImage from '../../Images/coverImage.jpg'
import coverImage from '../../Images/carousalimgs.jpg'
const Crousal = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [uploading, setUploading] = useState(false); // New loading state

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { handleFileUpdate, userData, setUserData, createUser, inputRef, createUserLoader, siteData } = useContext(AppContext);

  // Wrapper for file change to handle loading
  const uploadImage = (fieldName) => async (e) => {
  setUploading(true);
  try {
    await handleFileUpdate(e, fieldName);
  } catch (err) {
    console.error("Upload error:", err);
  } finally {
    setUploading(false);
  }
};

const color = "#108515"

  return (
    <div
      className="container-fluid py-5 d-flex justify-content-center align-items-center flex-wrap mainCarousal"
      style={{
        height: '1300px',
        backgroundImage:
          `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(89, 181, 93, 0.25)',
          zIndex: 1,
        }}
      />

      {/* Content row */}
      <div className="row w-100 position-relative" style={{ zIndex: 2 }}>
        <div className={`col-md-6 ${isMobile ? 'col-12 mb-4' : ''} d-flex align-items-center`}>
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            className={`${isMobile ? 'fw-bold fs-3' : 'display-5 fw-bold px-5'}`}
            style={{ color: 'white' }}
          >
            People in Pakistan think that the Akhuwat Loan Program is one of the best places to get a loan.
          </h1>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: '30px',
              borderRadius: '10px',
              border: '3px dotted #666',
              width: '100%',
              maxWidth: '400px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
          >
            <h4
              style={{
                color: '#666',
                textAlign: 'center',
                marginBottom: '25px',
                fontWeight: 'bold',
              }}
            >
              Quick Loan Apply
            </h4>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                createUser();
              }}
            >
              <div className="mb-3">
                <input
                  value={userData.firstName}
                  onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                  disabled={createUserLoader}
                  type="text"
                  className="form-control"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div className="mb-3">
                <input
                  value={userData.lastName}
                  onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                  disabled={createUserLoader}
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Last Name"
                />
              </div>
              <div className="mb-3">
                <input
                  value={userData.jobTitle}
                  onChange={(e) => setUserData({ ...userData, jobTitle: e.target.value })}
                  disabled={createUserLoader}
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Job Title"
                />
              </div>

              <div className="mb-3">
                <input
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  disabled={createUserLoader}
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="mb-3">
                <input
                  value={userData.phoneNumber}
                  onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                  disabled={createUserLoader}
                  type="tel"
                  className="form-control"
                  placeholder="Phone No"
                />
              </div>
              <div className="mb-3">
                <input
                  value={userData.cnic}
                  onChange={(e) => setUserData({ ...userData, cnic: e.target.value })}
                  disabled={createUserLoader}
                  type="text"
                  className="form-control"
                  placeholder="CNIC No"
                />
              </div>
              <div className="mb-3">
                <input
                  value={userData.address}
                  onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                  disabled={createUserLoader}
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
              <div className="mb-3">
                <input
                  value={userData.loanAmount}
                  onChange={(e) => setUserData({ ...userData, loanAmount: e.target.value })}
                  disabled={createUserLoader}
                  type="text"
                  className="form-control"
                  placeholder="Loan Amount"
                />
              </div>
              {siteData?<p className="py-2 h5">Loan Application Fee: <span style={{fontWeight:"bold"}}>{siteData.loanfee} PKR</span></p>:<div className="d-flex justify-content-center align-items-center py-2">
                  <span className="text-danger" style={{fontWeight:"bold"}}>Loading Loan Fee</span>
                  <div style={{ width: "25px", height: "25px" }} class="spinner-border text-danger  mx-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>}

              <label for="basic-url" class="form-label">Front CNIC</label>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  onChange={uploadImage("frontCnic")}

                  ref={inputRef}
                  disabled={uploading || createUserLoader}
                />
              </div>
              <label for="basic-url" class="form-label">Back CNIC</label>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  onChange={uploadImage("backCnic")}

                  ref={inputRef}
                  disabled={uploading || createUserLoader}
                />

              </div>
              <label for="basic-url" class="form-label">Utility Bill</label>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  onChange={uploadImage("utilityBill")}

                  ref={inputRef}
                  disabled={uploading || createUserLoader}
                />
              
                
              </div>
                <label for="basic-url" class="form-label">  Payment Screenshot</label>
                
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  onChange={uploadImage("paymentScreenshot")}
                  ref={inputRef}
                  disabled={uploading || createUserLoader}
                />
              
              </div>


              {uploading && (
                <div className="mb-3 text-center">
                  <div className="spinner-border text-primary" role="status" />
                  <span className="ms-2">Uploading image...</span>
                </div>
              )}

              {siteData ? <div>
                <div className="d-flex justify-content-between p-2 border-success border border-2 rounded-3 align-items-center my-2">
                  <img src="https://crystalpng.com/wp-content/uploads/2024/10/Easypaisa-logo.png" style={{ width: '15%' }} alt="" />
                  <span style={{fontWeight:"bold",fontSize:'25px'}}>{siteData.easypaisa}</span>
                </div>
                <div className="d-flex justify-content-between p-2  border-danger border border-2 rounded-3 align-items-center my-2">
                  <img src="https://w7.pngwing.com/pngs/72/297/png-transparent-television-jazz-android-cash-text-logo-cash.png" style={{ width: '25%' }} alt="" />
                  <span style={{fontWeight:"bold",fontSize:'25px'}}>{siteData.jazzcash}</span>
                </div>
              </div> :
                <div className="d-flex justify-content-center align-items-center py-2">
                  <span className="text-danger" style={{fontWeight:"bold"}}>Loading Payment Details</span>
                  <div style={{ width: "25px", height: "25px" }} class="spinner-border text-danger  mx-2" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>}

              <button
                type="submit"
                className="btn w-100 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: color,
                  color: 'white',
                  border: 'none',
                  padding: '12px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  borderRadius: '5px',

                }}

                disabled={uploading || createUserLoader}
              >
                Send
                {createUserLoader && <div style={{ width: "25px", height: "25px" }} class="spinner-border text-light  mx-2" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>}
              </button>
              <p className='pt-3'>If you have submitted your loan request, then check your status by <a href="#loan-status">clicking here</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crousal;
