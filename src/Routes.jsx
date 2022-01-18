import React, {Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './store/auth-context2';
import axios from 'axios'
//aplicationPage
const Index = lazy(() => import('./components/main/Application2'))
const Teste = lazy(() => import('./components/teste/Teste'))

//landingPage
const LandingBluegoon = lazy(() => import('./components/landingpages/template_blugoon/Application2'))
const LandingInfiniteLoop = lazy(() => import('./components/landingpages/infinite_loop/Application'))

//projetos

//projetosenha
const ProjetoSenhaAuth = lazy(() => import('./components/projects/projetosenhas/components/auth/Auths'))
const ProjetoSenhaHome = lazy(() => import('./components/projects/projetosenhas/components/home/Home'))
const ProjetoSenhaUserCrud = lazy(() => import('./components/projects/projetosenhas/components/user/UserCrud'))
const ProjetoSenhaCadastro = lazy(() => import('./components/projects/projetosenhas/components/cadastro/Cadastro'))
const ProjetoSenhaEdit = lazy(() => import('./components/projects/projetosenhas/components/edit/Edit'))
const ProjetoSenhaPerfil = lazy(() => import('./components/projects/projetosenhas/components/perfil/Perfil'))



export default props => {
    
    const authCtx = useContext(AuthContext)
    let background;

    if(authCtx.isLoggedIn) axios.defaults.headers.common['authorization'] =`bearer ${authCtx.token}` 

    console.log(authCtx.isLoggedIn)
    console.log(authCtx.token)
    console.log(authCtx.name)
 
  
    
    return(



    <Switch>
      <Suspense fallback={ <h2>Rendering...</h2> }>
        <Route  path='/' exact>
          <Index/>
        </Route>
          
        <Route  path='/landingpage/bluegoon'>
          <LandingBluegoon />
        </Route>

        <Route   path='/landingpage/infiniteloop'>
          <LandingInfiniteLoop />
        </Route>

        <Route   path='/teste/teste'>
          <Teste />
        </Route>

        <Route path='/projetos/projetosenha/auth'>
            <ProjetoSenhaAuth />
        </Route>        

        <Route path='/projetos/projetosenha/home'>
          {authCtx.isLoggedIn && <ProjetoSenhaHome />}
          {!authCtx.isLoggedIn && <Redirect to='/projetos/projetosenha/auth' />}
        </Route>

        <Route path='/projetos/projetosenha/users'>
          {authCtx.isLoggedIn && <ProjetoSenhaUserCrud />}
          {!authCtx.isLoggedIn && <Redirect to='/projetos/projetosenha/auth' />}
        </Route>

        <Route path='/projetos/projetosenha/cadastro/senhas'>
          {authCtx.isLoggedIn && <ProjetoSenhaCadastro />}
          {!authCtx.isLoggedIn && <Redirect to='/projetos/projetosenha/auth' />}
        </Route>

        <Route path='/projetos/projetosenha/edit/senhas/:id'>
          {authCtx.isLoggedIn && <ProjetoSenhaEdit />}
          {!authCtx.isLoggedIn && <Redirect to='/projetos/projetosenha/auth' />}
        </Route>

        <Route path='/projetos/projetosenha/perfil/index'>
          {authCtx.isLoggedIn && <ProjetoSenhaPerfil />}
          {!authCtx.isLoggedIn && <Redirect to='/projetos/projetosenha/auth' />}
        </Route>

        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Suspense>
    </Switch>

    )
}


