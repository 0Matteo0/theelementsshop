import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from '../pages/Main';
import ShopHomepage from '../components/ShopHomepage';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/Shophomepage' element={<ShopHomepage/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;