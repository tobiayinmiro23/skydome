import React,{useEffect, useState} from 'react'
import Footer from './Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './LaptopCheckout.css'
import { Link, useParams } from 'react-router-dom'
import Menu from './Menu'
import {allProd} from './laptopProd'
function LaptopCheckout({id,handletotal}) {

    // for information about a product
    const [productInformation,setproductInformation]=useState({})
    const [price, setprice] = useState('')
    const [validProduct, setvalidProduct] = useState(true)
    const productId=Number(useParams().id)
    // for getting customer details
    useEffect(()=>{
      window.scrollTo(0,0)
      let cartCount=document.querySelectorAll('.cart-count')[0]
      let product=allProd.filter(item=>{
        return item.no ===productId
      })
      if(product.length === 0)setvalidProduct(false)
            product.map(item=>{
            setprice(item.productprice.toLocaleString())
            setproductInformation(item)
        })
        let l= localStorage.getItem('skydome')
        let data;
        // incase the user manually deletes locale storage 
        if(l?.length){
          data= JSON.parse(localStorage.getItem('skydome')) 
        }else{
          localStorage.setItem('skydome',JSON.stringify([]))
        }
        cartCount.innerHTML=data?.length || 0

    },[])
   
     
     let memory = new Set
     const handleButton=(item)=>{
      // console.log(item)
        let cartCount=document.querySelectorAll('.cart-count')[0]
          let data= JSON.parse(localStorage.getItem('skydome'))
          let cart=[]
          data?.map(item=>{
            memory.add(item)
          })
          memory.add(item)
  
          memory.forEach(item=>{
            cart.push(item)
          })
         cartCount.innerHTML=cart?.length || 0
          localStorage.setItem('skydome',JSON.stringify(cart))
      }
      const handleMenu=()=>{
        var productCategory=document.querySelectorAll('.products-container')[0]
        productCategory.classList.toggle('block')
        
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='laptopCheckout'>
         <nav>
       <div className="navigation">
          <div onClick={handleMenu} className="menu-container">
            <img src="/E-commerce pictures/icons8-menu-24.png" alt="" />
          </div>
          <Link className='Link' to='/'>
            <div className="company-name-container">
              <div className="company-logo-container">
                <img
                  src="/E-commerce pictures/bag (1).png"
                  alt=""
                />
              </div>
              <div className="company-name">
                <h1> SkyDome</h1>
              </div>
            </div>
          </Link>
            <div className="cart-container" title="my cart" >
          <Link to="/cart">
              <div>
                  <div className="cart-img-container">
                    <img src="/E-commerce pictures/shopping-cart.png" alt="" />
                  </div>
                  <div title="cart amount" className="cart-count"></div>
              </div>
          </Link>
            </div>
        </div>
       </nav>
        <Menu/>
       
{/* <!-- product image --> */}
        
    <div>
      {
          validProduct ?
          <div>
            <div className="center">
    <div className="product-img-container" style={{background:'white'}}>
        <div className="checkoutslider">
            <Slider {...settings}>
            <div>
                <img src={productInformation.productimage1} alt="img" className="img1"/>
            </div>
            <div>
                <img src={productInformation.productimage2} alt="img" className="img2"/>
            </div>
            </Slider>
        </div>
    </div>
    {/* <!-- product info --> */}
    <div className="btnWrapper">
        <button onClick={()=>handleButton(productInformation.no)}>Add to cart</button>
        <Link to="/checkout">
            <button onClick={()=>handletotal(productInformation.productprice)}>Checkout</button>
        </Link>
        
    </div>
    <div className="productwrapper">
        <div className="product-info jk" id='jk'>
            <div className="product-name-container info white">
                    <h3>product info:</h3>
                    <h3 className="productprice  generalname">{productInformation.productinfo}</h3>
            </div>
            <div className="product-name-container info grey">
                <h3>product name:</h3>
                <h3 className="productname  generalname">{productInformation.productname}</h3>
            </div>
            <div className="product-name-container info white">
                <h3>product price:</h3>
                <div className="price">
                    {/* <!-- addition in span className --> */}
                    <span className="naira">&#8358;</span>
                    <h3 className="productprice  generalname">{price}</h3>
                </div>
            </div>
            <div className="product-name-container info grey">
                <h3>core type :</h3>
                <h3 className="productcore  generalname">{productInformation.processortype}</h3>
            </div>
            <div className="product-name-container info white">
                <h3>core name:</h3>
                <h3 className="corename  generalname">{productInformation.processorname}</h3>
            </div>
            <div className="product-name-container info grey">
                <h3>brand:</h3>
                <h3 className="productbrand  generalname">{productInformation.brand}</h3>
            </div>
            <div className="product-name-container info white">
                <h3>batteryinfo:</h3>
                <h3 className="productbattery  generalname">{productInformation.batteryinfo}</h3>
            </div>
            <div className="product-name-container info grey">
                <h3>ram:</h3>
                <h3 className="productram  generalname">{productInformation.ram}</h3>
            </div>
            <div className="product-name-container info white">
                <h3>rom:</h3>
                <h3 className="productrom  generalname">{productInformation.rom}</h3>
            </div>
            <div className="product-name-container info grey">
                <h3>operating system:</h3>
                <h3 className="productos  generalname">{productInformation.windowversion}</h3>
            </div>
            <div className="product-name-container info white">
                <h3>color:</h3>
                <h3 className="productcolor  generalname">{productInformation.color}</h3>
            </div>
            <div className="product-name-container info grey">
                <h3>touchscreen:</h3>
                <h3 className="productscreen  generalname">{productInformation.touchscreen}</h3>
            </div>
            <div className="product-name-container info white">
                <h3>weight:</h3>
                <h3 className="productweight  generalname">{productInformation.netweight}</h3>
            </div>
            <div className="product-name-container info grey">
                <h3>screen inch:</h3>
                <h3 className="productinch  generalname">{productInformation.inch}</h3>
            </div>
            <div className="product-name-container info white">
                <h3>gaming graphics:</h3>
                <h3 className="gaminggraphics  generalname">{productInformation.gaminggraphics}</h3>
            </div>
        </div>
        </div>
    </div>
    <Footer/>
          </div>
        :
        <div className='invalidProduct'><h1>sorry,we could not find the product you were looking for</h1></div>
      
      }
      </div>
    </div>
  )
}

export default LaptopCheckout
