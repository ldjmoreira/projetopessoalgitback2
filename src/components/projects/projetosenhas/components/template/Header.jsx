import styles from './Header.module.css'
import './Header.css'
import React, {  useContext  } from 'react'
import  { useState } from 'react'
import imagep from '../../assets/imgs/politico.png'

import AuthContext from '../../../../../store/auth-context2';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
export default props => {
  const [stateheader, setStateheader] = useState(false)

  const [stateheader2, setStateheader2] = useState(false)
  const authCtx = useContext(AuthContext)
  const history = useHistory();

  const change = (event) => {
    if(stateheader == true) {
      setStateheader(false)
    }else {
      setStateheader(true)
    }
    
  }

  const change2 = (event) => {
    if(stateheader2 == true) {
      setStateheader2(false)
    }else {
      setStateheader2(true)
    }
    
  }

 const handlechange2 = () => {
  authCtx.logout()
  history.replace('/projetos/projetosenha/auth');
}

  return (
<header className={`${styles['topnav']} ${stateheader ? styles['responsive']:''}`} >
  <a  className={`${styles['icon2']}`} onClick={e => change2(e)} >
        <i className="fa fa-chevron-right"></i>
  </a>
    <Link className={`${styles['logo']}`} to="/">
      <div className={`${styles['white-ball']}`} >
        <i className="fa fa-shield" aria-hidden="true"></i>
      </div>
    </Link>


    <Link className={`${styles['link-aside-x']}`}  onClick={handlechange2}>
          <i className="fa fa-sign-out fa-lg" aria-hidden="true"></i>   
    </Link>

    <Link className={`${styles['link-aside']} `} to="/">
              <i className="fa fa-cog fa-lg mr-2" aria-hidden="true"></i>
    </Link>

    

    <a  className={`${styles['icon']}  ${styles['topnav']} ${stateheader ? styles['change']:''}`} onClick={e => change(e)} >
      <div className={`${styles['bar1']}`}></div>
      <div className={`${styles['bar2']}`}></div>
      <div className={`${styles['bar3']}`}></div>
    </a>
 
    

    <div  className={` ${stateheader ? styles['sidenav']:styles['sidenav-mod']}`}>
      <a  className={`${styles['closebtn']}`} onClick={e => change2(e)}>&times;</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>

</header>

    )
  }