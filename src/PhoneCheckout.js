import React,{useState,useEffect} from 'react'
import Footer from './Footer'
import {phoneProd} from './phoneProd'
function PhoneCheckout({id,page}) {
     // for information about a product
     const [productInformation,setproductInformation]=useState({})
    const [price, setprice] = useState('')
    useEffect(()=>{
        let product=phoneProd.filter(item=>{
            return item.no ===id
        })
        product.map(item=>{
            setprice(item.productprice.toLocaleString())
            setproductInformation(item)
        })
        },[])

  return (
    <div className='PhoneCheckout'>
    <div className='laptopCheckout'>
    
{/* <!-- product image --> */}
<div className="center">
    <div className="product-img-container" style={{background:'white'}}>
        <img src={productInformation.productimage1} alt="image" className="img1"/>
        <img src={productInformation.productimage2} alt="image" className="img2"/>
    </div>
    {/* <!-- product info --> */}
    <div className="productwrapper">
        <div className="product-info">
            {/* <!-- <h1 className="product-info-heading">Product info</h1> --> */}
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
                <h3>batteryinfo:</h3>
                <h3 className="productbattery  generalname">{productInformation.batteryinfo}</h3>
            </div>
            <div className="product-name-container info white">
                <h3>ram:</h3>
                <h3 className="productram  generalname">{productInformation.ram}</h3>
            </div>
            <div className="product-name-container info grey">
                <h3>rom:</h3>
                <h3 className="productrom  generalname">{productInformation.rom}</h3>
            </div>
            <div className="product-name-container info white">
                <h3>network:</h3>
                <h3 className="productntwrk  generalname">{productInformation.network}</h3>
            </div>
            <div className="product-name-container info grey">
                <h3>color:</h3>
                <h3 className="productcolor  generalname">{productInformation.color}</h3>
            </div>
            <div className="product-name-container info white">
                <h3>front camera:</h3>
                <h3 className="productsfrontcamera  generalname">{productInformation.frontcamera}</h3>
            </div>
            <div className="product-name-container info grey">
                <h3>rear:</h3>
                <h3 className="productsrearcamera  generalname">{productInformation.rearcamera}</h3>
            </div>
            <div className="product-name-container info white">
                <h3>screen inch:</h3>
                <h3 className="productinch  generalname">{productInformation.inch}</h3>
            </div>
            <div className="product-name-container info grey">
                <h3>version:</h3>
                <h3 className="version  generalname">{productInformation.windowversion}</h3>
            </div>
         </div>
    </div>
    </div>
    <Footer/>
    </div>
    </div>
  )
}

export default PhoneCheckout