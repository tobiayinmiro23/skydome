import React from 'react'
import './nav.css'
function Navigation({page,cart,cartCount,handleAdvert,cartGreaterThan100}) {
  // for the menu button
  const handleMenu=()=>{
    var productCategory=document.querySelectorAll('.products-container')[0]
    productCategory.classList.toggle('block')
    
  }
  return (
    <div>
        <nav >
        <div className="navigation">
          <div onClick={handleMenu} className="menu-container">
            <img src="/E-commerce pictures/icons8-menu-24.png" alt="" />
          </div>
          <div className="company-name-container">
            <div className="company-logo-container">
              <img
                src="/E-commerce pictures/bag (1).png"
                alt=""
              />
            </div>
            <div className="company-name">
              <h1>
                SkyDome 
                
              </h1>
            </div>
          </div>
          <div className="cart-container" title="my cart"  onClick={()=>{
                page('cart')
              }}>
            {
              cartGreaterThan100 ?
            <div >
              <div className="cart-img-container">
                <img src="/E-commerce pictures/shopping-cart.png" alt="" />
              </div>
              <div title="cart amount" className={cart ? "large-cart-count" : "none"}   >{cartCount}</div>
            </div>
            :
            <div>
                <div className="cart-img-container">
                  <img src="/E-commerce pictures/shopping-cart.png" alt="" />
                </div>
                <div title="cart amount" className={cart ? "cart-count" : "none"}   >{cartCount}</div>
            </div>
            }
          </div>
        </div>
      </nav>
      <div className="products-container">
            <div onClick={()=>{
              page('home')
              handleMenu()
              handleAdvert(false)
            }} className="phone-container container">
              <div className="phone-img container-img">
                <img src="/E-commerce pictures/home.png" alt="" />
              </div>
              <p>home</p>
            </div>
          <hr />
            <div onClick={()=>{
              page('phone')
              handleMenu()
            handleAdvert(false)}
          } className="phone-container container">
              <div className="phone-img container-img">
                <img src="/E-commerce pictures/mobile-phone.png" alt="" />
              </div>
              <p> phones</p>
            </div>
          <hr />
            <div onClick={()=>{
              page('laptop')
              handleMenu()
              handleAdvert(false)
            }}  className="laptop-container container">
              <div className="laptop-img container-img">
                <img src="/E-commerce pictures/notebook-computer.png" alt="" />
              </div>
              <p> laptop</p>
            </div>
          <hr />
            <div onClick={()=>{
              page('shoes')
              handleMenu()
              handleAdvert(false)
            }}  className="shoe-container container">
              <div className="shoe-img container-img">
                <img src="/E-commerce pictures/sneakers.png" alt="" />
              </div>
              <p> shoes</p>
            </div>
          <hr />
            <div onClick={()=>{page('cloth')
                handleMenu()
                handleAdvert(false)}
                } className="clothes-container container">
              <div className="clothes-img container-img">
                <img src="/E-commerce pictures/tshirt.png" alt="" />
              </div>
              <p>clothes</p>
            </div>
          <hr />
            <div onClick={()=>{
              page('unavailable')
              handleMenu()
              handleAdvert(false)
            }}  className="wrist-watch-container container">
              <div className="wrist-watch-img container-img">
                <img src="/E-commerce pictures/watch.png" alt="" />
              </div>
              <p>wristwatch</p>
            </div>
          <hr />
            <div onClick={()=>{page('unavailable')
            handleMenu()
            handleAdvert(false)
          }} className="laptop-accessories-container container">
              <div className="laptop-accessories-img container-img">
                <img src="/E-commerce pictures/circuit.png" alt="" />
              </div>
              <p>laptop accessories</p>
            </div>
          <hr />
            <div onClick={()=>{page('unavailable')
            handleMenu()
            handleAdvert(false)
          }} className="electroincs-container container">
              <div className="electronics-img container-img">
                <img src="/E-commerce pictures/electronics.png" alt="" />
              </div>
              <p>Electronics</p>
            </div>
          <hr />
            <div onClick={()=>{page('unavailable')
            handleMenu()
            handleAdvert(false)
          }} className="beauty-products-container container">
              <div className="beauty-products-img container-img">
                <img src="/E-commerce pictures/cosmetics.png" alt="" />
              </div>
              <p>beauty-products</p>
            </div>
          <hr />

            <div onClick={()=>{page('unavailable')
            handleMenu()
            handleAdvert(false)
          }} className="furniture-container container">
              <div className="furniture-img container-img">
                <img src="/E-commerce pictures/furnitures.png" alt="" />
              </div>
              <p>furniture</p>
            </div>
          <hr />

            <div onClick={()=>{page('unavailable')
            handleMenu()
            handleAdvert(false)
          }} className="settings-container container">
              <div className="settings-img container-img">
                <img src="/E-commerce pictures/settings.png" alt="" />
              </div>
              <p>settings</p>
            </div>
          <hr />
            <div onClick={()=>{page('unavailable')
            handleMenu()
            handleAdvert(false)
          }} className="help-container container">
              <div className="help-img container-img">
                <img src="/E-commerce pictures/information.png" alt="" />
              </div>
              <p>help</p>
           </div>
          <hr />
            <div onClick={()=>{page('cart')
            handleMenu()
            handleAdvert(false)
          }} className="user-container container">
              <div className="user-img container-img">
                <img src="/E-commerce pictures/shopping-cart (1).png" alt="" />
              </div>
              <p>my cart</p>
            </div>
          <hr />
          <div onClick={()=>{
            page('signup')
            handleMenu()
            handleAdvert(false)
          }} className="sign-up-container container">
              <button className="sign-up"> sign up</button>
          </div>
          <hr />
          <div onClick={()=>{
            page('login')
            handleMenu()
            handleAdvert(false)
          }} className="sign-in-container container">
              <button className="sign-up sibtn" >log in</button>
          </div>
          <hr />
        </div>
    </div>
  )
}

export default Navigation