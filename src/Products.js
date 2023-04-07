import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Advertisement from './Advertisement'
import Slider from './Slider'
import Menu from './Menu'
// import SimpleSlider from './Slider'
import './Product.css'
import './ProdBeforeAdd'
import {laptopProductForHome} from './ProdBeforeAdd'
import {generalProductsForHome} from './ProdAfterAdd'
import {phoneProductForHome} from './phoneProd'
import {shoeProductForHome} from './shoeProd'
import Footer from './Footer'
function Products({id,page,handleAdvert,advert}) {
    const [laptopProduct,setlaptopProduct]=useState(laptopProductForHome)
    const [phoneProduct,setphoneProduct]=useState(phoneProductForHome)
    const [shoeProduct,setshoeProduct]=useState(shoeProductForHome)
    const [generalProduct,setgeneralProduct]=useState(generalProductsForHome)
    const [search,setsearch]=useState('')
    const [searching,setsearching]=useState(true)
    const [cartid, setcartid] = useState([])
    const [invalidSearch, setinvalidSearch] = useState(false)
    const searchResultArray=[]
    const searchResult=[]
    const [cartnumber, setcartnumber] = useState(0)

    
   
      const cancelSearch=()=>{
        setsearching(true)
        handleAdvert(false)
        setlaptopProduct(laptopProductForHome)
        setphoneProduct(phoneProductForHome)
        setshoeProduct(shoeProductForHome)  
        setgeneralProduct(generalProductsForHome)
        setinvalidSearch(false)

      }
      // for searching products
    const handleSearch=()=>{
      if(search !==''){
        handleAdvert(true)
        const result=laptopProduct.filter(item=>{
          return  item.productname.toLowerCase().includes(search.toLowerCase())
        })
        const result2=phoneProduct.filter(item=>{
          return  item.productname.toLowerCase().includes(search.toLowerCase())
        })
        const result3=shoeProduct.filter(item=>{
          return  item.productname.toLowerCase().includes(search.toLowerCase())
        })
        const result4=generalProduct.filter(item=>{
          return  item.productname.toLowerCase().includes(search.toLowerCase())
        })
        setlaptopProduct([])
        let a=[]
        result.map(item=>{
          a.push(item)
        })
        result2.map(item=>{
          a.push(item)
        })
        result3.map(item=>{
          a.push(item)
        })
        result4.map(item=>{
          a.push(item)
        })
        setphoneProduct([])
        setshoeProduct([])
        setgeneralProduct([])
        setgeneralProduct(a)
        setsearching(false)
        if(result.length === 0 && result2.length === 0 && result3.length === 0 && result4.length === 0){
          setinvalidSearch(true)
        }
      }
  }
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
         let cartCount=document.querySelectorAll('.cart-count')[0]
         cartCount.innerHTML=cart?.length || 0
         localStorage.setItem('skydome',JSON.stringify(cart))
  }
  const handleMenu=()=>{
   var productCategory=document.querySelectorAll('.products-container')[0]
   productCategory.classList.toggle('block')
   
 }
  return (
    <div className='productWrapper' >  <nav>
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
         <Slider/>
        <div className="search-container" style={{paddingTop:'2rem'}}>
          <input className="search"   onChange={(e)=>setsearch(e.target.value)} value={search} type="text" list='list' />
          <datalist id='list'>
              <option>hp 250 g8</option>
              <option>lenovo legion 5</option>
              <option>mac book pro</option>
              <option>acer predator helios</option>
              <option>Nike airforce 1</option>
              <option>blue dior shoe</option>
              <option>Air jordan 4</option>
              <option>Adidas yeezy boost</option>
              <option>Female criss cross shoe</option>
              <option>Madden girl high heels</option>
              <option>Brown toe two strap heel</option>
              <option>high sole sandals</option>
              <option>Apple ear buds</option>
              <option>Air pod pro</option>
              <option>Samsung buds pro</option>
              <option> earphones</option>
              <option>gas cooker</option>
              <option>Center Carpet</option>
              <option>Mobile Wardrobe</option>
              <option>Vitafoam mattress</option>
              <option>Gucci bag</option>
              <option>Louis Vuitton Bag</option>
              <option>Hermes hand bag</option>
              <option>Black dior bag</option>
              <option>louis vuitton set</option>
              <option>Louis vuitton bag</option>
              <option>Channel set</option>
              <option>Coco chanel set</option>
              <option>Black dior shirt</option>
              <option>Black designer shirt</option>
              <option>Black dior shirt</option>
              <option>Blue gucci sweater</option>
              <option>XIAOMI poco m4 pro</option>
              <option>Tecno POVA Neo</option>
              <option>Samsung Galaxy A23</option>
              <option>Infinix note 11 pro</option>
          </datalist>
          <div>{searching ? <button className="searchbtn" onClick={handleSearch} >search</button>
              :  <div onClick={cancelSearch} className="cancelSearchButton searchbtn">
              <img src="/E-commerce pictures/close (2).png" alt="img" />
              </div>}</div>
         </div>
        <hr />
        {/* for  */}
        <div className="product">
          {invalidSearch && <div className='invalidSearch'> <h2>Sorry, could not find find the item you searched for</h2></div>}
        {
            laptopProduct.map(item=>{
                return <div key={item.id} className="card c1">
                        <Link to={"/laptopcheckout/"+ item.no}>
                          <div className="card-img-container"  onClick={()=>id(item.no)}>
                              <img src={item.productimage1} alt="img" />
                          </div>
                        </Link>
                        <div  className="card-info">
                        <Link to={"/laptopcheckout/"+ item.no}>
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
        {/* advertisement */}
        <Advertisement advert={advert} page={page}/>
        {/* products after ads */}
        <div className="product">
        {
            phoneProduct.map(item=>{
                return  <div key={item.id} className="card c1">
                  <Link to={"/phonecheckout/"+ item.no}>
                    <div className="card-img-container"  onClick={()=>id(item.no)}>
                        <img src={item.productimage1} alt="img" />
                    </div>
                  </Link>
                <div  className="card-info">
                <Link to={"/phonecheckout/"+ item.no}>
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
        <div className="product">
        {
            shoeProduct.map(item=>{
                return   <div key={item.id} className="card c1">
                  <Link to={"/shoecheckout/"+ item.no}>
                      <div className="card-img-container"  onClick={()=>id(item.no)}>
                          <img src={item.productimage1} alt="img" />
                      </div>
                  </Link>
                <div  className="card-info">
                <Link to={"/shoecheckout/"+ item.no}>
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
        <div className="product">
        {
            generalProduct.map(item=>{
                return  <div key={item.id} className="card c1">
                  <Link to={"/generalcheckout/"+ item.no}>
                    <div className="card-img-container"  onClick={()=>id(item.no)}>
                        <img src={item.productimage1} alt="img" />
                    </div>
                  </Link>
                <div  className="card-info">
                <Link to={"/generalcheckout/"+ item.no}>
                  
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
      <Footer/>
    </div>
  
  )
}

export default Products
