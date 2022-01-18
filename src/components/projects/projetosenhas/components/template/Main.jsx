import styles from './Main.module.css'
import React from 'react'
import Header from './Header'
import HeaderLogin from './HeaderLogin'
import Sidebar from './Sidebar'
import { useContext } from 'react';
import AuthContext from '../../../../../store/auth-context2';
import Footer from '../template/Footer'

export default props => {
const authCtx = useContext(AuthContext)


    

    return (
        <React.Fragment>
            
            {authCtx.isLoggedIn ?<Header  />:''}

            
            <main className={`${styles['content']}`}>
            {authCtx.isLoggedIn ?<Sidebar />:''}
                    {props.children}
            </main>
            
            
        </React.Fragment>
    )
}