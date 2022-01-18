
import React, {  useEffect  } from 'react'
import  { useState } from 'react'
import axios from 'axios'

const baseUrl = 'https://backendlorion2.herokuapp.com'
const initialState = {
    list2:{},
    list: {}
}

export default props => {

    const [state, setState] = useState('')
    const [state2, setState2] = useState('')

    useEffect(() => {
        axios(`${baseUrl}/testget`).then(resp => {
            setState(resp.data.data)
        })
      },[]);


      const load = () => {
        axios(`${baseUrl}/testget`).then(resp => {
            setState2(resp.data.data)
            console.log(resp.data)
        })  
    }

  return (
      
<>
<h1>Segue o carregamento automatico</h1>
{state}
<br/>
Segue o carregamento por botao
<button onClick={() => load()}> <h3>load</h3></button>
{state2}
</>
    )
  }