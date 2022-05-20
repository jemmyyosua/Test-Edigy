import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddProduct from './components/addProduct'
import Test1 from './pages/Test1'
import Test2 from './pages/Test2'
import Test3 from './pages/Test3'
import Updateroduct from './components/updateProduct';
import Detail from './pages/detailProduct';

export default function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<Test1/>} />
          <Route path='/test1' element={<Test1/>} />
          <Route path='/test2' element={<Test2/>} />
          <Route path='/test3' element={<Test3/>} />
          <Route path='/detailProduct/:id' element={<Detail/>} />
          <Route path='/updateProduct/:id' element={<Updateroduct/>} />
          <Route path='/addProduct' element={<AddProduct/>} />
        </Routes>
      </Router>
    </div>
  );
}

