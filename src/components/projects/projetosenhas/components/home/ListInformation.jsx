import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../../../../store/auth-context2';
import { Link, useHistory } from 'react-router-dom'
import styles from './ListInformation.module.css'

export default props => {
    const authCtx = useContext(AuthContext)
    const history = useHistory();


    const load = (user) => {
        
        history.push(`/edit/senhas/${user.id}`);
        
    }

    return props.list.map(user => {
        return (
        
        <div key={user.id} className={`${styles['menu-list']}`}>
            <ul className={`${styles['table-senhas-ul']}`}>
                <li className={`${styles['table-senhas-li']}`}>
                    <span className={`${styles['date']}`}>                 
                    {(new Date(user.datap)).toLocaleDateString('pt-BR') }
                    </span>   
                    <span className={`${styles['position-bold']}`}>                 
                        {!user.usuario ? <i class="fa fa-minus" aria-hidden="true"></i> :user.usuario }
                    </span>    
                    <span className={`${styles['type-bold']}`}>                 
                        {user.email}
                    </span>  
                    <span className={`${styles['type-bold']}`}>                 
                        {user.site}
                    </span>  
                    <span className={`${styles['button']}`} onClick={() => load(user)}>       
                    <i class="fa fa-address-card-o" aria-hidden="true"></i>          

                    </span>        
                    <span className={`${styles['button']}`} onClick={() => props.showModalProp(user) }>       
                    <i class="fa fa-times" aria-hidden="true"></i>        

                    </span>   
                </li>
            </ul>
        </div>

        )
    })


        

    
}
