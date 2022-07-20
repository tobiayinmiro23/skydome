import React from 'react'
import './Footer.css'
function Footer({searchState}) {
  return (
    <div>
      <footer className={searchState && 'bottom'}>
        <h2 className="li">Links</h2>
        <div className="links">
            <p>Terms and Conditions</p>
            <p>policy</p>
            <p>About us</p>
            <p>help center</p>
            <p>how to shop on sky dome</p>
            <p>report a product</p>
            <p>contact us</p>
            <p>delivery plan</p>
            <p>skydome international</p>
            <p>skydomeinternational@gmail.com</p>
        </div>
        <div className="links2">
          <p className="cpy"> &copy;Ayinmiro tobi <span className="span">&#124; all rights reserved</span></p>
          <div className="sm-links">
            <img className="tgram" src="/productimage/instagram (4).png" alt=""/>
            <img className="tgram" src="/productimage/twitter (3).png" alt=""/>
            <img className="tgram" src="/productimage/facebook (2).png" alt=""/>
            <img className="tgram" src="/E-commerce pictures/youtube.png" alt=""/>
          </div>
          <div className="app-container">
            <h2>Download the skydome app</h2>
            <p>Get exclusive access</p>
            <div className="app-img-container">
              <div className="app1 ">
                <div className="app-img">
                  <img src="/E-commerce pictures/apple-logo (2).png" alt=""/>
                </div>
                <div className="text-container">
                  <p>Get it on </p>
                  <h2 className="store" >App Store</h2>
                </div>
              </div>
              <div className="app1">
                <div className="app-img">
                  <img src="/E-commerce pictures/playstore.png" alt=""/>
                </div>
                <div className="text-container">
                  <p>Get it on</p>
                  <h2>Play Store</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer