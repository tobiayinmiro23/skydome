import './App.css';
import Laptop from './Laptop';
import LaptopCheckout from './LaptopCheckout';
import Navigation from './Navigation';
import Phone from './Phone';
import Products from './Products';
import Shoe from './Shoe'
import User from './User';
import Login from './Login'
import Signup from './Signup'
import PhoneCheckout from './PhoneCheckout';
import ShoeCheckout from './ShoeCheckout';
import ProductCheckout from './ProductCheckout';
import { useState } from 'react';
import Unavailable from './Unavailable';
import Purchased from './Purchased';
import CartProduct from './CartProduct';
import ChangePassword from './ChangePassword';
import Checkout from './Checkout';
import Clothes from './Clothes';
import ClothCheckout from './ClothCheckout';
// import Home from './Home';
function App() {
  const [page,setpage]=useState('home')
  const [cart, setcart] = useState(false)
  const [cartCount, setcartCount] = useState(0)
  const [cartId, setcartId] = useState([])
  const [user, setuser] = useState('')
  const [advert, setadvert] = useState(false)
  const [cartGreaterThan100, setcartGreaterThan100] = useState(false)
  const [total, settotal] = useState(0)
// for changing the page
  const handlePage=(param)=>{
    setpage(param)
  }
  // for getting product id
  const [id,setid]=useState(0)
    const handleId=(param)=>{
    setid(param)
    }
    // for changing the cart state
    const handleCart=(param)=>{
      setcart(param)
    }
    // for putting the product in the cart
    const handleCartId=(param)=>{
      if(cartId.indexOf(param) !== -1)return;
        setcartId([...cartId,param])
          increaseCartCount()
    }
    // resetting the cart after a product is deleted
    const changeCartId=(param)=>{
      setcartId(param)
    }
    // for getting the user info
    const handleUser=(param)=>{
      setuser(param)
    }
    // for getting the total of the cart item
    const handletotal=(param)=>{
      settotal(param)
    }
    // for removing the advertisement in the home page
    const handleAdvert=(param)=>{
      setadvert(param)
    }
    // for increasing the cart number
    const increaseCartCount=()=>{
      setcartCount( cartCount + 1)
          if(cartCount > 99){
        setcartGreaterThan100(true)
      }
    }
    // for decreasing the cart number
    const decreaseCartCount=()=>{
      setcartCount( cartCount - 1)
    }
  return (
    <div className="App">
     {
       <div>
      <Navigation page={handlePage} cartGreaterThan100={cartGreaterThan100} cart={cart} handleAdvert={handleAdvert} cartCount={cartCount} handleCart={handleCart}/>
      {page==='cart'&& <CartProduct handletotal={handletotal} page={handlePage} cartCount={cartCount} handleCart={handleCart} cart={cart} decreaseCartCount={decreaseCartCount} setcartId={changeCartId} cartId={cartId}/>}
      {page==='User' && <User user={user}/>}
      {page==='checkout' && <Checkout total={total} setcartId={setcartId} cartId={cartId} setcart={setcart} setcartCount={setcartCount} page={handlePage}/>}
      {page==='home'&& <Products id={handleId} handleAdvert={handleAdvert}  advert={advert} cartId={cartId} handleCartId={handleCartId} handleCart={handleCart} page={handlePage}/>}
      {page==='phone'&&<Phone id={handleId} cartId={cartId} handleCartId={handleCartId} handleCart={handleCart} page={handlePage}/>}
      {page==='changePassword'&& <ChangePassword id={handleId} page={handlePage}/>}
      {page==='laptop'&& <Laptop id={handleId} cartId={cartId} handleCartId={handleCartId} handleCart={handleCart} page={handlePage}/>}
      {page==='shoes'&& <Shoe id={handleId} cartId={cartId} handleCartId={handleCartId} handleCart={handleCart} page={handlePage}/>}
      {page==='cloth'&& <Clothes id={handleId} cartId={cartId} handleCartId={handleCartId} handleCart={handleCart} page={handlePage}/>}
      {page==='signup'&& <Signup user={handleUser}  page={handlePage}/>}
      {page==='login'&& <Login user={handleUser} page={handlePage}/>}
      {page==='laptopcheckout' && <LaptopCheckout  id={id}/>}
      {page==='shoecheckout' && <ShoeCheckout page={handlePage} id={id}/> }
      {page==='clothcheckout' && <ClothCheckout page={handlePage} id={id}/> }
      {page==='phonecheckout' &&  <PhoneCheckout page={handlePage} id={id}/>}
      {page==='generalcheckout' && <ProductCheckout page={handlePage} id={id}/>}
      {page==='unavailable' && <Unavailable page={handlePage}/>}
      {page==='purchased' && <Purchased page={handlePage}/>}
      </div>
     
     }
    </div>
  );
}

export default App;
