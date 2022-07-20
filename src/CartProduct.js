import React ,{useState,useEffect}from 'react'
import  './CartProduct.css'
const CartProduct = ({cartId,setcartId,page,cart,handletotal,decreaseCartCount,cartCount,handleCart}) => {
    const [product, setproduct] = useState(cartId)
    let productPrice=[]
    const [productPriceInNaira, setproductpriceInNaira] = useState(0)
    const [size, setsize] = useState(0)
    const [loading, setloading] = useState(false)


const handleDelete=(param)=>{
  productPrice=[]
  let q=cartId.filter(item=>{
    return item.id !== param.id
  })
  setproduct(q)
  setcartId(q)
  decreaseCartCount()
  if(cartCount===1){
    handleCart(false)
    page('home')
  }
}


useEffect(
  ()=>{
    product.map(cid=>{
    setsize(cid.shoesize)
      productPrice.push(cid.productprice * cid.quantity)
      return   cid.productprice  
    })
    let a= productPrice.reduce((cid,acc)=>{
             return   cid + acc  
      },0)  
      setproductpriceInNaira(a)
      handletotal(a)
    // 
  },[cartId]
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
    <div className='CartProductContainer'>
          <div className='CartProduct'>
          {
             product.map(cid=>{
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
    <div className={cart ? "totalContainer" : 'none' }>
      <h2>Cart Summary</h2>
      <div className="total">
          <h3>Total item:</h3>
            <h3 className="price">{cartId.length}</h3>
      </div>
      <div className="total">
          <h3>Total</h3>
          <div className="price">
            <h3>&#8358;</h3>
            <h3>{productPriceInNaira.toLocaleString()}</h3>
          </div>
      </div>
        <div className="btnContainer">
         <button onClick={()=>{
          setloading(true)
          page("checkout")
         }}>
            { loading ? <div className="round"></div> : <h3>Checkout</h3>}
          </button>
        </div>
    </div>
    <div className={!cart ? "emptyCart" : 'none' }>
          <h1>your cart is currently empty </h1>
    </div>
    </div>
  )
}

export default CartProduct