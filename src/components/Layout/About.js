import React from 'react';

import './Custom.css';

const About = () => {
    return(
        <div className="container">
            <div className="row"> 
              <div className="w-100 col-lg-12">
                  <h2 className="text-center">What we do at Coconut Master</h2>
                  <div className="content row">
                    <div className="col-md-4 side"></div>
                    <div className="col-md-8 other text-center">
                      <h2>Coconut First. Schemes Later</h2>
                      <p>we offer qualtiy and fresh cocnut fruit</p>
                      <h3>Enjoy a fresh coconut water, it is coconut o'clock</h3><hr></hr>
                      <h4>Kindly check our social media accounts or you call call us on
                         0542570123 - Whatsapp( 0266215049 )
                      </h4>
                      <a href="https://web.facebook.com/abigail.larbi" target="_blank" rel="noopener noreferrer">Facebook</a>
                      <a href="https://www.instagram.com/kenteport/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        
    );
}

export default About;