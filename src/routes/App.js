import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from '../pages/Main';
import Register from '../pages/Register'
import Cart from '../pages/Carrito'

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/registro' element={<Register/>}/>
          <Route exact path='/Cart' element={<Cart/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;