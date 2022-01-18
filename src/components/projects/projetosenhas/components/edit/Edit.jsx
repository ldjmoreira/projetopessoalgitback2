import React, { useEffect } from 'react'
import Main from '../template/Main'
import  { useState } from 'react'
import styles from './Edit.module.css'
import { useContext } from 'react';
import AuthContext from '../../../../../store/auth-context2';
import { useHistory } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import * as CryptoJS from 'crypto-js';
import axios from 'axios'
import { toast} from 'react-toastify'

const baseUrl = 'http://localhost:4008'

export default props => {
    const authCtx = useContext(AuthContext)
    const history = useHistory();
    const {id} = useParams()

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
    const[modalOn2,setModalOn2] = useState(false)
    const[flaginit,setFlaginit] = useState(false)
    const[checked, setChecked] = useState(true)
    const[tchecked, settChecked] = useState("true") 
    useEffect(() => {
        console.log(state)
        axios(`${baseUrl}/password/${id}/edit`).then(resp => {
            setState((prevState) => {
                return {...prevState, user:{...prevState.user,
                    id: resp.data.id,
                    usuario: resp.data.usuario,
                    email: resp.data.email,
                    descricao: resp.data.descricao,
                    site: resp.data.site,
                    password: resp.data.password,
                    confirmPassword: '',
                    senhaMestra: ''
                }}
            })
            
        })
        setFlaginit(true)
      },[]);

      useEffect(()=>{
        if (state ) {
            setModalOn(true)
        }
        }, [flaginit]); 

        /*
        useEffect(()=>{
            if (modalOn) {
                setModalOn(true)
            }
            }, [modalOn]); 
        */

    

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
            setModalOn2(true)
        }
        

    }
    const exitModal= (event) => {
        setModalOn(false)

    }

    const seePassword = (event) => {
        let user = { ...state.user  }

        try {
            let bytes = CryptoJS.AES.decrypt(user.password, user.senhaMestra);
            let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            console.log(state)
            
            setState((prevState) => {
                return {...prevState, user:{...prevState.user,
                    password: decryptedData,
                    senhaMestra: '',
                }}
            })
            setModalOn(false)
            
        } catch (error) {
         //   alert('Senha mestra errada!')
            toast.error('senha errada')
        }
        

    }

    const savePasswordEdit = (event) => {
        let user = { ...state.user  }

        let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(user.password),
        user.senhaMestra).toString();
        
        
        user.password = ciphertext;
        user.confirmPassword = '';
        console.log(user)
        const method =  'put' 
        const url = `${baseUrl}/password/update/${user.id}` 
        console.log(user)
        axios[method](url, user)
        .then(resp => {
            toast.success('password editado com sucesso!',{autoClose: true})
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
        <div className={`${styles['box-edit']}`}> 
            <div className={`${styles['box-cadastro-tittle']}`}>
                <h6 className={`${styles['tittle']}`}>Visualização e edição de senha cadastrada</h6>
            </div>
                <div className={`${styles['box-cadastro-body']}`}>
                    <div className="form-row">
                                
 

                    <div className=" form-group  col-md-6">
                            <label for="inp2" className={`${styles['box-cadastro-body']}`}>
                            <input name="email" type="text"  placeholder="&nbsp;"
                            value={state.user.email} onChange={e => updateField(e)}/>
                            <span className={`${styles['label']}`}>E-mail*</span>
                            <span clasNames={`${styles['focus-bg']}`}></span>
                            </label>
                        </div>

                        <div className=" form-group  col-md-6">
                            <label for="inp2" className={`${styles['inp2']}`}>
                            <input name="site" type="text"  placeholder="&nbsp;"
                            value={state.user.site} onChange={e => updateField(e)}/>
                            <span className={`${styles['label']}`}>site usado*</span>
                            <span className={`${styles['focus-bg']}`}></span>
                            </label>
                        </div>
                                


                        <div className=" form-group  col-md-6">
                            <label for="inp2" className={`${styles['inp2']}`}>
                            <input name="password" type="text"  placeholder="&nbsp;"
                            value={state.user.password} onChange={e => updateField(e)}/>
                            <span className={`${styles['label']}`}>Digite a senha*</span>
                            <span className={`${styles['focus-bg']}`}></span>
                            </label>
                        </div>

                        <div className=" form-group  col-md-6">
                            <label for="inp2" className={`${styles['inp2']}`}>
                            <input name="confirmPassword" type="text"  placeholder="&nbsp;"
                            value={state.user.confirmPassword} onChange={e => updateField(e)}/>
                            <span className={`${styles['label']}`}>Confirme*</span>
                            <span className={`${styles['focus-bg']}`}></span>
                            </label>
                        </div>

                        <div className=" form-group  col-md-12">
                            <label for="inp2" className={`${styles['inp2']}`}>
                            <input name="descricao" type="text"  placeholder="&nbsp;"
                            value={state.user.descricao} onChange={e => updateField(e)}/>
                            <span className={`${styles['label']}`}>Descrição</span>
                            <span clasName={`${styles['focus-bg']}`}></span>
                            </label>
                        </div>

                        

                    </div>
                </div>

                <div className={`${checked ?styles['div-btn-cadastro']:styles['div-btn-cadastro-fade']}`}>
                    <div className={`${styles['box-cadastro-bodypluss']}`}>
                        <h6 className={`${styles['bodypluss']}`}>Campos adicionais  </h6>
                    </div>
                </div>

                <div className={`${checked ?styles['div-btn-cadastro']:styles['div-btn-cadastro-fade']}`}>
                    <div className={`${checked ? 'form-row' :''}`}>
                    
                        <div className={`${checked ? 'form-group col-md-6' :''}`}>
                            <label for="inp2" className={`${styles['inp2']}`}>
                            <input name="usuario" type="text"
                                placeholder="&nbsp;"
                            value={state.user.usuario} onChange={e => updateField(e)}/>
                            <span className={`${styles['label']}`}>Usuário</span>
                            <span clasNames={`${styles['focus-bg']}`}></span>
                            </label>
                        </div>

                        <div className={`${checked ? 'form-group col-md-6' :''}`}>
                            <label for="inp2" class={`${styles['inp2']}`}>
                                <input name="tel" type="number"  placeholder="&nbsp;"
                                value={state.user.tel} onChange={e => updateField(e)}/>
                                <span className={`${styles['label']}`}>Telefone</span>
                                <span clasNames={`${styles['focus-bg']}`}></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className={`${styles['box-cadastro-body']}`}>
                    <div className="form-row">

                        <div className={`${styles['div-btn-cadastro']}`}>

                        <div className={`${styles['div-btn-cadastroEsq']}`}>
 
                        </div>
                        <div className={`${styles['div-btn-cadastroDir']}`}>
                        <button className={`${styles['btn-lor-contrast-orange2']}`} onClick={e => 
                            generatePassword(e)} >
                            Gerar novo password
                        </button>

                        <button className={`${styles['btn-lor-orange2']}`}
                            onClick={e => 
                            savePassword1(e)}>
                            Editar
                            </button>
                        </div>

                            
                        </div>
                    </div>
                </div>

        </div>

        <div  className={`${modalOn ?styles.modal2:styles.modal2f }`} >


        <div className={`${styles['modal-content2']}`}>
            <div className={`${styles['modal-header2']}`}>
            <span className={`${styles['close']}`} onClick={e => 
                            exitModal(e)}>&times;</span>
                <h2>Digite a senha mestra para salvar a sua senha na nuvem</h2>
            </div>
            <div className={`${styles['modal-body2']}`}>
                <label for="inp2" className={`${styles['inp2']}`}>
                    <input name="senhaMestra" type="text"  placeholder="&nbsp;"
                    value={state.user.senhaMestra} onChange={e => updateField(e)}/>
                    <span className={`${styles['label']}`}>senhaMestra </span>
                    <span className={`${styles['focus-bg']}`}></span>
                </label>
            </div>
            <div className={`${styles['modal-footer2']}`}>

                <button className={`${styles['btn-modal2']}`}
                            onClick={e => 
                            seePassword(e)}>
                            Ver senha
                </button>
            </div>
            </div>

        </div>  

        <div  className={`${modalOn2 ?styles.modal2:styles.modal2f }`} >


            <div className={`${styles['modal-content2']}`}>
            <div className={`${styles['modal-header2']}`}>
            <span className={`${styles['close']}`} onClick={e => 
                            exitModal(e)}>&times;</span>
                <h2>Digite a senha mestra para editar sua senha na nuvem</h2>
            </div>
            <div className={`${styles['modal-body2']}`}>
                <label for="inp2" className={`${styles['inp2']}`}>
                    <input name="senhaMestra" type="text" id="inp2" placeholder="&nbsp;"
                    value={state.user.senhaMestra} onChange={e => updateField(e)}/>
                    <span className={`${styles['label']}`}>senhaMestra </span>
                    <span className={`${styles['focus-bg']}`}></span>
                </label>
            </div>
            <div class={`${styles['modal-footer2']}`}>

                <button className={`${styles['btn-modal2']}`}
                            onClick={e => 
                                savePasswordEdit(e)}>
                            editar senha
                </button>
            </div>
            </div>

            </div>  
    </Main>
    )
}