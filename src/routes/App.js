import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from '../pages/Main';
import UserProfileSection from '../pages/perfil';
import LoginForm from '../pages/inicio';
import Register from '../pages/Register'
import Cart from '../pages/Carrito'
import ShopHomepage from '../components/ShopHomepage';
import perfil from '../components/perfil';



function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/perfil' element={<UserProfileSection/>}/>
          <Route exact path='/inicio' element={<LoginForm/>}/>
          <Route exact path='/registro' element={<Register/>}/>
          <Route exact path='/Cart' element={<Cart/>}/>
          <Route exact path='/Shophomepage' element={<ShopHomepage/>}/>
          <Route exact path='/password' element={<password/>}/>
          <Route exact path='/perfil' element={<perfil/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;