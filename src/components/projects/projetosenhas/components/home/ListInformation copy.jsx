import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../store/auth-context2';
import { Link, useHistory } from 'react-router-dom'
import './ListInformation.css'

export default props => {
    const authCtx = useContext(AuthContext)
    const history = useHistory();


    const load = (user) => {
        
        history.push(`/edit/senhas/${user.id}`);
        
    }

    return props.list.map(user => {
        return (
        
        <div key={user.id} className="menu-list">
            <ul className="table-senhas-ul">
                <li className="table-senhas-li">
                    <span className="date">                 
                    {(new Date(user.datap)).toLocaleDateString('pt-BR') }
                    </span>   
                    <span className="position-bold">                 
                        {!user.usuario ? <i class="fa fa-minus" aria-hidden="true"></i> :user.usuario }
                    </span>    
                    <span className="type-bold">                 
                        {user.email}
                    </span>  
                    <span className="type-bold">                 
                        {user.site}
                    </span>  
                    <span className="button" onClick={() => load(user)}>       
                    <i class="fa fa-address-card-o" aria-hidden="true"></i>          

                    </span>        
                    <span className="button" onClick={() => props.showModalProp(user) }>       
                    <i class="fa fa-times" aria-hidden="true"></i>        

                    </span>   
                </li>
            </ul>
        </div>

        )
    })


        

    
}
