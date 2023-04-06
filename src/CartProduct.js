import React ,{useState,useEffect}from 'react'
import {allProductDb} from './allProductDb'
import  './CartProduct.css'
import { Link } from 'react-router-dom'
const CartProduct = ({handletotal}) => {
    const [productPriceInNaira, setproductpriceInNaira] = useState(0)
    const [result, setresult] = useState([])
    const [size, setsize] = useState(0)


const handleDelete=(param)=>{
  let q=result.filter(item=>{
    return item.id !== param.id
  })
  setresult(q)
  let memory=[]
  q.map(item=>{
    return memory.push(item.no)
   })
  localStorage.setItem('skydome',JSON.stringify(memory))
}

let data=[]
let l= localStorage.getItem('skydome')
let list;
if(l.length){
  list= JSON.parse(localStorage.getItem('skydome')) 
}
const getData=()=>{
  let memory=[]
  list?.forEach(item =>{
    let datta=allProductDb.filter(res =>{
      return res.no === item
      })
      if(datta.length !== 0){
        memory.push(datta)
       let resultt=memory.map(item=>{
          return item[0]
        })
        let a=resultt.reverse()
         setresult(resultt)
        }
      })
}

useEffect(()=>{
  let wrapper=document.querySelectorAll('.CartProductWrapper .Wrapper ')[0]
  let animation=document.querySelectorAll('.CartProductWrapper .loading')[0]
  wrapper.classList.add('none')
    // to remove the loading animation
    setTimeout(()=>{
      animation.classList.add('none')
      wrapper.classList.remove('none')
    },1200)

    getData()
  var productPrice=[] 
  list?.map(cid=>{
    productPrice.push(cid.productprice * cid.quantity)
    return   cid.productprice  
  })
  let a= productPrice.reduce((cid,acc)=>{
           return   cid + acc  
    },0)  
    setproductpriceInNaira(a)
    handletotal(a)

},[])
useEffect(
  ()=>{
    var productPrice=[] 
    result.map(cid=>{
      productPrice.push(cid.productprice * cid.quantity)
      return   cid.productprice  
    })
    let a= productPrice.reduce((cid,acc)=>{
             return   cid + acc  
      },0)  
      setproductpriceInNaira(a)
      handletotal(a)      
    // 
  },[list]
 )
const Add=(item)=>{
  item.quantity +=1
    setproductpriceInNaira(productPriceInNaira + item.productprice)
    handletotal(productPriceInNaira + item.productprice)
}
const Remove=(item)=>{
  if(item.quantity===1){
    item.quantity=1
  }else{
    item.quantity -=1
    setproductpriceInNaira(productPriceInNaira - item.productprice)
    handletotal(productPriceInNaira - item.productprice)
  }
} 
const increaseShoeSize=(item)=>{
  item.shoesize +=1
  setsize(item.shoesize)

}
const decreaseShoeSize=(item)=>{
  if(item.shoesize===1){
    item.shoesize=1
  setsize(item.shoesize)
  }else{
    item.shoesize -=1
  setsize(item.shoesize)
  }
}
  return (
   <div className='CartProductWrapper'>
     {/* <div className='Wrapper'> */}
     <div className='Wrapper'>
        {
          result.length > 0 ?
          <div className='CartProductContainer'>
            <div className='CartProduct'>
          {
             result.map(cid=>{
              return <div key={cid.id}>
                <div className="wrapper">
                    <div className='one'>
                          <div className="productInfo">
                            <div ><img className='image' src={cid.productimage1} alt=""/></div>
                            <h2>{cid.productname}</h2>
                          </div>
                          <div className="remove" onClick={(e)=>handleDelete(cid)}>
                              <div ><img src="/productimage/delete.png" alt="delete button" /></div>
                              <h3>Remove</h3>
                          </div>
                    </div>
                    <div className='two'>
                      <span><h3>&#8358;</h3> <h3>{cid.productprice.toLocaleString()}</h3></span>
                       <div className="qtyContainer">
                          <div className="add" onClick={()=>Add(cid)} ><img src="/productimage/plus.png" alt="" /></div>
                          <p className='quantity'>{cid.quantity}</p>
                          <div className={cid.quantity ===1 ? 'disable'  : 'add'}  onClick={()=>Remove(cid)}><img src="/productimage/minus-sign.png" alt="" /></div>
                      </div>
                      <div className={cid.shoe ? 'shoe' : 'none'}>
                          <div className="qtyContainer">
                              <div className="add" onClick={()=>increaseShoeSize(cid)} ><img src="/productimage/plus.png" alt="" /></div>
                              <p className='quantity'>{cid.shoesize}</p>
                              <div className={cid.shoesize ===1 ? 'disable'  : 'add'}  onClick={()=>decreaseShoeSize(cid)}><img src="/productimage/minus-sign.png" alt="" /></div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>     
           })
          }
            </div> 
          <div>
              <div className="totalContainer">
              <h2>Cart Summary</h2>
              <div className="total">
                  <h3>Total item:</h3>
                    <h3 className="price">{result.length}</h3>
              </div>
              <div className="total">
                  <h3>Total</h3>
                  <div className="price">
                    <h3>&#8358;</h3>
                    <h3>{productPriceInNaira.toLocaleString()}</h3>
                  </div>
              </div>
                <div className="btnContainer">
                <Link to="/checkout">
                  <button ><h3>Checkout</h3></button>
                </Link>
                </div>
            </div>
          </div>
        </div>
   :
  //  <p>,j,gv.k. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, ipsum quisquam eius esse quod commodi ratione cumque eaque quos voluptatibus. Eveniet nisi a tempora in consequatur culpa! Natus, dolorem perspiciatis?</p>
      <div className="emptyCart" id="emptyCart">
        <h1>your cart is currently empty </h1>
      </div> 
        }
    
     </div>
     <div  className="loading">
      <div className="loader">
        <div className="loader1"></div>
        <div className="loader2"></div>
        <div className="loader3"></div>
      </div>
      </div>
   </div>
  )
}

export default CartProduct