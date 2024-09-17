import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from '../pages/Main';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;