
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import akhuwat10 from '../Images/Akhuwat10.jpg'
import akhuwat11 from '../Images/Akhuwat11.jpg'
import akhuwat12 from '../Images/Akhuwat12.jpg'


const SuccessStory = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light"style={{fontSize:'22px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? 'col-12' : 'col-lg-9'}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Succes Story: How Akhuwat Loans Can Help You Build a Better Future</h1>
              
              <p className="mb-4">
              In today's busy world, being financially stable is important for reaching long-term goals and dreams. Akhuwat doesn't just give people money; we also give them the tools they need to succeed.

              </p>
              
              <p className="mb-4">
              Many success stories show how Akhuwat Loans have changed people's lives by helping business owners, students, and people who are having trouble with money. We've helped people make their dreams come true one loan at a time by making loan options easy to get, affordable, and clear. 

              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={akhuwat10}
                  alt="Asaan Qarz Loan Logo" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">1. Setting the stage for easy access to money</h2>
              
              <p className="mb-4">
              Akhuwat Loan was started in 2024 to help regular Pakistanis who were having trouble with money. The idea's founder, Dr. Amjad Shah, saw a big hole in the lending market: traditional banks often had strict eligibility requirements, high interest rates, and hard to understand application processes, making it hard for regular people to get the money they needed. Akhuwat Loan was made to fill this gap, making sure that people from all walks of life could get loans that were easy to get and didn't cost a lot of money.
              </p>
              
              <p className="mb-4">
              Akhuwat Loan set out to change the way people in Pakistan thought about borrowing money by making the process easier, lowering interest rates, and speeding up approvals. People quickly started to trust these efforts, and the Akhuwat Loan Scheme quickly became well-known. It helped thousands of people become financially independent and successful.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">2: A Student's Success: Making Dreams Come True</h2>
              
              <p className="mb-4">
              One inspiring story about Akhuwat's effect is that of Hassan Ahmed, a smart student from Lahore who wanted to become an engineer. Even though Hassan did very well in school, he had to face the painful possibility of giving up on his dreams because his family was having money problems.
              </p>
              
              <p className="mb-4">
              One inspiring story about Akhuwat's effect is that of Hassan Ahmed, a smart student from Lahore who wanted to become an engineer. Even though Hassan did very well in school, he had to face the painful possibility of giving up on his dreams because his family was having money problems.
              </p>
              
              <p className="mb-4">
              Hassan went on to graduate from one of the best engineering schools in Pakistan. He now works well as a civil engineer. That he made it through his tough times shows how Akhuwat Loans can turn bad luck into chance and dreams come true.
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={akhuwat11}
                  alt="Asaan Qarz Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">3: Giving small businesses the tools they need—Sarah's Story</h2>
              
              <p className="mb-4">
               In the middle of Karachi, shopkeeper Sarah Khan shared a common problem: she didn't have enough money and couldn't get a traditional bank loan because she didn't have enough collateral or official business paperwork. When her business started to grow, she needed more money to buy more things and fix up her store.
              </p>
              
              <p className="mb-4">
              Sarah first learned about the Akhuwat Loan Scheme from another shop owner. The flexible business loan options immediately caught her attention. Akhuwat, unlike banks, didn't need a lot of paperwork or heavy collateral. She went to the Akhuwat Loan Center and asked for a quick loan. Her request was approved right away.
              </p>
              
              <p className="mb-4">
              With the money, Sarah restocked her store and made some important improvements. In just one year, her income doubled, and people in her area started to know her store by its name. She says that Akhuwat's quick and helpful loan services were a big part of her success.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">4. Helping People in Need Right Away: Ali's Story</h2>
              
              <p className="mb-4">
              Unexpected expenses can happen with money, and if you don't have any savings, they can be too much to handle. This is where Akhuwat's emergency loans come in. They provide quick and dependable help when it's most needed.


              </p>
              
              <p className="mb-4">
              Ali went to Akhuwat for help because he had a sudden medical emergency. The loan was approved almost right away after he sent in his application. He was able to pay for his medical bills with the money and avoid going into deep debt.


              </p>
              
              <p className="mb-4">
              Ali got better physically and financially thanks to Akhuwat's easy repayment terms and quick response. This person's story shows how Akhuwat helps people stay afloat in the most dangerous times, saving their lives.
              </p>
              
              {/* <p className="mb-4">
              Ali was able to handle his position without getting deeper in debt because the terms of his loans were flexible. He is now financially comfortable and in good health, and he is thankful that Asaan Qarz helped him through one of the hardest times in his life.
              </p> */}
    
              <h2 className="fw-bold mt-5 mb-4">5. Getting people to buy their own homes—Farhan's Story</h2>
              
              <p className="mb-4">
              Due to rising property prices, many Pakistanis still can't imagine owning their own home. With Akhuwat's home loans, that dream is becoming a reality.
              </p>
              
              <p className="mb-4">
              Farhan Sheikh, a worker from Rawalpindi from the middle class, had always wanted to own a house for his family. Even though he worked hard to save, the rising costs of homes always kept him from buying one—until he found Akhuwat.
              </p>
              
              <p className="mb-4">
              Akhuwat's housing loan program helped Farhan get the money he needed for the down payment on the house of his dreams. Before long, Farhan and his family were moving into their own house. The process was quick and easy.

              </p>
              <p className="mb-4">
              Akhuwat's dedication to helping families become financially independent and stable over the long term has made it possible for Farhan to enjoy the peace and pride of owning a home.

              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={akhuwat12}
                  alt="Asaan Qarz Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">6: Building up the foundations of agriculture—Ghulam's Story</h2>
              
              <p className="mb-4">
              Akhuwat Loan doesn't just help professionals in cities; it also helps people in rural Pakistan with specialised loans for farming. A lot of farmers have trouble getting the good seeds, fertilisers, and modern tools that would help them get much better crops.

              </p>
              
              <p className="mb-4">
              Multan farmer Ghulam Abbas had been farming for a long time and knew that his old ways were holding him back. He wanted to buy better tools, but traditional banks wouldn't lend him money because they thought farming was too risky.
              </p>
              
              <p className="mb-4">
              He then looked at Akhuwat. Ghulam got the money he needed in less than a week after applying. He planted good crops, bought a tractor, and improved his irrigation system. His crop yield tripled, and his income went through the roof.


              </p>
              <p className="mb-4">
              Ghulam is now not only a successful farmer, but also a community leader who encourages other farmers to look into Akhuwat's loan options for farming in order to grow and become self-sufficient.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">The Effects of the Akhuwat Loan: Changing Lives Across Pakistan</h2>
              
              <p className="mb-4">
Akhuwat Loan has changed the lives of many people, from students and shop owners to emergency patients, homeowners, and farmers. Hassan, Sarah, Ali, Farhan, and Ghulam's stories show how getting fair and flexible financing can open up opportunities and change futures.
              </p>
              
              <p className="mb-4">
              As 2025 comes to a close, the Akhuwat Loan Scheme is still dedicated to its goal of removing financial obstacles and bringing people hope through accessible, clear, and community-driven lending. We give loans because we believe everyone should have the chance to make their life better. Each loan is a step towards a stronger, more self-sufficient Pakistan.


              </p>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3 ">
            <div className="sticky-top pr-3" style={{ top: '0', paddingRight:'22px' }}>
              <Sidebar />
            </div>
          </div>
        )}
        
        
      </div>
    </div>
  );
};

export default SuccessStory;

