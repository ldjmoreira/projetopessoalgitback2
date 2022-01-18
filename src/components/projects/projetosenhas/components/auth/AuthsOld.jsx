import React, { Component, useContext  } from 'react'
import  { useState } from 'react'

import Main from '../template/Main'
import AuthContext from '../../store/auth-context2';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { baseUrl, userKeyy } from "../../global"
import HeaderLogin from '../template/HeaderLogin'
import { toast} from 'react-toastify'
import './Auths.css'
//

const initialState = {
    user: {
    name: '',
    email: '',
    password: '', 
    confirmPassword: '',
    
  
  },
  showSignup: false, 
    list: []
}

/*
let showSignups = '';
*/
const  UserCrud = (props) => {

    const history = useHistory();
    const authCtx = useContext(AuthContext)

    const [state, setState] = useState(
        {user:
            {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
            },
        showSignup: false,
        list: []
        }
    )

    const load = (user) => {
        setState({ user })
    }

 const remove = (user) => {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = getUpdatedList(user, false)
            setState({ list })
        })
    }


    const clear= ()=> {
        setState({ user: initialState.user })
    }

    const change= (event)=> {
        event.preventDefault()
        setState({ user: state.user, showSignup: !state.showSignup, list: state.list })
    }

    const signin =() => {

        const user = state.user
        const method = 'post'
        const url =  `${baseUrl}/login`
        axios[method](url, {email: user.email, password: user.password})
            .then(data => {
                const expirationTime = new Date(
                    data.data.exp *1000
                  );
                  console.log(data.data)
                  console.log(expirationTime)
                 authCtx.login(data.data,expirationTime.toISOString())
                 //  authCtx.login(data.data.token,expirationTime)
                  history.replace('/');
            })
            .catch(

                function (error) {
//                    console.log("typeof(error)")
//                    console.log(error.response)
                    
                    try {
                        if(error.response.data) {
                            toast.error(error.response.data,{autoClose: false})
                        } else if (error) {
                            toast.error(error.response.data,{autoClose: false})
                        }
                    } catch (error) {
                        toast.error('O serviço encontrou um erro inesperado',{autoClose: false})
                    }


                    
                  }
            )
    }
    const signup =() => {
        const user = state.user
        const method = 'post'
        const url =  `${baseUrl}/signup`
        axios[method](url, {name: user.name, 
            email: user.email, 
            password: user.password, 
            confirmPassword: user.confirmPassword})
            .then(data => {
                reset();
                toast.success('Usuário criado! Agora só logar!',{autoClose: false})
            })
            .catch(
                
                function (error) {
//                    console.log("typeof(error)")
                   console.log(error.response)
                toast.error(error.response.data,{autoClose: false})
                reset();
                }
            )
    }
    const reset =() =>{
        setState(        {user:
            {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
            },
        showSignup: false,
        list: []
        })
    }

    const getUpdatedList= (user, add = true) => {
        const list = state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    const updateField = (event) => {
        const user = { ...state.user }
        user[event.target.name] = event.target.value
        setState((prevState) => {
            return {...prevState, user }
        })
    }
           

     //showSignups = state.showSignup
    
        return (
            <div className="auth-envelope2">
                <div className="auth-envelope">
                            <HeaderLogin  />

                        <div className="auth-content-both">

                            
                            <div className="auth-content-esq" >
                                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                                <h1>Guarda Senhas</h1>
                                <p>
                                We are the best and biggest social network with 5 billion active users all around the world. Share you thoughts, write blog posts, show your favourite music via Stopify, earn badges and much more!

                                </p>
                                {state.showSignup && (
                                <button onClick={e => change(e)} className="btn-lor">Entrar</button>
                                )}



                                {!state.showSignup && (
                                <button onClick={e => change(e)} className="btn-lor">Registrar</button>
                                )}

                            </div>
                            <div className="auth-content mt-5">
                            <div className="auth-modal">
                                {!state.showSignup && (
                                <h3>Basta Logar!</h3>
                                )}
                                {state.showSignup && (
                                <h3>Registre-se facil</h3>
                                )}
                                
                                <hr/>

                                {state.showSignup && (
                                <div className="form-row">
                                
                                    <div className=" form-group  col-md-6">
                                        <label for="inp" class="inp">
                                        <input name="email" type="text"  placeholder="&nbsp;"
                                        value={state.user.email} onChange={e => updateField(e)}/>
                                        <span className="label">E-mail</span>
                                        <span clasNames="focus-bg"></span>
                                        </label>
                                    </div>
                                    
                                    <div className=" form-group  col-md-6">
                                        <label for="inp" className="inp">
                                        <input name="name" type="text"  placeholder="&nbsp;"
                                        value={state.user.name} onChange={e => updateField(e)}/>
                                        <span className="label">Nome</span>
                                        <span className="focus-bg"></span>
                                        </label>
                                    </div>

                                    <div className=" form-group  col-md-12">
                                        <label for="inp" className="inp">
                                        <input name="password" type="text"  placeholder="&nbsp;"
                                        value={state.user.password} onChange={e => updateField(e)}/>
                                        <span className="label">Password</span>
                                        <span className="focus-bg"></span>
                                        </label>
                                    </div>

                                    <div className=" form-group  col-md-12">
                                        <label for="inp" className="inp">
                                        <input name="confirmPassword" type="text"  placeholder="&nbsp;"
                                        value={state.user.confirmPassword} onChange={e => updateField(e)}/>
                                        <span className="label">Só confirmar </span>
                                        <span className="focus-bg"></span>
                                        </label>
                                    </div>

                                </div>
                                )} 

                                {!state.showSignup && (
                                <div class="form-row">
                                
                                    <div className=" form-group  col-12 col-md-12">
                                        <label for="inp" class="inp">
                                        <input name="email" type="text"  placeholder="&nbsp;"
                                        value={state.user.email} onChange={e => updateField(e)}/>
                                        <span className="label">E-mail</span>
                                        <span className="focus-bg"></span>
                                        </label>
                                    </div>
                                       

                                <div className="form-group col-12 col-md-12">
                                <label for="inp" className="inp">
                                        <input name="password" type="password"  placeholder="&nbsp;"
                                                                value={state.user.password}
                                                                onChange={e => updateField(e)}/>
                                        <span className="label">Senha</span>
                                        <span className="focus-bg"></span>
                                        </label>
                                </div>

                            <div className="form-group col-12 col-md-12">
                                <label for="inp" class="inp">
                                        <input name="confirmPassword" type="password"  placeholder="&nbsp;"
                                                                value={state.user.confirmPassword}
                                                                onChange={e => updateField(e)}/>
                                        <span class="label">Confirmação</span>
                                        <span class="focus-bg"></span>
                                        </label>
                            </div>
                        </div>
                                )} 

                            {!state.showSignup && (
                            <button className="btn2"
                            onClick={e => signin(e)}>
                                Entrar
                            </button>
                            )}
                                                
                            {state.showSignup && (
                            <button className="btn2"
                            onClick={e => signup(e)}>
                                Registrar
                            </button>
                            )}
 
                                    
                    </div>




                    </div>
                        </div>
                </div>
            </div>
       

        )
    


    
};

export default UserCrud