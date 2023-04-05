import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import {menshoeProd} from './shoeProd'
import {womenshoeProd} from './shoeProd'
import Menu from './Menu'

function Shoe({id}) {
  const [products,setproducts]=useState(menshoeProd)
  const [products2,setproducts2]=useState(womenshoeProd)

  const [search,setsearch]=useState('')
  const [searching,setsearching]=useState(true)
  const [invalidSearch, setinvalidSearch] = useState(false)
  const [men, setmen] = useState(true)
  const [women, setwomen] = useState(true)

  const handleSearch=()=>{
    if( search !==''){
      const result=menshoeProd.filter(item=>{
        return  item.productname.toLowerCase().includes(search.toLowerCase())
      })
      const result2=womenshoeProd.filter(item=>{
        return  item.productname.toLowerCase().includes(search.toLowerCase())
      })
      setproducts(result)
      setproducts2(result2)
      setsearching(false)
      if(result.length === 0 && result2.length === 0){
        setmen(false)
        setwomen(false)
        setinvalidSearch(true)
      }
    }
  }
  // to cancel search
  const cancelSearch=()=>{
    setsearching(true)
    setinvalidSearch(false)
    setproducts(menshoeProd)
    setproducts2(womenshoeProd)
  }
  // to add item to the cart
  useEffect(()=>{
    let cartCount=document.querySelectorAll('.cart-count')[0]
    let all =document.getElementById('all')
    all.checked=true
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
 
  //  to display the men shoes
   const handleMen=(item)=>{
    setmen(true)
    setwomen(false)
   }
  //  to display the women shoes
   const handleWomen=(item)=>{
    setmen(false)
    setwomen(true)
   }
  //  to display all the shoes
   const handleAll=(item)=>{
    if(searching===false){
      setmen(true)
      setwomen(true)
    }else{
      setmen(true)
      setwomen(true)
    }
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
          <input className="search" onChange={(e)=>setsearch(e.target.value)} value={search} type="text" list='list'/>
          <datalist id='list'>
              <option>blue dior shoe</option>
              <option>Air jordan 4</option>
              <option>Adidas yeezy boost</option>
              <option>Female criss cross shoe</option>
              <option>Vans shoe</option>
              <option>Nike air jordan</option>
              <option>Nike airforce</option>
              <option>Puma shoe</option>
              <option>Louis vuitton shoe</option>
              <option>Brown oxford shoe</option>
              <option>Mens ankle boots</option>
              <option>Striped high boots</option>
              <option>Brown loafer shoe</option>
              <option>Stilettos leopard sandals</option>
              <option>High heel sandals</option>
              <option>Cross strap sandal</option>
              <option>Hollow Mesh Sandals</option>
              <option>Nike air jordan</option>
              <option>Jordan pro strong</option>
              <option>Adidas yeezy boost</option>
              <option>Channel shoe</option>
              <option>White channel shoe</option>
              <option>Madden girl shoe</option>
              <option>Micheal kors</option>
              <option>Pink zara shoe</option>
              <option>Bella Vita shoe</option>
              <option>Louis V sneakers.</option>
              <option>Channel boots</option>
              <option>Red suede tie shoe</option>
              <option>Black seude shoe</option>
              <option>Brown leather shoe</option>
              <option>black seude shoe</option>
              <option>Welcome slides</option>
              <option>Balenciaga loafer</option>
              <option>Alexander mcQueen </option>

          </datalist>
          <div>
            {
              searching ? <button className="searchbtn" onClick={handleSearch} >search</button>
              :
              <div onClick={cancelSearch} className="cancelSearchButton searchbtn">
              <img src="/E-commerce pictures/close (2).png" alt="shoe img" />
              </div>
            }
          </div>
        </div>
        <hr />
        <div className="filter">
          <div>
            <input type="radio" name="men"  onChange={handleAll}  id="all" />
            <label htmlFor="all" onClick={handleAll}>All</label>
          </div>
          <div >
            <input  type="radio" onChange={handleMen} name="men" id="men" />
            <label htmlFor="men" onClick={handleMen}>Men</label>
          </div>
          <div>
            <input type="radio" onChange={handleWomen} name="men" id="women" />
            <label htmlFor="women" onClick={handleWomen}>Women</label>
          </div>
        </div>
        {invalidSearch && <div className='invalidSearch'> <h2>Sorry, could not find find the item you searched for</h2></div>}
        <div>
          {men &&
              <div className="product">
              {
                  products.map(item=>{
                      return  <div key={item.id} className="card c1">
                        <Link to={'/shoecheckout/'+item.no}>
                          <div className="card-img-container"  onClick={()=>id(item.no)}>
                              <img src={item.productimage1} alt="shoe img" />
                          </div>
                        </Link>
                      <div  className="card-info">
                      <Link to={'/shoecheckout/'+item.no}>
                          <div onClick={()=>id(item.no)}>
                            <h3 className='productname'>{item.productname}</h3>
                              <div className="productPrice">
                                <p>&#8358;</p>
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
          }
        </div>
        <div>
          {
            women &&
            <div className="product">
        {
            products2.map(item=>{
                return  <div key={item.id} className="card c1">
                <Link to={'/shoecheckout/'+item.no}>
                    <div className="card-img-container"  onClick={()=>id(item.no)}>
                        <img src={item.productimage1} alt="shoe img" />
                    </div>
                </Link>
                <div  className="card-info">
                  <Link to={'/shoecheckout/'+item.no}>
                    <div onClick={()=>id(item.no)}>
                      <h3 className='productname'>{item.productname}</h3>
                        <div className="productPrice">
                          <p>&#8358;</p>
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
          }
        </div>
        <Footer/>
    </div>
  )
}

export default Shoe