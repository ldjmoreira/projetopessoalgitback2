import React from 'react'
import Main from '../template/Main'
import  { useState } from 'react'
import './Cadastro.css'
import { useContext } from 'react';
import AuthContext from '../../store/auth-context2';
import { useHistory } from 'react-router-dom';
import * as CryptoJS from 'crypto-js';
import axios from 'axios'
import { toast} from 'react-toastify'

const baseUrl = 'http://localhost:4008'

export default props => {
    const authCtx = useContext(AuthContext)
    const history = useHistory();

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
    const[modalOn,setModalOn] = useState(false)
    const[checked, setChecked] = useState(true)
    const[tchecked, settChecked] = useState("true")
    const generatePassword = (event) => {
        let length = 10,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#$%",
        retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        const user = { ...state.user }
        user['password'] = retVal

        setState((prevState) => {
            return {...prevState, user }
        })
    }
    const savePassword1 = (event) => {
        const user = { ...state.user  }
        if (user.password == user.confirmPassword) {
            setModalOn(true)
        }
        

    }
    const exitModal= (event) => {
        setModalOn(false)
    }

    const savePassword2 = (event) => {
        let user = { ...state.user  }

        let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(user.password),
        user.senhaMestra).toString();
        
        
        user.password = ciphertext;
        user.confirmPassword = '';
        console.log(user)
        const method =  'post' 
        const url = `${baseUrl}/password/create` 
        axios[method](url, user)
        
        .then(resp => {
            toast.success('password adicionado!',{autoClose: true})
            history.push(`/`);
            
        })
        .catch(

            function (error) {
                toast.error(error.response.data,{autoClose: false})
                setState((prevState) => {
                    return {...prevState, user:{...prevState.user, senhaMestra: '' }}
                })
              }
              
        )
       /*
        let bytes = CryptoJS.AES.decrypt(ciphertext, user.senhaMestra);
        let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log(decryptedData)
        */
    }

    const inputRadioEvent = () => {
        if(checked) {setChecked(false)}else{setChecked(true)}
        if(tchecked == "true" ) {settChecked("false")}else{settChecked("true")}
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
        <div className="box-cadastro"> 
                <div className="box-cadastro-tittle">
                    <h6 className="tittle">Cadastre aqui sua senha!  </h6>
                </div>
                <div className="box-cadastro-body">
                    <div className="form-row">


                        <div className=" form-group  col-md-6">
                            <label for="inp2" class="inp2">
                            <input name="email" type="text"  placeholder="&nbsp;"
                            value={state.user.email} onChange={e => updateField(e)}/>
                            <span className="label">E-mail*</span>
                            <span clasNames="focus-bg"></span>
                            </label>
                        </div>

                        <div className=" form-group  col-md-6">
                            <label for="inp2" className="inp2">
                            <input name="site" type="text"  placeholder="&nbsp;"
                            value={state.user.site} onChange={e => updateField(e)}/>
                            <span className="label">site usado*</span>
                            <span className="focus-bg"></span>
                            </label>
                        </div>
                                


                        <div className=" form-group  col-md-6">
                            <label for="inp2" className="inp2">
                            <input name="password" type="text"  placeholder="&nbsp;"
                            value={state.user.password} onChange={e => updateField(e)}/>
                            <span className="label">Digite a senha*</span>
                            <span className="focus-bg"></span>
                            </label>
                        </div>

                        <div className=" form-group  col-md-6">
                            <label for="inp2" className="inp2">
                            <input name="confirmPassword" type="text"  placeholder="&nbsp;"
                            value={state.user.confirmPassword} onChange={e => updateField(e)}/>
                            <span className="label">Confirme*</span>
                            <span className="focus-bg"></span>
                            </label>
                        </div>

                        <div className=" form-group  col-md-12">
                            <label for="inp2" class="inp2">
                            <input name="descricao" type="text"  placeholder="&nbsp;"
                            value={state.user.descricao} onChange={e => updateField(e)}/>
                            <span className="label">Descrição</span>
                            <span clasNames="focus-bg"></span>
                            </label>
                        </div>
                        

                        

                    </div>
                </div>
                <div className={`${checked ? 'div-btn-cadastro' : 'div-btn-cadastro-fade'}`}>
                    <div className="box-cadastro-bodypluss">
                        <h6 className="bodypluss">Campos adicionais  </h6>
                    </div>
                </div>
                <div className={`${checked ? 'box-cadastro-body' :'box-cadastro-body-fade'}`}>
                    <div className={`${checked ? 'form-row' :''}`}>
                    
                        <div className={`${checked ? 'form-group col-md-6' :''}`}>
                            <label for="inp2" class="inp2">
                            <input name="usuario" type="text"
                                placeholder="&nbsp;"
                            value={state.user.usuario} onChange={e => updateField(e)}/>
                            <span className="label">Usuário</span>
                            <span clasNames="focus-bg"></span>
                            </label>
                        </div>

                        <div className={`${checked ? 'form-group col-md-6' :''}`}>
                            <label for="inp2" class="inp2">
                                <input name="tel" type="number"  placeholder="&nbsp;"
                                value={state.user.tel} onChange={e => updateField(e)}/>
                                <span className="label">Telefone</span>
                                <span clasNames="focus-bg"></span>
                            </label>
                        </div>
                    </div>
                </div>
                
                <div className="box-cadastro-body">
                    <div className="form-row">

                        <div className="div-btn-cadastro">

                        <div className="div-btn-cadastroEsq">
                            <input type="checkbox"
                            id="javascript"
                            name="fav_language"
                            value="JavaScript"
                            checked={checked}
                            onChange={inputRadioEvent}
                            >
                            </input>
                            <span className="ml-2"><h5>possui campos adicionais?</h5></span>  
                        </div>
                        <div className="div-btn-cadastroDir">
                        <button className="btn-lor-contrast-orange2" onClick={e => 
                            generatePassword(e)} >
                            Gerar password
                        </button>

                            <button className="btn-lor-orange2"
                            onClick={e => 
                            savePassword1(e)}>
                            Adicionar
                            </button>
                        </div>

                            
                        </div>
                    </div>
                </div>
        </div>

        <div  className={`${modalOn ? 'modal2' : 'modal2f'}`} >


            <div className="modal-content2">
            <div className="modal-header2">
            <span className="close" onClick={e => 
                            exitModal(e)}>&times;</span>
                <h2>Digite a senha mestra para salvar a sua senha na nuvem</h2>
            </div>
            <div className="modal-body2">
                <label for="inp2" className="inp2">
                    <input name="senhaMestra" type="text"  placeholder="&nbsp;"
                    value={state.user.senhaMestra} onChange={e => updateField(e)}/>
                    <span className="label">senhaMestra </span>
                    <span className="focus-bg"></span>
                </label>
            </div>
            <div class="modal-footer2">

                <button className="btn-modal2"
                            onClick={e => 
                            savePassword2(e)}>
                            Adicionar
                </button>
            </div>
            </div>

        </div>  
    </Main>
    )
}