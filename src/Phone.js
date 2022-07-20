import React, { useState } from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import {phoneProd} from './phoneProd'
// setproducts(beforeads)
// console.log(products)

function Phone({id,page,handleCart,handleCartId}) {
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
     //to display product info
     const handlePhoneButton=(productid)=>{
       id(productid)
       page('phonecheckout')
  }
  // to add item to the cart
  const handleButton=(item)=>{
    handleCartId(item)
    handleCart(true)
   }

  return (
    <div>
         {/* search bar */}
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
                <div className="card-img-container"  onClick={()=>handlePhoneButton(item.no)}>
                    <img src={item.productimage1} alt="phone img" />
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
        <Footer/>
    </div>
  )
}

export default Phone