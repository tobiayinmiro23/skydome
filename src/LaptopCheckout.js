import React,{useEffect, useState} from 'react'
import Footer from './Footer'
import './LaptopCheckout.css'
import {allProd} from './laptopProd'
function LaptopCheckout({id}) {
    // for information about a product
    const [productInformation,setproductInformation]=useState({})
    const [price, setprice] = useState('')
    // for getting customer details
    useEffect(()=>{
        let product=allProd.filter(item=>{
            return item.no ===id
        })
        product.map(item=>{
            setprice(item.productprice.toLocaleString())
            setproductInformation(item)
        })
    },[])

  return (
    <div className='laptopCheckout'>
       
{/* <!-- product image --> */}
<div className="center">
    <div className="product-img-container" style={{background:'white'}}>
        <img src={productInformation.productimage1} alt='' className="img1"/>
        <img src={productInformation.productimage2} alt='' className="img2"/>
    </div>
    {/* <!-- product info --> */}
    <div className="productwrapper">
        <div className="product-info jk" id='jk'>
            <div className="product-name-container info white">
                    <h3>product price:</h3>
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
  )
}

export default LaptopCheckout