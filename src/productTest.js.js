import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import {laptopProd} from './laptopProd'
import {allProd} from './laptopProd'
import Menu from './Menu'
function ProductTest({id}) {
  const [products,setproducts]=useState(laptopProd)
  const [search,setsearch]=useState('')
  const [searching,setsearching]=useState(true)
  const [invalidSearch, setinvalidSearch] = useState(false)
  // for the search button
  const handleSearch=()=>{
    if( search !==''){
      const result=allProd.filter(item=>{
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
    setproducts(laptopProd)
  }
  //to display product info
  const handleLaptopButton=(productid)=>{
    id(productid)
} 

useEffect(()=>{
   let cartCount=document.querySelectorAll('.cart-count')[0]
   let l= localStorage.getItem('test')
      let data;
      // incase the user manually deletes locale storage 
      if(l.length){
        data= JSON.parse(localStorage.getItem('test')) 
      }else{
        localStorage.setItem('test',JSON.stringify([]))
      }
    cartCount.innerHTML=data?.length || 0
 },[])

let memory = new Set
const handleButton=(item)=>{
  let data= JSON.parse(localStorage.getItem('test'))
        let cart=[]
        data?.map(item=>{
          memory.add(item)
        })
        memory.add(item)

        memory.forEach(item=>{
          cart.push(item)
        })
        let cartCount=document.querySelectorAll('.cart-count')[0]
        cartCount.innerHTML=cart?.length || 0
        localStorage.setItem('test',JSON.stringify(cart))
 }
 const handleMenu=()=>{
  var productCategory=document.querySelectorAll('.products-container')[0]
  productCategory.classList.toggle('block')
  
}

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
        <h1>product test</h1>
        <p>kdjfdvlmsc</p>
          <input className="text" onChange={(e)=>setsearch(e.target.value)} value={search} type="text" list='list'/>
          <datalist id='list'>
              <option> DELL XPS 17</option>
              <option>DELL G5 Gamming pc</option>
              <option>Asus X515JA</option>
              <option>DELL latitude 3310</option>
              <option>Acer nitro 5</option>
              <option>Hp omen 16</option>
              <option>Asus ROG ZEPHYRUS G1</option>
              <option>Apple macbook air</option>
              <option>Razer blade Stealth</option>
              <option>Lenovo v15</option>
              <option>Microsoft surface pro 6</option>
              <option>Hp 240 G8 </option>
              <option>Asus gaming pc</option>
              <option>DELL ALIENWARE</option>
              <option>infinix INbook</option>
              <option>Hp Pavilion 15</option>

          </datalist>
          <div>
            {
              searching ? <button className="searchbtn" onClick={handleSearch} >search</button>
              :
              <div onClick={cancelSearch} className="cancelSearchButton searchbtn">
              <img src="/E-commerce pictures/close (2).png" alt="laptop img" />
              </div>
            }
          </div>
        </div>
        <hr />
        {invalidSearch && <div className='invalidSearch'> <h2>Sorry, could not find find the item you searched for</h2></div>}
        <div className="product">
        {
            products.map(item=>{
                return <div key={item.id} className="card c1">
                  <Link to={'/laptopcheckout/'+item.id}>
                  <div className="card-img-container"  onClick={()=>handleLaptopButton(item.no)}>
                      <img src={item.productimage1} alt="laptop img" />
                  </div>
                  </Link>
                <div  className="card-info">
                <Link to={'/laptopcheckout/'+item.id}>
                    <div onClick={()=>handleLaptopButton(item.no)}>
                      <h3 className='productname'>{item.productname}</h3>
                        <div className="productPrice">
                          <p>&#8358;</p>
                          <p className="Price" onClick={()=>handleLaptopButton(item.no)}>{item.productprice.toLocaleString()}</p>
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

export default ProductTest