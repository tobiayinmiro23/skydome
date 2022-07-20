import React, { useState } from 'react'
import Footer from './Footer'
import {laptopProd} from './laptopProd'
import {allProd} from './laptopProd'
function Laptop({id,page,handleCart,handleCartId}) {
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
    page('laptopcheckout')
} 
// to add item to the cart
const handleButton=(item)=>{
  handleCartId(item)
  handleCart(true)
 }

  return (
    <div>
        
        {/* <Navigation/> */}
         {/* search bar */}
         <div className="search-container">
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
                <div className="card-img-container"  onClick={()=>handleLaptopButton(item.no)}>
                    <img src={item.productimage1} alt="laptop img" />
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
        <Footer/>
    </div>
  )
}

export default Laptop