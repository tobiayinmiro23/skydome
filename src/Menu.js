import React,{useEffect} from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
function Menu() {
    const handleMenu=()=>{
        var productCategory=document.querySelectorAll('.products-container')[0]
        productCategory.classList.toggle('block')
        
      }
  return (
    <div>
      <div className="products-container">
            <Link className='Link' to='/'>
              <div className="phone-container container">
                <div className="phone-img container-img">
                  <img src="/E-commerce pictures/home.png" alt="" />
                </div>
                <p>home</p>
            </div>
            </Link>
          <hr />
          <Link className='Link' to='/phone'>
          <div onClick={handleMenu}  className="phone-container container">
              <div className="phone-img container-img">
                <img src="/E-commerce pictures/mobile-phone.png" alt="" />
              </div>
              <p> phones</p>
            </div>
          </Link>
          <hr />
            <Link className='Link' to='/laptop'>
            <div onClick={handleMenu} className="laptop-container container">
              <div className="laptop-img container-img">
                <img src="/E-commerce pictures/notebook-computer.png" alt="" />
              </div>
              <p> laptop</p>
            </div>
            </Link>
          <hr />
            <Link  className='Link' to='/shoes'>
            <div onClick={handleMenu} className="shoe-container container">
              <div className="shoe-img container-img">
                <img src="/E-commerce pictures/sneakers.png" alt="" />
              </div>
              <p> shoes</p>
            </div>
            </Link>
          <hr />
            <Link className='Link' to='/cloth'>
            <div onClick={handleMenu} className="clothes-container container">
              <div className="clothes-img container-img">
                <img src="/E-commerce pictures/tshirt.png" alt="" />
              </div>
              <p>clothes</p>
            </div>
            </Link>
          <hr />
            <Link className='Link' to='/unavailable'>
            <div className="wrist-watch-container container">
              <div className="wrist-watch-img container-img">
                <img src="/E-commerce pictures/watch.png" alt="" />
              </div>
              <p>wristwatch</p>
            </div>
            </Link>
          <hr />
           <Link to="/unavailable">
           <div  className="laptop-accessories-container container">
              <div className="laptop-accessories-img container-img">
                <img src="/E-commerce pictures/circuit.png" alt="" />
              </div>
              <p>laptop accessories</p>
            </div>
           </Link>
          <hr />
            <Link to="/unavailable">
            <div className="electroincs-container container">
              <div className="electronics-img container-img">
                <img src="/E-commerce pictures/electronics.png" alt="" />
              </div>
              <p>Electronics</p>
            </div>
            </Link>
          <hr />
           <Link to="/unavailable">
           <div className="beauty-products-container container">
              <div className="beauty-products-img container-img">
                <img src="/E-commerce pictures/cosmetics.png" alt="" />
              </div>
              <p>beauty-products</p>
            </div>
           </Link>
          <hr />
          <Link to="/unavailable">
          <div className="furniture-container container">
              <div className="furniture-img container-img">
                <img src="/E-commerce pictures/furnitures.png" alt="" />
              </div>
              <p>furniture</p>
            </div>
          </Link>
          <hr />
          <Link to="/unavailable">
            <div className="settings-container container">
              <div className="settings-img container-img">
                <img src="/E-commerce pictures/settings.png" alt="" />
              </div>
              <p>settings</p>
            </div>
          </Link>
          <hr />
            <Link to="/unavailable">
                <div className="help-container container">
                  <div className="help-img container-img">
                    <img src="/E-commerce pictures/information.png" alt="" />
                  </div>
                  <p>help</p>
                </div>
            </Link>
            <hr />
            <Link className='Link' to='/cart'>
            <div className="user-container container">
              <div className="user-img container-img">
                <img src="/E-commerce pictures/shopping-cart (1).png" alt="" />
              </div>
              <p>my cart</p>
            </div>
            </Link>
          <hr />
          <Link className='Link' to='/signup'>
          <div className="sign-up-container container">
              <button className="sign-up"> sign up</button>
          </div>
          </Link>
          <hr />
          <Link className='Link' to='/login'>
          <div className="sign-in-container container">
              <button className="sign-up sibtn" >log in</button>
          </div>
          </Link>
          <hr />
        </div>
    </div>
  )
}

export default Menu