import React, { Fragment, useState, useEffect, useRef, useCallback }  from 'react'
import './index5.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link , useHistory} from 'react-router-dom'
import image1tn from '../../assets/images/01.jpg'
import image2tn from '../../assets/images/10.jpg'
import image3tn from '../../assets/images/03.jpg'
import image4tn from '../../assets/images/10.jpg'


import image1txt from '../../assets/images/newImage/lorion.png'

import image2txt from '../../assets/images/InfiniteLoop.jpg'
import image3txt from '../../assets/images/bluegoon2.jpg'
import image4txt from '../../assets/images/guardasenhas.jpg'
import image5txt from '../../assets/images/seemore.png'

import image6txt from '../../assets/images/saudeon.jpg'

const dataphotos = [
    {
        image: image2txt , 
        name: "/landingpage/infiniteloop",
        description:"Description Here1",
        filtro: "algo1",
        filtrox: "all"
        },
        {
        image:image3txt ,
        name: "/landingpage/bluegoon",
        description:"Description Here2",
        filtro: "algo2",
        filtrox: "all"
        },
        {
        image:image4txt ,
        name: "/landingpage/something",
        description:"Description Here3",
        filtro: "algo3",
        filtrox: "all"
        } 
    
]

export default  (props) => {
    let history = useHistory();
    const baseUrla = 'http://ldjmoreira.ddns.net:4005'
    const baseUrli = 'http://localhost:4005'

    function handleClick() {
        history.push("/infinite");
    }
    const load = (url) => {
        console.log(url)
        history.push(`${url}`);
        
    }
    const [stateheader, setStateheader] = useState(false)

    const [formState, setFormState] = useState({name:'', partido: ''})


    const [statefilter, setStatefilter] = useState({
        filterQuery: '',
        activeUser: false
    })

    const [selectedphoto, setSelectedphoto] = useState(false)

    const [proj, setproj] = useState({
        state1: true,
        state2: false,
        state3: false,
        state4:false,
    })

    const [gallery, setgallery] = useState({
        stateAll: true,
        stateAlls: "all",
        state1: false,
        state1s: 'algo1',
        state2: false,
        state2s: 'algo2',
        state3:false,
        state3s: 'algo3',
    })


      const [expenses, setExpenses] = useState(dataphotos);

    const change = (event) => {
        if(stateheader == true) {
          setStateheader(false)
        }else {
          setStateheader(true)
        }
        
    }



    const galleryfilter =  useCallback((chave = "all") =>{
        if( chave == "all"){
       const     datafiltered = expenses.filter(function(data) {
                return ( data.filtrox == chave );
            })
            galleryfilterSet(chave)
            setExpenses(datafiltered)
        }else {
            const      datafiltered = expenses.filter(function(data) {
                return ( data.filtro == chave );
            })
            galleryfilterSet(chave)
            setExpenses(datafiltered)
        }
            
    }, []) 

    const galleryfilterSet = (chave) => {
        if ( chave == "all") {
            setgallery((prevState)=> {
                return {...prevState, 
                    stateAll: true,
                    state1: false,
                    state2:false,
                    state3:false
                }
            })
        }

        if ( chave == "algo1") {
            setgallery((prevState)=> {
                return {...prevState, 
                    stateAll: false,
                    state1: true,
                    state2:false,
                    state3:false
                }
            })
        }

        if ( chave == "algo2") {
            setgallery((prevState)=> {
                return {...prevState, 
                    stateAll: false,
                    state1: false,
                    state2:true,
                    state3:false
                }
            })
        }

        if ( chave == "algo3") {
            setgallery((prevState)=> {
                return {...prevState, 
                    stateAll: false,
                    state1: false,
                    state2:false,
                    state3:true
                }
            })
        }
    }

    const switch1 = (par) => {
        if ( par == '1') {
            setproj((prevState)=> {
                return {...prevState, 
                    state1: true,
                    state2: false,
                    state3:false,
                    state4:false
                }
            })
        }

        if ( par == '2') {
            setproj((prevState)=> {
                return {...prevState, 
                    state1: false,
                    state2: true,
                    state3:false,
                    state4:false
                }
            })
        }

        if ( par == '3') {
            setproj((prevState)=> {
                return {...prevState, 
                    state1: false,
                    state2: false,
                    state3:true,
                    state4:false
                }
            })
        }

        if ( par == '4') {
            setproj((prevState)=> {
                return {...prevState, 
                    state1: false,
                    state2: false,
                    state3:false,
                    state4:true
                }
            })
        }
        
    }

    const Gallery = (props) => {



        return (
            <div className="index-all-5-photos" >
                {props.photos.map((slide, i) => {
                    return (
                        <div className="index-all-5-photos-box" onClick={() => load(slide.name)}>
                            <img
                            className="photo-landing"
                            src={slide.image}
                            alt="slider image"
                            
                            />   
                        </div>                    
                    )})
                }      
            </div>
        );
    };

    const updateField = (event) => {
        const user = { ...formState }
        user[event.target.name] = event.target.value

        setFormState((prevState) => {
            return {...prevState, ...user }
        })
    }

    return (
      
    <Fragment>
    <div className={`topnavt  ${stateheader ? 'responsive ':''}`} >
        <a  class="logo">
        LDJ PROJETOS
        </a>
         
        <a className="nactive" onClick={() => load('/teste/teste')} >Inicio</a>
        <a className="nactive" >About</a>
        <a className="nactive" >Features</a>
        <a className="nactive" >Portifolio</a>
        <a className="active" >Contact</a>   
        
        <a  className="icon" onClick={e => change(e)}>
            <i className="fa fa-bars"></i>
        </a>
    </div>
        

        
        <Carousel indicators={false}> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image1tn}
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className="carousel-caption-first">
                        <h1>Seja bem vindo a:</h1>
                        <h2>LDJPROJETOS</h2>
                        <p>Trabalhamos com tecnologia Web, Dispositivos Embarcados e Automação*2</p>
                    </div>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image2tn}
                alt="Second slide"
                />

                <Carousel.Caption>
                <div className="carousel-caption-first">
                <h1>Nossos serviços:</h1>
                <h2>Criação de sites</h2>
                <p>Crie seu site conosco e tenha suporte dos nossos colaboradores</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image3tn}
                alt="Third slide"
                />

                <Carousel.Caption>
                <div className="carousel-caption-first">
                <h1>Nossos serviços:</h1>
                <h2>Criação de sistemas</h2>
                <p>Criamos sistemas de tecnologias em PHP ou NodeJS</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
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
                        <i class="fa fa-2x fa-cogs" aria-hidden="true"></i>
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
                    <img src={image1txt} alt="somehting" width="auto" height="350" />
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
                        <a href={` ${baseUrla}/getarchive`} className="dropbtnlo2a" >Download</a>
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
                        <div className={`blocks ${proj.state1 ? 'active' : ''}`} 
                        onClick={e => switch1('1')} >

                            <i class="fa fa-2x fa-heartbeat " aria-hidden="true"></i>
                        </div>
                        <div className={`blocks ${proj.state2 ? 'active' : ''}`}
                        onClick={e => switch1('2')} >
                            <i class="fa fa-2x fa-futbol-o " aria-hidden="true"></i>
                        </div>
                        <div className={`blocks ${proj.state3 ? 'active' : ''}`}
                        onClick={e => switch1('3')} >
                            <i class="fa fa-2x fa-code " aria-hidden="true"></i>
                        </div>
                        <div className={`blocks ${proj.state4 ? 'active' : ''}`}
                        onClick={e => switch1('4')} >
                            <i class="fa fa-2x fa-paper-plane " aria-hidden="true"></i>
                        </div>

                    </div>
                    <div className={`index-all-2 ${proj.state1 ? '' : 'w3-hide'} `}>
                        <div className="index-all-2-text">
                            <h3>Saude On</h3>
                            <p>
                            Serviço prestado como bolsista ao Polo de inovação do IFBA. Consistiu no desenvolvimento de um portal com autenticação. No qual médicos poderiam avaliar alguns dados não sensíveis de pacientes em situação de internação domiciliar. 
                            </p>
                            <a href="https://facebook.com" target="_blank">GITHUB <i class="fa fa-external-link" aria-hidden="true"></i></a>
                        </div>
                        <div className="index-all-2-img-x">
                            <img src={image6txt} alt="somehting" width="500" height="auto" />
                        </div>
                    </div>
                    <div className={`index-all-2 ${proj.state2 ? '' : 'w3-hide'} `}>
                        <div className="index-all-2-text">
                            <h3>Portal de academia</h3>
                            <p>
                            Serviço prestado a empresa parceira para a criação de um portal de marcação de aula em determinado horario. Feito com a biblioteca Vue.js no Front-end da aplicação e em Express.Js no Back-end da aplicação 
                            </p>
                            <a href="https://facebook.com" target="_blank">GITHUB <i class="fa fa-external-link" aria-hidden="true"></i></a>
                        </div>
                        <div className="index-all-2-img-x">
                            <img src={image3txt} alt="somehting" width="500" height="auto" />
                        </div>
                    </div>
                    <div className={`index-all-2 ${proj.state3 ? '' : 'w3-hide'} `}>
                        <div className="index-all-2-text">
                            <h3>Projeto Senhas</h3>
                            <p>
                            Projeto de um portal que guarda todas as suas senhas. Consiste em um site em que você coloca as  senhas dos sites que voce utiliza, o site codifica a sua senha e guarda a senha codificada em um banco de dados. A senha é descodificada apenas com o login e senha mestra cadastrada no site.
                            </p>
                            <a href="https://facebook.com" target="_blank">GITHUB <i class="fa fa-external-link" aria-hidden="true"></i></a>
                        </div>
                        <div className="index-all-2-img-x"
                        onClick={() => load('/projetos/projetosenha/auth')}>
                            <img src={image4txt} alt="somehting" width="555" height="354" />
                        </div>
                    </div>
                    <div className={`index-all-2 ${proj.state4 ? '' : 'w3-hide'} `}>
                        <div className="index-all-2-text">
                            <h3>Veja outros projetos</h3>
                            <p>
                            Outros projetos feitos por mim pode ser visto no Github no link abaixo  o qual vai direcioná-lo para a minha página principal do Github.
                            </p>
                            <a href="https://facebook.com" target="_blank">GITHUB <i class="fa fa-external-link" aria-hidden="true"></i></a>
                        </div>
                        <div className="index-all-2-img-x">
                            <img src={image5txt} alt="somehting" width="500" height="auto" />
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
                        <div className={`index-all-5-options-box ${gallery.stateAll ? 'active' : ''}`}
                        onClick={() =>{galleryfilter('all')}}
                        >
                            <p>All Works</p>
                        </div>
                        <div className={`index-all-5-options-box ${gallery.state1 ? 'active' : ''}`}
                        onClick={() =>{galleryfilter(gallery.state1s)}}>
                            <p>Creative</p>
                        </div>
                        <div className={`index-all-5-options-box ${gallery.state2 ? 'active' : ''}`}
                        onClick={() =>{galleryfilter(gallery.state2s)}}>
                            <p>Corporate</p>
                        </div>
                        <div className={`index-all-5-options-box ${gallery.state3 ? 'active' : ''}`}
                        onClick={() =>{galleryfilter(gallery.state3s)}}>
                            <p>Portifolio</p>
                        </div>
                    </div>
                
                    <Gallery photos={expenses} />
                    
                </div>
            </div>

            <div className="index-all-white">
                <div className="index-all-6">
                    <div className="index-limited-1-c">
                        <h2>CONTATE <span>NOS</span></h2>
                            <div className="re-bar-1"></div>
                        <p>
                            <span>A</span>dorariamos que vocês entrassem em contato conosco e discutissem idéias e projetos que queiram colocar para fora do papel.
                        </p>
                    </div>

                    <div className="index-all-6-next">
                        <div className="index-all-6-next-esq">
                            <h4>Informações </h4>
                            <ul className="">
                                <li><i className="fa  fa-cogs" aria-hidden="true"></i>
                                    <h6>
                                        <strong>E-mail:</strong>
                                        
                                    </h6>
                                    <p>ldjmoreira@hotmail.com</p>
                                </li>
                                <li><i className="fa  fa-cogs" aria-hidden="true"></i>
                                    <h6>
                                        <strong>Telefone:</strong>
                                        
                                    </h6>
                                    <p>(71) 986331572</p>
                                </li>
                                <li><i className="fa  fa-cogs" aria-hidden="true"></i>
                                    <h6>
                                        <strong>Github:</strong>
                                        
                                    </h6>
                                    <p>https://github.com/ldjmoreira/ldjmoreira</p>
                                </li>
                                <li><i className="fa  fa-cogs" aria-hidden="true"></i>
                                    <h6>
                                        <strong>Linkedin:</strong>
                                        
                                    </h6>
                                    <p>https://www.linkedin.com/in/devlorionmoreira/</p>
                                </li>
                            </ul>
                        </div>
                        <div className="index-all-6-next-dir">
                        
                        <form  name="contact-form" method="post" action="#">
                            <div className="row-lor-box  " >
                                <div className=" row-lor1-esq">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" placeholder="Nome" required="required"/>
                                    </div>
                                </div>
                                <div className=" row-lor1-dir">
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" placeholder="Email de contato" required="required"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row-lor">
                                <input type="text" name="subject" className="form-control" placeholder="Assunto" required="required"/>
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="message" className="form-control" rows="4" placeholder="Digite sua mensagem" required="required"></textarea>
                            </div>
                            
                        </form>
                            <button className="dropbtnlo-form" >Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="footer-down">
                <p> &copy; Site feito utilizando biblioteca React.Js - ainda em codificação , creditos serão divulgados  </p>
            </footer>
        </div>
        
    

    </Fragment>
    )
}