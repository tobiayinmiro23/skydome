import React from 'react'
import './Advertisement.css'
import {Link} from 'react-router-dom'
function Advertisement({handleAdvert}) {

  return (
    <div>
        <div  className="advertisement">
          <div className="adds-container">
                <div className="ad-button-container">
                    <div className="ad-btn">
                      <p className="adtext"> ADS</p>
                    </div>
                    <div onClick={()=>handleAdvert(true)}} className="cancel-btn">
                        <img src="/E-commerce pictures/close (2).png" alt="img" />
                    </div>
                </div>
            <div className="ad-header">
                <h1>
                Get more with sky dome up to 50% off sign up to get exclusive access
                </h1>
                <div className="sub-btn-container">
                  <Link to='signup'><button className="add-btn">sign up</button></Link>
                </div>
            </div>
          </div>
          <div className="ad-wrapper">
            <div className="ad">
              <div className="ad-img ad1">
                <img src="/skydome images/paolo-giubilato-ZwKCWVFdrcs-unsplash.jpg" alt="img" />
              </div>
              <h3>&#8358;294,000</h3>
              <del><p>&#8358;555,000</p> </del> 
            </div>
            <div className="ad">
              <div className="ad-img ad2">
                <img
                  src="/skydome images/c12-laptop-img2.jpeg"
                  alt="img"
                />
              </div>
              <h3>&#8358;194,000</h3>
              <del><p>&#8358;345,000</p></del>
            </div>
            <div className="ad">
              <div className="ad-img ad2">
                <img
                  src="/skydome images/c3-shoe-img.png"
                  alt="img"
                />
              </div>
              <h3>&#8358;10,000</h3>
              <del><p>&#8358;25,000</p></del>
            </div>
            <div className="ad">
              <div className="ad-img ad2">
                <img
                  src="/skydome images/c14-shoe-img.png"
                  alt="img"
                />
              </div>
              <h3>&#8358;11,000</h3>
              <del><p>&#8358;27,000</p></del>
            </div>
            <div className="ad">
              <div className="ad-img ad2">
                <img
                  src="/skydome images/c11-shoe-img.jpeg"
                  alt="img"
                />
              </div>
              <h3>&#8358;20,000</h3>
              <del><p>&#8358;29,000</p></del>
            </div>
            <div className="ad">
              <div className="ad-img ad2">
                <img
                  src="/skydome images/c20-earbuds-img.jpeg"
                  alt="img"
                />
              </div>
              <h3>&#8358;4,000</h3>
              <del><p>&#8358;8,000</p></del>
            </div>
            <div className="ad">
              <div className="ad-img ad2">
                <img
                  src="/skydome images/c21-gascooker-img.png"
                  alt="img"
                />
              </div>
              <h3>&#8358;41,000</h3>
              <del><p>&#8358;95,000</p></del>
            </div>
            <div className="ad">
              <div className="ad-img ad2">
                <img
                  src="/skydome images/c24-mattress-img.png"
                  alt="img"
                />
              </div>
              <h3>&#8358;40,000</h3>
              <del><p>&#8358;92,000</p></del>
            </div>
            <div className="ad">
              <div className="ad-img lastad ad2">
                <img
                  src="/skydome images/c24-shoe-img.png"
                  alt="img"
                />
              </div>
              <div className="lastad">
                <h3>&#8358;11,000</h3>
                <del><p>&#8358;50,000</p></del>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Advertisement
