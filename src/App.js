import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'



import image2txt from './assets/images/01.jpg'
import image3txt from './assets/images/academia.png'
import image4txt from './assets/images/politicaai2.jpg'
import image5txt from './assets/images/seemore.png'

import { useContext } from 'react';
import AuthContext from './store/auth-context2';

import { toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default props => {

  const authCtx = useContext(AuthContext)

  return (
    <BrowserRouter>
    <div className="App">
      <Routes  /> 
    </div>
    </BrowserRouter>

  );
}


