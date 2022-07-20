import React, { useState } from 'react'
import Advertisement from './Advertisement'
import Slider from './Slider'
// import SimpleSlider from './Slider'
import './Product.css'
import './ProdBeforeAdd'
import {laptopProductForHome} from './ProdBeforeAdd'
import {generalProductsForHome} from './ProdAfterAdd'
import {phoneProductForHome} from './phoneProd'
import {shoeProductForHome} from './shoeProd'
import Footer from './Footer'
function Products({id,page,handleCart,handleCartId,handleAdvert,advert}) {
    const [laptopProduct,setlaptopProduct]=useState(laptopProductForHome)
    const [phoneProduct,setphoneProduct]=useState(phoneProductForHome)
    const [shoeProduct,setshoeProduct]=useState(shoeProductForHome)
    const [generalProduct,setgeneralProduct]=useState(generalProductsForHome)
    const [search,setsearch]=useState('')
    const [searching,setsearching]=useState(true)
    const [cartid, setcartid] = useState([])
    const [invalidSearch, setinvalidSearch] = useState(false)


    //for laptop products button
      const handleLaptopButton=(productid)=>{
        id(productid)
          page('laptopcheckout')
      } 
    //for phone products button
      const handlePhoneButton=(productid)=>{
        id(productid)
        page('phonecheckout')
      } 
    //for shoe products button
      const handleShoeButton=(productid)=>{
        id(productid)
        page('shoecheckout')
      } 
    //for general products button
      const handleGeneralButton=(productid)=>{
        id(productid)
        page('generalcheckout')
      } 
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
        const loader=document.querySelectorAll('.loader')[0]
        loader.classList.add('block')
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
        setlaptopProduct(result)
        setphoneProduct(result2)
        setshoeProduct(result3)
        setgeneralProduct(result4)
        setsearching(false)
        loader.classList.remove('block')
        if(result.length === 0 && result2.length === 0 && result3.length === 0 && result4.length === 0){
          setinvalidSearch(true)
        }
      }
  }
  const handleButton=(item)=>{
        cartid.push(item)
        handleCartId(item)
        handleCart(true)
       }
  return (
    <div>
         {/* search bar */}
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
                        <div className="card-img-container"  onClick={()=>handleLaptopButton(item.no)}>
                            <img src={item.productimage1} alt="img" />
                        </div>
                        <div  className="card-info">
                            <div onClick={()=>handleLaptopButton(item.no)}>
                              <h3 className='productname'>{item.productname}</h3>
                                <div className="productPrice">
                                  <p>&#8358;</p>
                                  <p className="Price" onClick={()=>handleLaptopButton(item.no)}>{item.productprice.toLocaleString()}</p>
                                </div>
                                <p >{item.productinfopreview}</p>
                            </div>
                            <div className="bb">
                            <button id="one"  onClick={()=>handleButton(item)} className="b-t-n">add to cart</button>
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
                <div className="card-img-container"  onClick={()=>handlePhoneButton(item.no)}>
                    <img src={item.productimage1} alt="img" />
                </div>
                <div  className="card-info">
                    <div onClick={()=>handlePhoneButton(item.no)}>
                      <h3 className='productname'>{item.productname}</h3>
                        <div className="productPrice">
                          <p>&#8358;</p>
                          <p className="Price" onClick={()=>handlePhoneButton(item.no)}>{item.productprice.toLocaleString()}</p>
                        </div>
                        <p >{item.productinfopreview}</p>
                    </div>
                    <div className="bb">
                    <button id="one"  onClick={()=>handleButton(item)} className="b-t-n">add to cart</button>
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
                <div className="card-img-container"  onClick={()=>handleShoeButton(item.no)}>
                    <img src={item.productimage1} alt="img" />
                </div>
                <div  className="card-info">
                    <div onClick={()=>handleShoeButton(item.no)}>
                      <h3 className='productname'>{item.productname}</h3>
                        <div className="productPrice">
                          <p>&#8358;</p>
                          <p className="Price" onClick={()=>handleShoeButton(item.no)}>{item.productprice.toLocaleString()}</p>
                        </div>
                        <p >{item.productinfopreview}</p>
                    </div>
                    <div className="bb">
                    <button id="one"  onClick={()=>handleButton(item)} className="b-t-n">add to cart</button>
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
                <div className="card-img-container"  onClick={()=>handleGeneralButton(item.id)}>
                    <img src={item.productimage1} alt="img" />
                </div>
                <div  className="card-info">
                    <div onClick={()=>handleGeneralButton(item.id)}>
                      <h3 className='productname'>{item.productname}</h3>
                        <div className="productPrice">
                          <p>&#8358;</p>
                          <p className="Price" onClick={()=>handleGeneralButton(item.id)}>{item.productprice.toLocaleString()}</p>
                        </div>
                        <p >{item.productinfopreview}</p>
                    </div>
                    <div className="bb">
                    <button id="one"  onClick={()=>handleButton(item)} className="b-t-n">add to cart</button>
                    </div>
                </div>
            </div>
            })
        }
        </div>
        <div style={{background:'black'}} className="loading">
          <div className="loader">
            <div className="loader1"></div>
            <div className="loader2"></div>
            <div className="loader3"></div>
          </div>
        </div>
      <Footer/>
    </div>
  
  )
}

export default Products