import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from '../pages/Main';
import Register from '../pages/Register'
import Cart from '../pages/Carrito'
import ShopHomepage from '../components/ShopHomepage';
import Registerjob from '../pages/Registerjob';
import PaymentDetails from '../pages/Paymentdetails';
import DetallesProd from '../pages/DetallesProducto.js'


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/registro' element={<Register/>}/>
          <Route exact path='/Cart' element={<Cart/>}/>
          <Route exact path='/Shophomepage' element={<ShopHomepage/>}/>
          <Route exact path='/registrotrabajador' element={<Registerjob/>}/>
          <Route exact path='/payment' element={<PaymentDetails/>}/>
          <Route exact path='/details12' element={<DetallesProd/>}/>

        </Routes>
      
    </Router>
  );
}

export default App;