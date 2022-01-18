import React, { useEffect }  from 'react'
import Main from '../template/Main'
import ListInformation from './ListInformation'
import './Home.css'
import { useContext } from 'react';
import AuthContext from '../../store/auth-context2';
import { Link } from 'react-router-dom'
import  { useState } from 'react'
import axios from 'axios'
import { baseUrl, userKeyy } from "../../global"
import { toast} from 'react-toastify'
const initialState = {
    user: { id:'',senhaMestra:'' },
    list: []
}

export default props => {
    const authCtx = useContext(AuthContext)
    const [state, setState] = useState(initialState)
    const[modalOn,setModalOn] = useState(false)

    useEffect(() => {
        axios(`${baseUrl}/password/index`).then(resp => {
            setState((prevState) => {
                return {...prevState, list: resp.data }
            })
            console.log('resp.data')
        })
    },[]);

      const showModal= (user) => {
        setState((prevState) => {
            return {...prevState, user:{id: user.id, senhaMestra:''} }
        })
        setModalOn(true)
        console.log(user)

        }
    const exitModal= (event) => {
        setModalOn(false)
    }

    const updateField = (event) => {
        const user = { ...state.user }
        user[event.target.name] = event.target.value
        setState((prevState) => {
            return {...prevState, user }
        })
    }

    const remove = (e) => {
    
        axios.post(`${baseUrl}/password/deletePost`,state.user ).then(resp => {
            const list = getUpdatedList(state.user, false)
            setState((prevState) => {
                return {...prevState, list: list }
            })
            setModalOn(false)
            toast.success('Usuário criado!',{autoClose: false})
        })        
        .catch(
            function (error) {
               toast.error(error.response.data,{autoClose: false})
              console.log(error)
              }
        )
    }

    const getUpdatedList = (user, add = true) => {

        const list = state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    return (
        <Main>
            <div className="box">
                <div className="menu-indice">
                    <span className="indice-span-data">
                            Data
                    </span>
                    <span className="indice-span-user">
                            Usuário
                    </span>
                    <span className="indice-span-email">
                            Email
                    </span>
                    <span className="indice-span-site">
                            Site usado
                    </span>
                    
                </div>
                <ListInformation list={state.list} showModalProp={showModal}/>

                <link rel="stylesheet" href="" />
                <Link className="link-aside"  to="/cadastro/senhas">
                <button className="btn-home">+</button>
                </Link>
                    
            </div>

            <div  className={`${modalOn ? 'modal2' : 'modal2f'}`} >


                <div className="modal-content2">
                <div className="modal-header2">
                <span className="close" onClick={e => 
                                exitModal(e)}>&times;</span>
                    <h2>Digite a senha mestra para deleta o registro </h2>
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
                                remove(e)}>
                                Deletar
                    </button>
                </div>
                </div>

            </div>  

        </Main>
    )
}
