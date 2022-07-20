import React, { useState,useEffect } from 'react'
import Footer from './Footer'
import {mensclotheProd} from './clothProd'
import {womensclotheProd} from './clothProd'
// setproducts(beforeads)
// console.log(products)

function Clothes({id,page,handleCart,handleCartId}) {
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
     //to display cloth information
     const handleClothButton=(productid)=>{
       id(productid)
       page('clothcheckout')   
  }
  // to add item to the cart
  const handleButton=(item)=>{
    handleCartId(item)
    handleCart(true)
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
        {/* <Navigation/> */}
         {/* search bar */}
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
                <div className="card-img-container"  onClick={()=>handleClothButton(item.no)}>
                    <img src={item.productimage1} alt="cloth img" />
                </div>
                <div  className="card-info">
                    <div onClick={()=>handleClothButton(item.no)}>
                      <h3 className='productname'>{item.productname}</h3>
                        <div className="productPrice">
                          <p>&#8358;</p>
                          <p className="Price" onClick={()=>handleClothButton(item.no)}>{item.productprice.toLocaleString()}</p>
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
        }
        {
          women &&
          <div className="product product2">
        {
            products2.map(item=>{
                return   <div key={item.id} className="card c1">
                <div className="card-img-container"  onClick={()=>handleClothButton(item.no)}>
                    <img src={item.productimage1} alt="cloth img" />
                </div>
                <div  className="card-info">
                    <div onClick={()=>handleClothButton(item.no)}>
                      <h3 className='productname'>{item.productname}</h3>
                        <div className="productPrice">
                          <p>&#8358;</p>
                          <p className="Price" onClick={()=>handleClothButton(item.no)}>{item.productprice.toLocaleString()}</p>
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
        }
        <Footer/>
    </div>
  )
}

export default Clothes