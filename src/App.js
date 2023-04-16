import './style/app.scss'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './component/Home'
import Headers from './component/header'
import { Toaster } from 'react-hot-toast';
import Cart from './component/cart';

function App() {
  return (
   <BrowserRouter>
   <Headers/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
   <Toaster/>
   </BrowserRouter>
  );
}

export default App;
