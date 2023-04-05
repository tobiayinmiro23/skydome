import React,{useState,useEffect    } from 'react'
import Footer from './Footer'
import './ShoeCheckout.css'
import { Link ,useParams} from 'react-router-dom'
import Menu from './Menu'
import {allclotheProd} from './clothProd'
function ClothCheckout({id,handletotal}) {
    // for information about a product
    const [productInformation,setproductInformation]=useState({})
    const [price, setprice] = useState('')
    const [validProduct, setvalidProduct] = useState(true)
    const productId=Number(useParams().id)
     // for getting a product information
     useEffect(()=>{
        let cartCount=document.querySelectorAll('.cart-count')[0]
        let product=allclotheProd.filter(item=>{
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
  return (
    <div className='ShoeCheckout'>
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
        <div className="btnWrapper">
            <button onClick={()=>handleButton(productInformation.no)}>Add to cart</button>
            <Link to="/checkout">
                <button onClick={()=>handletotal(productInformation.productprice)}>Checkout</button>
            </Link>
        </div>
    </div>
    <Footer/>
            </div>
            :
            <div className='invalidProduct'><h1>sorry,we could not find the product you were looking for</h1></div>

          }
        </div>
    </div>
    </div>
  )
}

export default ClothCheckout