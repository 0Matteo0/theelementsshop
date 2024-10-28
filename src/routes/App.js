import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from '../pages/Main';
import UserProfileSection from '../pages/perfil';
import LoginForm from '../pages/inicio';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/perfil' element={<UserProfileSection/>}/>
          <Route exact path='/inicio' element={<LoginForm/>}/>

        </Routes>
      
    </Router>
  );
}

export default App;