import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import {mensclotheProd} from './clothProd'
import {womensclotheProd} from './clothProd'
import Menu from './Menu'

function Clothes({id}) {
  const [products,setproducts]=useState(mensclotheProd)
  const [products2,setproducts2]=useState(womensclotheProd)
  const [search,setsearch]=useState('')
  const [searching,setsearching]=useState(true)
  const [invalidSearch, setinvalidSearch] = useState(false)
  const [men, setmen] = useState(true)
  const [women, setwomen] = useState(true)
  
    // for the search button 
      const handleSearch=()=>{
        if( search !==''){
          const result=mensclotheProd.filter(item=>{
            return  item.productname.toLowerCase().includes(search.toLowerCase())
          })
          const result2=womensclotheProd.filter(item=>{
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
          setmen(true)
         setwomen(true)
        setproducts(mensclotheProd)
        setproducts2(womensclotheProd)
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
         let cartCount=document.querySelectorAll('.cart-count')[0]
         cartCount.innerHTML=cart?.length || 0
         localStorage.setItem('skydome',JSON.stringify(cart))
  }
  const handleMenu=()=>{
   var productCategory=document.querySelectorAll('.products-container')[0]
   productCategory.classList.toggle('block')
   
 }
 
  //  to display the mens clothes
   const handleMen=(item)=>{
      setmen(true)
      setwomen(false)
   }
  //  to display the womens clothes
   const handleWomen=(item)=>{
      setmen(false)
      setwomen(true)
   }
  //  to display all the clothes
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
            <input className="search" onChange={(e)=>setsearch(e.target.value)} value={search} list='list' type="text" />
          <datalist id='list'>
            <option>2 piece cloth</option>
            <option>vintage shirt</option>
            <option>joggers</option>
            <option>t-shirt</option>
            <option>wine dress</option>
            <option>crop top</option>
            <option>Female skiny jean</option>
            <option>Denim pallazo</option>
            <option>Riped jean</option>
            <option>Light blue jean</option>
            <option>Pink joggers</option>
            <option>Slit flare culottes</option>
            <option>Casual short sleeve</option>
            <option>Casual short sleeve</option>
            <option>Wine dress</option>
            <option>Empari Apparel</option>
            <option>Coporate ladie suit</option>
            <option>Orange gown</option>
            <option>Long gown</option>
            <option>Coporate dress</option>
            <option>Office dress</option>
            <option>Polka dot dress</option>
            <option>Striped pants combo</option>
            <option>Crop top</option>
            <option>Bell sleeves crop top</option>
            <option>White Body suit</option>
            <option>Striped lapel</option>
            <option>Hilfigher hoodie</option>
            <option>Black trouser</option>
            <option>Blue lean</option>
            <option>Cargo joggers</option>
            <option>El-vin GREY pack</option>
            <option> Offwhite sweater</option>
            <option>Baggy joggers</option>
            <option>T-shirt</option>
            <option>Coperate trouser</option>
            <option>Striped suit trouser</option>
            <option>Wine suit</option>
            <option>Tuxedo suit</option>
            <option>Diamond floral suit</option>
            <option>Brown chinok</option>
            <option>Baggy trouser</option>
            <option>White designer pants</option>
          </datalist>
          <div>
            {
              searching ? <button className="searchbtn" onClick={handleSearch} >search</button>
              :
              <div onClick={cancelSearch} className="cancelSearchButton searchbtn">
              <img src="/E-commerce pictures/close (2).png" alt="cloth img" />
              </div>
            }
          </div>
        </div>
        <hr />
        <div className="filter">
          <div>
            <input type="radio" name="men" onChange={handleAll}  id="all" />
            <label htmlFor="all" onClick={handleAll}>All</label>
          </div>
          <div >
            <input  type="radio" onChange={handleMen} name="men" id="men" />
            <label htmlFor="men" onClick={handleMen}>Men</label>
          </div>
          <div>
            <input type="radio" name="men" onChange={handleWomen} id="women" />
            <label htmlFor="women" onClick={handleWomen}>Women</label>
          </div>
        </div>
        {invalidSearch && <div className='invalidSearch'> <h2>Sorry, could not find find the item you searched for</h2></div>}
        {men &&
        <div className="product">
        {
            products.map(item=>{
                return   <div key={item.id} className="card c1">
                <Link to={'/clothcheckout/'+ item.no}>
                  <div className="card-img-container"  onClick={()=>id(item.no)}>
                      <img src={item.productimage1} alt="cloth img" />
                  </div>
                </Link>
                <div  className="card-info">
                <Link to={'/clothcheckout/'+item.no}>
                    <div onClick={()=>id(item.no)}>
                      <h3 className='productname'>{item.productname}</h3>
                        <div className="productPrice">
                          <p>&#8358;</p>
                          <p className="Price" >{item.productprice.toLocaleString()}</p>
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
        {
          women &&
          <div className="product product2">
        {
            products2.map(item=>{
                return   <div key={item.id} className="card c1">
                <Link to={'/clothcheckout/'+ item.no}>
                    <div className="card-img-container"  onClick={()=>id(item.no)}>
                        <img src={item.productimage1} alt="cloth img" />
                    </div>
                </Link>
                <div  className="card-info">
                  <Link to={'/clothcheckout/'+item.no}>
                    <div onClick={()=>id(item.no)}>
                      <h3 className='productname'>{item.productname}</h3>
                        <div className="productPrice">
                          <p>&#8358;</p>
                          <p className="Price" >{item.productprice.toLocaleString()}</p>
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
        <Footer/>
    </div>
  )
}

export default Clothes