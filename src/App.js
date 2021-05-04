import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Components/Login';
import RegistroPage from './Pages/RegistroPage';
import DetallePage from './Pages/DetallePage';


function App() {
  return (
    <BrowserRouter>
          <Route path="/" component={HomePage} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/registro" component={RegistroPage} exact/>
          <Route path="/producto/:id" component={DetallePage} exact />

        <ul>
            <li><Link to={"/"}>Home</Link></li>  
            <li><Link to={"/login"}>Login</Link></li>  
            <li><Link to={"/registro"}>Registro</Link></li>  
        </ul> 
    </BrowserRouter>
  );
}

export default App;
