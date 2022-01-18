import styles from './Sidebar.module.css'
import React, {  useContext  } from 'react'
import { useState } from 'react'
import AuthContext from '../../../../../store/auth-context2';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
export default props => {

  const authCtx = useContext(AuthContext)
  const history = useHistory();
  
  const [cadSenha, setcadSenha] = useState(false)
  const [cadPerfil, setcadPerfil] = useState(false)

  const handlechange2 = (event) => {
    authCtx.logout()
    history.replace('/auth');
 }
 const MenuCadSenha = (event) => {
  event.preventDefault();
   if (cadSenha) {setcadSenha(false)}else{setcadSenha(true)}
  
}
const MenuCadPerfil = (event) => {
  event.preventDefault();
   if (cadPerfil) {setcadPerfil(false)}else{setcadPerfil(true)}
}


  return (
<aside className={`${styles['sidebar']}`}>
  <nav className={`mt-1 ${styles['menu']}`}>
     <ul className={`${styles['nav-list']}`}>
        <li className={`${styles['nav-item']}`}>
          <Link className={`${styles['link-aside']}`}  to="/">
              <div className={`${styles['lateral-nome']}`} >
              Página inicial
              </div>
              <i className="fa fa-home" aria-hidden="true"></i>
            </Link>
        </li>
        <li className={`${styles['nav-item']}`} >
          <Link className={`${styles['link-aside']}`}  to="/2"onClick={e => MenuCadSenha(e)}>
          
            <div className={`${styles['lateral-nome']}`}>
            Cadastro de senhas
            </div>
            <i class={` ${!cadSenha ? 'fa fa-chevron-down' : 'fa fa-chevron-right'} `} aria-hidden="true"></i>
          </Link>
          </li>
          <li className={`${styles['nav-item']} ${!cadSenha ? 'w3-hide ' : 'w3-animate-top'} `}>
            <Link className={`${styles['link-aside']}`}  to="/projetos/projetosenha/cadastro/senhas">
            
              <div className={`${styles['lateral-lista-filho']}`}>
              cadastrar nova senha
              </div>
              
            </Link>
            </li>
          <li className={`${styles['nav-item']}`}>
          <Link className={`${styles['link-aside']}`}  to="/" onClick={e => MenuCadPerfil(e)}>
          
            <div className={`${styles['lateral-nome']}`}>
              Perfil
            </div>
            <i className={` ${!cadSenha ? 'fa fa-chevron-down' : 'fa fa-chevron-right'} `} aria-hidden="true"></i>
          </Link>
          </li>
          <li className={`${styles['nav-item']} ${!cadPerfil ? 'w3-hide ' : 'w3-animate-top'} `}>
            <Link className={`${styles['link-aside']}`}  to="/projetos/projetosenha/perfil/index">
            
              <div className={`mr-3 ${styles['lateral-lista-filho']}`}>
                modificar perfil
              </div>
              
            </Link>
            </li>
     </ul>
  </nav >
</aside>

    )
  }