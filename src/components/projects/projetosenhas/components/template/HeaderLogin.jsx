import styles from './HeaderLogin.module.css'
import React, {  useContext  } from 'react'

import AuthContext from '../../../../../store/auth-context2';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
export default props => {

  const authCtx = useContext(AuthContext)
  const history = useHistory();

  const handlechange2 = (event) => {
    authCtx.logout()
    history.replace('/auth');
 }

  return (
    <header className={` ${styles['header-login']}`}>
      <nav className={` ${styles['nav-loaded']}`}>
        <ul className={` ${styles['nav_items']}`}>
          <li className={` ${styles['nav_item']}`}>
              <a href="" className={` ${styles['nav_link']}`}>
                <span className="nav_label">doação</span>
              </a>
          </li>
          <li className={` ${styles['nav_item']}`}>
              <a href="" className={` ${styles['nav_link']}`}>
                <span className={` ${styles['nav_label']}`}>sobre</span>
              </a>
          </li>
          <li className={` ${styles['nav_item']}`}>
              <a href="" className={` ${styles['nav_link']}`}>
                <span className={` ${styles['nav_label']}`}>outros serviços</span>
              </a>
          </li>


        </ul>
      </nav>
      
    </header>

    )
  }