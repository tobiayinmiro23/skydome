import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { useState} from 'react';
import Laptop from './Laptop';
import LaptopCheckout from './LaptopCheckout';
import Phone from './Phone';
import Products from './Products';
import Shoe from './Shoe'
import User from './User';
import Login from './Login'
import Signup from './Signup'
import PhoneCheckout from './PhoneCheckout';
import ShoeCheckout from './ShoeCheckout';
import ProductCheckout from './ProductCheckout';
import Unavailable from './Unavailable';
import Purchased from './Purchased';
import CartProduct from './CartProduct';
import ChangePassword from './ChangePassword';
import Checkout from './Checkout';
import Clothes from './Clothes';
import ClothCheckout from './ClothCheckout';
import Payment from './Payment'
import ForgotPassword from './ForgotPassword';
function App() {
  const [advert, setadvert] = useState(false)
  const [total, settotal] = useState(0)
  const [id,setid]=useState(0)

  // for getting product id
    const handleId=(param)=>{
    setid(param)
    }
    
    // for getting the total of the cart item
    const handletotal=(param)=>{
      settotal(param)
    }
    // for removing the advertisement in the home page
    const handleAdvert=(param)=>{
      setadvert(param)
    }
  return (
    <div className="App">
     {
       <div>
    <Router>
        <Routes>
            <Route exact path='/' element={<Products id={handleId} handleAdvert={handleAdvert}  advert={advert} />}/>
            <Route path='/cart' element={<CartProduct handletotal={handletotal} />} />
            <Route path='/User' element={<User />} />
            <Route path='/checkout'  element={<Checkout total={total} />} />
            <Route path='/phone' element={<Phone id={handleId}/>} />
            <Route path='/changePassword' element={<ChangePassword />}  />
            <Route path='/laptop' element={<Laptop id={handleId} />} />
            <Route path='/shoes' element={<Shoe id={handleId} />} />
            <Route path='/cloth' element={ <Clothes id={handleId} />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login'  element={<Login/>}/>
            <Route path='/forgotpassword'  element={<ForgotPassword/>}/>
            <Route path='/laptopcheckout/:id' element={ <LaptopCheckout  handletotal={handletotal}  id={id}/>} />
            <Route path='/shoecheckout/:id'  element={<ShoeCheckout handletotal={handletotal} id={id}/>}/>
            <Route path='/clothcheckout/:id' element={<ClothCheckout handletotal={handletotal} id={id}/>} />
            <Route path='/phonecheckout/:id' element={<PhoneCheckout handletotal={handletotal} id={id}/>} />
            <Route path='/generalcheckout/:id' element={<ProductCheckout handletotal={handletotal} id={id}/>} />
            <Route path='/unavailable' element={<Unavailable />}  />
            <Route path='/purchased' element={<Purchased />} />
            {/* <Route path='/checkoutTest' element={<CheckoutTest total={total} handlePaymentLink={handlePaymentLink} />} /> */}
            <Route path='*' element={<Products/>} />
        </Routes>
    </Router>

      </div>
     
     }
    </div>
  );
}

export default App;
