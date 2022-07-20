import React,{useState,useEffect    } from 'react'
import Footer from './Footer'
import './ShoeCheckout.css'
import {allclotheProd} from './clothProd'
function ClothCheckout({id,page}) {
    // for information about a product
    const [productInformation,setproductInformation]=useState({})
    const [price, setprice] = useState('')
     // for getting a product information
     useEffect(()=>{
        let product=allclotheProd.filter(item=>{
            return item.no ===id
        })
        product.map(item=>{
            setprice(item.productprice.toLocaleString())
            setproductInformation(item)
        })
        },[])
  return (
    <div className='ShoeCheckout'>
        <div className='laptopCheckout'>
   
{/* <!-- product image --> */}
<div className="center">
   
    <div className="productwrapper">
        <div className="product-img-container" style={{background:'white'}}>
            <img src={productInformation.productimage1} alt="image" style={{margin:'auto'}} className="img1"/>
            <div className="proinfo">
                <div className="product-wrapper">
                    <p className="productname">{productInformation.productname}</p>
                    <div className="price">
                        <span>&#8358;</span>
                        <p className="productprice">{price}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
    </div>
  )
}

export default ClothCheckout