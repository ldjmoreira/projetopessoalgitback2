import React, { Fragment, useState, useEffect, useRef }  from 'react'
import './index5.css'
import Carousel from 'react-bootstrap/Carousel';

import image1tn from '../../assets/images/01.jpg'
import image2tn from '../../assets/images/02.jpg'
import image3tn from '../../assets/images/03.jpg'
import image4tn from '../../assets/images/10.jpg'


import image1txt from '../../assets/images/newImage/01.jpg'

export default  (props) => {
    
    const [stateheader, setStateheader] = useState(false)

    const change = (event) => {
        if(stateheader == true) {
          setStateheader(false)
        }else {
          setStateheader(true)
        }
        
    }

    const data = [
        {
         image: image1tn , 
         caption:"Caption1",
         description:"Description Here1"
        },
        {
          image:image2tn ,
          caption:"Caption2",
          description:"Description Here2"
         },
         {
          image:image3tn ,
          caption:"Caption3",
          description:"Description Here3"
         } 
      ]
      

    return (
      
    <Fragment>
    <div className={`topnavt  ${stateheader ? 'responsive ':''}`} >
        <a  class="logo">
        LDJ PROJETOS2
        </a>
         
        <a className="nactive" >Inicio</a>
        <a className="nactive" >About</a>
        <a className="nactive" >Features</a>
        <a className="nactive" >Portifolio</a>
        <a className="active" >Contact</a>   
        
        <a  className="icon" onClick={e => change(e)}>
            <i className="fa fa-bars"></i>
        </a>
    </div>
        

        
        <Carousel indicators={false}> 

        {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
     
           
        </Carousel>
        <div className="index-main">
            <div className="index-all-white">
            <div className="index-all-1">
             <div className="index-limited-1-c">
                 <h2>NOSSOS SERVI<span>ÇOS</span></h2>
                 <div className="re-bar-1"></div>
                 <p>
                 <span>N</span>ós trabalhamos no ramo da tecnologia em três ramos distintos. Front-end, back-end e dispositivos embarcados
                 </p>
             </div>
             <div  className="index-limited-white-c-down">
                    <div className="index-limited-white-c-down-box">
                        <div className="index-limited-white-c-down-box-img" >
                            <i class="fa fa-2x fa-television " aria-hidden="true"></i>
                        </div>
                        <div className="index-limited-white-c-down-box-text">
                            <h2>
                            Desenvolvimento Web
                            </h2>
                            <p>
                                Criação de Sites, Portais e Sistemas WEB nas mais diversas linguagens de programação web, dentre elas: PHP (vanilha ou laravel) , Node.js (express.js), ASP.Net 2.0 , 3.1 ou 5.0
                            </p>
                        </div>
                    </div>
                    <div className="index-limited-white-c-down-box">
                        <div className="index-limited-white-c-down-box-img" >
                            <i class="fa fa-2x fa-mobile" aria-hidden="true"></i>
                        </div>
                        <div className="index-limited-white-c-down-box-text">
                            <h2>     
                                Desenvolvimento mobile
                            </h2>
                            <p>
                                Desenvolvimento de Aplicativos para IOS e Android. Utilizando node.js e React Native
                            </p>
                        </div>
                    </div>
                    <div className="index-limited-white-c-down-box">
                        <div className="index-limited-white-c-down-box-img" >
                        <i class="fa fa-2x fa-shield" aria-hidden="true"></i>
                        </div>
                        <div className="index-limited-white-c-down-box-text">
                            <h2>
                                Automação
                            </h2>
                            <p>
                            Programação de dispositivos embarcados (Arduino, Raspberry, Esp32, Arms) e controle de motores e sensores.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="index-limited-1-c">
                    <h2>SOBRE O <span>PROFISSIONAL</span></h2>
                        <div className="re-bar-1"></div>
                    <p>
                        <span>N</span>ossa sociedade trabalha com profissionais qualificados e experientes, cada um com uma visão diferente e com uma capacidade diferente.
                    </p>
                </div>

                <div className="index-all-2">
                    <div className="index-all-2-text">
                        <h2>Conheça o profissional: <span>Lorion Moreira</span> </h2>
                        <p>
                            Lider da LDJPROJETOS, formado em 2013 em Ciencias Exatas e Tecnológicas, sempre foi um amante da tecnologia. Na época da Faculdade foi bolsista PIBIC da Universidade Federal do Recôncavo da Bahia no qual desenvolveu um Veiculo autônomo articulado, o qual seria melhor explicado como um carrinho que possuía programação embarcada para desviar de obstáculos. O tempo passou e sua competência foi o levando para a área de desenvolvimento de sistemas Web e mobile. Hoje, quase formado em Análise e Desenvolvimento de Sistemas, trabalha como profissional Fullstack e desenvolve projetos utilizando tecnologias como: PHP, Node.js, ASP.NET, ReactJS, Vue.js, React Native, HTML5, CSS3, para a programação de sistemas web.
                        </p>
                    </div>
                    <div className="index-all-2-img">
                    <img src={image1txt} alt="somehting" width="568" height="auto" />
                    </div>
                </div>


            </div>
            </div>

            <div className="index-all-orange">
                <div className="index-all-3">
                    <div className="index-all-3-esq">
                        <h3>
                            Obtenha o currículo atualizado do profissional
                        </h3>
                        <p>
                            currículo atualizado em 18/11/2021
                        </p>
                    </div>
                    <div className="index-all-3-dir">
                        <button className="dropbtnlo2">Download</button>
                    </div>
                </div>
            </div>

            <div className="index-limited-1-c">
                <h2>PROJETOS PRINCI<span>PAIS</span></h2>
                    <div className="re-bar-1"></div>
                <p>
                    <span>S</span>egue abaixo uma demonstração de alguns projetos desenvolvidos pela nossa equipe ao longo de 2 bons anos de carreira.
                </p>
            </div>

            <div className="index-all-white">
                <div className="index-all-4">
                    <div className="index-all-4-min">
                        <div className="blocks active">
                            <i className="fa fa-2x fa-paper-plane " aria-hidden="true"></i>
                        </div>
                        <div className="blocks">
                            <i className="fa fa-2x fa-laptop " aria-hidden="true"></i>
                        </div>
                        <div className="blocks">
                            <i class="fa fa-2x fa-code " aria-hidden="true"></i>
                        </div>
                        <div className="blocks">
                            <i class="fa fa-2x fa-paper-plane " aria-hidden="true"></i>
                        </div>

                    </div>
                    <div className="index-all-2">
                        <div className="index-all-2-text">
                            <h3>Web development </h3>
                            <p>
                                Lider da LDJPROJETOS, formado em 2013 em Ciencias Exatas e Tecnológicas, sempre foi um amante da tecnologia. Na época da Faculdade foi bolsista PIBIC da Universidade Federal do Recôncavo da Bahia no qual desenvolveu um Veiculo autônomo articulado, o qual seria melhor explicado como um carrinho que possuía programação embarcada para desviar de obstáculos. O tempo passou e sua competência foi o levando para a área de desenvolvimento de sistemas Web e mobile. Hoje, quase formado em Análise e Desenvolvimento de Sistemas, trabalha como profissional Fullstack e desenvolve projetos utilizando tecnologias como: PHP, Node.js, ASP.NET, ReactJS, Vue.js, React Native, HTML5, CSS3, para a programação de sistemas web.
                            </p>
                        </div>
                        <div className="index-all-2-img">
                            <img src={image1txt} alt="somehting" width="568" height="auto" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="index-all-grey">
                <div className="index-all-5-c">
                    <div className="index-limited-5-c">
                        <h2>LANDING <span>PAGES</span></h2>
                        <div className="re-bar-5"></div>
                        <p>
                        <span>S</span>egue abaixo uma galeria de algumas landing pages e de autoria propria com código no gitHub para você usar.
                        </p>
                    </div>
                    <div className="index-all-5-options">
                        <div className="index-all-5-options-box active">
                            <p>All Works</p>
                        </div>
                        <div className="index-all-5-options-box">
                            <p>Creative</p>
                        </div>
                        <div className="index-all-5-options-box">
                            <p>Corporate</p>
                        </div>
                        <div className="index-all-5-options-box">
                            <p>Portifolio</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        
    

    </Fragment>
    )
}