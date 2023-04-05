import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Menu from './Menu'

import {phoneProd} from './phoneProd'

function Phone({id}) {
  const [products,setproducts]=useState(phoneProd)
  const [search,setsearch]=useState('')
  const [searching,setsearching]=useState(true)
  const [invalidSearch, setinvalidSearch] = useState(false)

      // for the search button
      const handleSearch=()=>{
        if( search !==''){
          const result=phoneProd.filter(item=>{
            return  item.productname.toLowerCase().includes(search.toLowerCase())
          })
          setproducts(result)
          setsearching(false)
          if(result.length === 0){
            console.log('no product found')
            setinvalidSearch(true)
          }
        }
      }
      // to cancel search
      const cancelSearch=()=>{
        setsearching(true)
        setinvalidSearch(false)
        setproducts(phoneProd)
      }
  // to add item to the cart
  useEffect(()=>{
    let cartCount=document.querySelectorAll('.cart-count')[0]
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
   let data= JSON.parse(localStorage.getItem('skydome'))
         let cart=[]
         data?.map(item=>{
           memory.add(item)
         })
         memory.add(item)
 
         memory.forEach(item=>{
           cart.push(item)
         })
         console.log(cart)
         let cartCount=document.querySelectorAll('.cart-count')[0]
         cartCount.innerHTML=cart?.length || 0
         localStorage.setItem('skydome',JSON.stringify(cart))
  }
  const handleMenu=()=>{
   var productCategory=document.querySelectorAll('.products-container')[0]
   productCategory.classList.toggle('block')
   
 }
let asi=<p>&#8358;</p>
  return (
    <div>
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
         <div className="search-container">
          <input className="search" onChange={(e)=>setsearch(e.target.value)} value={search} type="text" list='list'/>
          <datalist id='list'>
              <option>Tecno camon 17</option>
              <option>Black view oscal pad 8</option>
              <option>Gionee M12</option>
              <option>Huawei y9a</option>
              <option>XIAOMI poco m4 pro</option>
              <option>Tecno POVA Neo</option>
              <option>Samsung Galaxy A23</option>
              <option>Infinix note 11 pro</option>
              <option>Huawei p8 max</option>
              <option>Tecno phantom X</option>
              <option>Iphone 12</option>
              <option>samsung galaxy s10 plus</option>
              <option>XIAOMI redmi note 9s</option>
              <option>Nokia 8.3</option>
              <option>Ouikitel c21</option>
              <option>Samsung galaxy A12</option>
              <option>Itel A35</option>
              <option>Gionee P15 Pro</option>
              <option>Apple ipad</option>
              <option>Gionee s12</option>
          </datalist>
          <div>
            {
              searching ? <button className="searchbtn" onClick={handleSearch} >search</button>
              :
              <div onClick={cancelSearch} className="cancelSearchButton searchbtn">
              <img src="/E-commerce pictures/close (2).png" alt="phone img" />
              </div>
            }
          </div>
        </div>
        <hr />
        {invalidSearch && <div className='invalidSearch'> <h2>Sorry, could not find find the item you searched for</h2></div>}
        <div className="product">
        {
            products.map(item=>{
                return   <div key={item.id} className="card c1">
                  <Link to={'/phonecheckout/'+ item.no}>
                    <div className="card-img-container"  onClick={()=>id(item.no)}>
                        <img src={item.productimage1}  alt="phone img" />
                    </div>
                  </Link>
                <div  className="card-info">
                <Link to={'/phonecheckout/'+ item.no}>
                    <div onClick={()=>id(item.no)}>
                      <h3 className='productname'>{item.productname}</h3>
                        <div className="productPrice">
                          {/* <p>&#8358;</p> */}
                          <h4>{asi}</h4>
                          <p className="Price">{item.productprice.toLocaleString()}</p>
                        </div>
                        <p >{item.productinfopreview}</p>
                    </div>
                </Link>
                    <div className="bb">
                    <button id="one"  onClick={()=>handleButton(item.no)} className="b-t-n">add to cart</button>
                    </div>
                </div>
            </div>
            })
        }
        </div>
        <Footer/>
    </div>
  )
}

export default Phone