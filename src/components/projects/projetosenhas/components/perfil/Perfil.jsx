import React from 'react'
import Main from '../template/Main'
import  { useState } from 'react'
import styles from './Perfil.module.css'
import { useContext } from 'react';
import AuthContext from '../../../../../store/auth-context2';
import { useHistory } from 'react-router-dom';
import * as CryptoJS from 'crypto-js';
import axios from 'axios'
import { toast} from 'react-toastify'

const baseUrl = 'http://localhost:4008'

export default props => {
    const [state, setState] = useState(
        {user:
            {
            usuario:'',
            email:'',
            tel:'',
            descricao: '',
            site: '',
            password: '',
            confirmPassword: '',
            senhaMestra: ''
            },

        }
    )

    const savePassword1 = (event) => {
        const user = { ...state.user  }
        if (user.password == user.confirmPassword) {
            console.log('teste')
        }
        
    }
    const updateField = (event) => {
        const user = { ...state.user }
        user[event.target.name] = event.target.value
        setState((prevState) => {
            return {...prevState, user }
        })
    }
    return (
    <Main>
       <div className={`${styles['box-perfil']}`}> 
            <div className={`${styles['box-perfil-tittle']}`}>
                <h6 className={`${styles['tittle']}`}>Configurações de perfil </h6>
            </div>
            <div className={`${styles['box-perfil-body-borderdown']}`}>
                <h6 className={`${styles['perfil-tittle']}`}>Mudar o email de cadastro </h6>
                <div className={`${styles['form-row displayflex']}`}>
                    <div className={`${styles['perfil-form-row-esq']}`}>
                        <div className="   col-md-6">
                            <label for="inp4" class={`${styles['inp4']}`}>
                            <input name="email" type="text"  placeholder="&nbsp;"
                            value={state.user.email} onChange={e => updateField(e)}/>
                            <span className={`${styles['label']}`}>E-mail*</span>
                            <span clasName={`${styles['focus-bg']}`}></span>
                            </label>
                        </div>
                        <div className="   col-md-6">
                            <label for="inp4" class="inp4">
                            <input name="email" type="text"  placeholder="&nbsp;"
                            value={state.user.email} onChange={e => updateField(e)}/>
                            <span className="label">E-mail*</span>
                            <span clasName="focus-bg"></span>
                            </label>
                        </div>
                    </div>
                    <div className="perfil-form-row-dir">
                        <div className="perfil-icon">
                            <i className="fa fa-hdd-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="box-perfil-body-borderdown">
                <h6 className="perfil-tittle">Mudar senha de cadastro </h6>
                <div className="form-row displayflex">
                    <div className="perfil-form-row-esq">
                        <div className="   col-md-6">
                            <label for="inp4" class="inp4">
                            <input name="email" type="text"  placeholder="&nbsp;"
                            value={state.user.email} onChange={e => updateField(e)}/>
                            <span className="label">E-mail*</span>
                            <span clasNames="focus-bg"></span>
                            </label>
                        </div>
                        <div className="   col-md-6">
                            <label for="inp4" class="inp4">
                            <input name="email" type="text"  placeholder="&nbsp;"
                            value={state.user.email} onChange={e => updateField(e)}/>
                            <span className="label">E-mail*</span>
                            <span clasNames="focus-bg"></span>
                            </label>
                        </div>
                    </div>
                    <div className="perfil-form-row-dir">
                        <div className="perfil-icon">
                            <i className="fa fa-hdd-o" aria-hidden="true"></i>
                        </div>
                    </div>
 
                </div>
            </div>
            <div className="notification-perfil" >
                <div className="notification-perfil-esq">
                    <div clasName="h6">
                    <h6>Importar cadastro de senhas</h6> 
                    </div>
                    <p>Você importará o cadastro de senhas em formato cls</p>
                </div>
                <div className="notification-perfil-dir">
                    <div className="perfil-icon2">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>

            </div>
            <div className="notification-perfil" >
                <div className="notification-perfil-esq">
                    <div clasName="h6">
                    <h6>Excluir perfil e senhas</h6> 
                    </div>
                    <p>Excluir perfil e senhas cadastradass</p>
                </div>
                <div className="notification-perfil-dir">
                    <div className="perfil-icon2">
                    <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>

            </div>

       </div>
    </Main>
    )
}