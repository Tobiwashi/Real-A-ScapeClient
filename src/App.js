import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Spain from './components/Spain'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/spain' element={<Spain />}></Route>
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
