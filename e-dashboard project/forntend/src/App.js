import './App.css';
import Nav from './commponents/Nav'
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Footer from './commponents/Footer';
import SignUp from './commponents/SignUp';
import PrivatComponent from './commponents/PrivatComponet';
import Login from './commponents/Login';
import AddProduct from './commponents/AddProduct';
import Productlist from './commponents/Productlist';
import UpdateProduct from './commponents/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        
        <Route element={<PrivatComponent/>}>
        <Route path="/" element={<Productlist />}></Route>
        <Route path="/add" element={<AddProduct/>}></Route>
        <Route path="/update/:id" element={<UpdateProduct />}></Route>
        <Route path="/profile" element={<h1>profile Product Component</h1>}></Route>
        <Route path="/logout" element={<h1>logout Product Component</h1>}></Route>
        </Route>

        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
