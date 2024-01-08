import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {allProductDb} from './allProductDb'
import {generalProductsForHome} from './ProdAfterAdd'

import PhoneCheckout from './PhoneCheckout';
import ShoeCheckout from './ShoeCheckout';
import ProductCheckout from './ProductCheckout';
import LaptopCheckout from './LaptopCheckout';
import ClothCheckout from './ClothCheckout';


const SearchResultCheckout = () => {
    const [productInformation,setproductInformation]=useState({})
    const [generalProduct, setgeneralProduct] = useState(false)
    const productId=Number(useParams().id)

    useEffect(()=>{
        let product=allProductDb.filter(item=>{
            return item.no ===productId
        })
        product.map(item=>{
            setproductInformation(item)
        })
        let generalproduct=generalProductsForHome.filter(item=>{
            return item.no ===productId
        })
        if(generalproduct.length > 0)setgeneralProduct(true)
    },[])
  return (
    <div>
        {productInformation.processorname && <LaptopCheckout/>}
        {productInformation.network && <PhoneCheckout/>}
        {productInformation.shoe && productInformation.productinfopreview && <ShoeCheckout/>}
        {productInformation.shoe && <ClothCheckout/>}
        {generalProduct && <ProductCheckout/>}
    </div>
  )
}

export default SearchResultCheckout