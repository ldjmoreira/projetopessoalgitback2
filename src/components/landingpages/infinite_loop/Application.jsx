import React, { Fragment, useState, useEffect, useRef }  from 'react'
import useWindowDimensions from './useWindowDimensions';
//import smallDimensions from './useWindowDimensions';
import styles from './index.module.css'
import imagep from './assets/logo.svg'
import image1tn from './assets/gallery-tn-01.jpg'
import image2tn from './assets/gallery-tn-02.jpg'
import image3tn from './assets/gallery-tn-03.jpg'
import image4tn from './assets/gallery-tn-04.jpg'
import image5tn from './assets/gallery-tn-05.jpg'

import image1tnf from './assets/faces/testimonial-img-01.jpg'
import image2tnf from './assets/faces/testimonial-img-02.jpg'
import image3tnf from './assets/faces/testimonial-img-03.jpg'
import image4tnf from './assets/faces/testimonial-img-04.jpg'


import Carousel from "react-simply-carousel";
const hasWindow = typeof window !== 'undefined';
const width2 = hasWindow ? window.innerWidth : null;
let varwidht
let howmuch
let howmuch2

if (width2 < 600) {
     varwidht= "none"
     howmuch=1;
} else {
    varwidht= "block"
    howmuch=4;
}

if (width2 < 600) {
    varwidht= "none"
    howmuch2=1;
} else {
   varwidht= "block"
   howmuch2=3;
}

export default  (props) => {
    const myRef0 = useRef(null)
    const myRef1 = useRef(null)
    const myRef2 = useRef(null)
    const myRef3 = useRef(null)
    const myRef4 = useRef(null)

    const [vade, setVade] = useState({
        scroll0: true,
        scroll1: false, 
        scroll2: false,
        scroll3: false,
        scroll4: false,
        flag1: false,
        flag2: false,
        flag3: false,
      })

      const executeScrol0 = () =>{
        myRef0.current.scrollIntoView()
        setVade((prevState) => ({
          ...prevState,
          scroll0: true, 
          scroll1: false, 
          scroll2: false,
          scroll3: false,
          scroll4: false
        }));
      } 

      const executeScroll = () =>{
        myRef1.current.scrollIntoView()
        setVade((prevState) => ({
          ...prevState,
          scroll0: false,
          scroll1: true, 
          scroll2: false,
          scroll3: false,
          scroll4: false
        }));
      } 
      
      const executeScrol2 = () =>{
        myRef2.current.scrollIntoView()
        setVade((prevState) => ({
          ...prevState,
          scroll0: false,
          scroll1: false, 
          scroll2: true,
          scroll3: false,
          scroll4: false
        }));
      } 
      const executeScrol3 = () =>{
        myRef3.current.scrollIntoView()
        setVade((prevState) => ({
          ...prevState,
          scroll0: false,
          scroll1: false, 
          scroll2: false,
          scroll3: true,
          scroll4: false
        }));
      } 
    
      const executeScrol4 = () =>{
        myRef4.current.scrollIntoView()
        setVade((prevState) => ({
          ...prevState,
          scroll0: false,
          scroll1: false, 
          scroll2: false,
          scroll3: false,
          scroll4: true
        }));
      } 

      const handleChange2 = (label) => {
        window.scrollTo({
          bottom: 0,
          left: 0,
          behavior: "smooth"
        })
      
      }


    const [stateheader, setStateheader] = useState(false)


      



      const { height, width } = useWindowDimensions(); // its a service. 

      const [activeSlideIndex, setactiveSlideIndex] = useState(0)

      const setActiveSlideIndex = (newActiveSlideIndex) => {
          setactiveSlideIndex(newActiveSlideIndex)
      }


    const change = (event) => {
        if(stateheader == true) {
          setStateheader(false)
        }else {
          setStateheader(true)
        }
        
      }

      

      const [scrollPosition, setScrollPosition] = useState(0);

const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if(position>0 &&  position<1178.0){
      
      setVade((prevState) => ({
        ...prevState,
        scroll1: true, 
        scroll2: false,
        scroll3: false,
        scroll4: false,
      }));
    
    }

    if(position>0 &&  position<932.0){
      
        setVade((prevState) => ({
          ...prevState,
          scroll0: true, 
          scroll1: false, 
          scroll2: false,
          scroll3: false,
          scroll4: false,
        }));
      
      }

    if(position>= 932.0 && position<1537.0){

      setVade((prevState) => ({
        ...prevState,
        scroll0: false, 
        scroll1: true, 
        scroll2: false,
        scroll3: false,
        scroll4: false,
      }));
      
    }

    if(position>=1537.0 && position<2397.0){

      setVade((prevState) => ({
        ...prevState,
        scroll0: false,
        scroll1: false, 
        scroll2: true,
        scroll3: false,
        scroll4: false,

      }));
      
      }

      if(position>=2397.0 && position<3126.0){

        setVade((prevState) => ({
          ...prevState,
          scroll0: false,
          scroll1: false, 
          scroll2: false,
          scroll3: true,
          scroll4: false,
  
        }));
        
        }
        if(position>=3126.0 ){

            setVade((prevState) => ({
              ...prevState,
              scroll0: false,
              scroll1: false, 
              scroll2: false,
              scroll3: false,
              scroll4: true,
      
            }));
            
            }
    
};
      useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /**/
  

    return (
      
    <Fragment>
    <div  className={  `${styles.topnavt } ${stateheader? styles.responsive:'' }`} >
        <a className={styles.logo}  >
        Infinite Loop
        </a>
         
        <a className={`${vade.scroll4 ?styles.active:styles.nactive }`} onClick={executeScrol4}>Contact</a>
        <a className={`${vade.scroll3 ?styles.active:styles.nactive }`} onClick={executeScrol3}>Gallery</a>
        <a className={`${vade.scroll2 ?styles.active:styles.nactive }`} onClick={executeScrol2}>Testimonials</a>
        <a className={`${vade.scroll1 ?styles.active:styles.nactive }`} onClick={executeScroll} >What We Do</a>
        <a className={`${vade.scroll0 ?styles.active:styles.nactive }`} onClick={executeScrol0}>Home</a>   
        
        <a  className={styles.icon} onClick={e => change(e)}>
            <i className="fa fa-bars"></i>
        </a>
    </div>
    < div ref={myRef0}  className={styles['index-main']}>
        <div className={styles['index-all-c']}>
            <div  className={styles.parallax}>
                <div className={styles['paralax-box']}>
                    <h2>
                        Infinite Loop
                    </h2>
                    <p>
                    Bootstrap 4.0 Parallax Theme <br/>
                        Free HTML Template by TOOPLATE
                    </p>
                </div>
                <div className={styles['paralax-box']}>
                    <div className={styles['paralax-button']}>
                        <i class="fa fa-2x fa-arrow-down tm-down-arrow" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

        </div>
        <div ref={myRef1} className={styles['index-all-white']}>
            <div className={styles['index-limited-white-c']}>
                <div    className={styles['index-limited-white-c-up']}>
                    <h2>
                        What We Do
                    </h2>
                    <p>
                        This is Infinite Loop, free Bootstrap 4.0 HTML template with a parallax effect. This layout is what you can modify and use for your websites. Please spread a word to your friends about our website. Thank you for supporting us. If you have any question, you can contact us or chat with us on our Tooplate Facebook page.
                    </p>
                </div>
                <div  className={styles['index-limited-white-c-down']}>
                    <div className={styles['index-limited-white-c-down-box']}>
                        <div className={styles['index-limited-white-c-down-box-img']} >
                            <i class="fa fa-2x fa-bar-chart " aria-hidden="true"></i>
                        </div>
                        <div className={styles['index-limited-white-c-down-box-text']}>
                            <h2>
                                Market Analysis
                            </h2>
                            <p>
                                Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna.
                            </p>
                        </div>
                    </div>
                    <div className={styles['index-limited-white-c-down-box']}>
                        <div className={styles['index-limited-white-c-down-box-img']}>
                            <i class="fa fa-2x fa-handshake-o" aria-hidden="true"></i>
                        </div>
                        <div className={styles['index-limited-white-c-down-box-text']}>
                            <h2>
                                Fast Support
                            </h2>
                            <p>
                                Credit goes to Pexels website for all images used in this template. Cras condimentum mi et sapien dignissim luctus.
                            </p>
                        </div>
                    </div>
                    <div className={styles['index-limited-white-c-down-box']}>
                        <div className={styles['index-limited-white-c-down-box-img']}>
                        <i class="fa fa-2x fa-shield" aria-hidden="true"></i>
                        </div>
                        <div className={styles['index-limited-white-c-down-box-text']}>
                            <h2>
                                Top Security
                            </h2>
                            <p>
                                You have no authority to post this template as a ZIP file on your template collection websites. You can use this template for your commercial websites. 
                            </p>
                        </div>
                    </div>
                    <div className={styles['index-limited-white-c-down-box']}>
                        <div className={styles['index-limited-white-c-down-box-img']}>
                        <i class="fa fa-2x fa-users" aria-hidden="true"></i>
                        </div>
                        <div className={styles['index-limited-white-c-down-box-text']}>
                            <h2>
                                Social Work
                            </h2>
                            <p>
                            You can change Font Awesome icons by either fas or far in the HTML codes. For Examples:  
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles['index-all-c']}>
            <div ref={myRef2}  className={styles['parallax2']}>
                <div  className={styles['paralax-box']}>
                <div  className={styles['index-limited-white-c-up2']}>
                        <h2 style={{ textAlign: 'center' }}>
                        Testimonials
                        </h2>
                        <p>
                        Nulla dictum sem non eros euismod, eu placerat tortor lobortis. Suspendisse id velit eu libero pellentesque interdum. Etiam quis congue eros.
                        </p>
                </div>
                <Carousel    
                    updateOnItemClick     
                    activeSlideIndex={activeSlideIndex}
                    onRequestChange={setActiveSlideIndex}
                    itemsToShow={howmuch2}
                    infinite={false}
                    disableNavIfEdgeActive={false}
                    itemsToScroll={1}
                    forwardBtnProps={{
                        children: ">",
                        style: {
                        display: varwidht,
                        width: 60,
                        height: 60,
                        minWidth: 60,
                        alignSelf: "center",
                        border: "none",
                        margin: "10px"
                        }
                    }}
                    backwardBtnProps={{
                        children: "<",
                        style: {
                            display: varwidht,
                        width: 60,
                        height: 60,
                        minWidth: 60,
                        alignSelf: "center",
                        border: "none",
                        margin: "10px"
                        }
                    }}
                    speed={400}
                >
                <div style={{ width: 240, height: 330 }}>
                    <img src={image1tnf} className='w3-circle' alt="somehting" width="100" />
                    <div className={styles['img-carousel-face']} >
                    This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.
                    </div>
                    <figcaption>Catherine Win (Designer)</figcaption>
                </div>
                <div style={{ width: 240, height: 330 }}>
                    <img src={image2tnf} className='w3-circle' alt="somehting" width="100" />
                    <div>
                    Testimonial section comes with carousel items. You can use Infinite Loop HTML CSS template for your websites.
                    </div>
                    <figcaption>Dual Rocker (CEO)</figcaption>
                </div>
                <div style={{ width: 240, height: 330 }}>
                    <img src={image3tnf} className='w3-circle' alt="somehting" width="100" />
                    <div>
                    Nulla finibus ligula nec tortor convallis tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </div>
                    <figcaption>Sandar Soft (Marketing)</figcaption>
                </div>
                <div style={{ width: 240, height: 330 }}>
                    <img src={image4tnf} className='w3-circle' alt="somehting" width="100" />
                    <div>
                    Curabitur rutrum pharetra lobortis. Pellentesque vehicula, velit quis eleifend fermentum, erat arcu aliquet neque.
                    </div>
                    <figcaption>Oliva Htoo (Designer)</figcaption>
                </div>


        </Carousel>
                </div>

            </div>

        </div>
        <div ref={myRef3} className={styles['index-all-white']}>
            <div  className={styles['index-limited-white-c']}>
                <div  className={styles['index-limited-white-c-up']}>
                        <h2 style={{ textAlign: 'center' }}>
                            Gallery
                        </h2>
                        <p>
                        Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis<br/>
                        nibh semper. Pellentesque est urna, lobortis eu arcu a, aliquet tristique urna.
                        </p>
                </div>
                <div  className={styles['index-limited-white-c-down']}>

            <Carousel    
            updateOnItemClick     
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={howmuch}
            infinite={false}
            disableNavIfEdgeActive={false}
            itemsToScroll={1}
            forwardBtnProps={{
                children: ">",
                style: {
                display: varwidht,
                  width: 60,
                  height: 60,
                  minWidth: 60,
                  alignSelf: "center",
                  border: "none",
                  margin: "10px"
                }
              }}
              backwardBtnProps={{
                children: "<",
                style: {
                display: varwidht,
                borderRadius: "20px",
                  width: 60,
                  height: 60,
                  minWidth: 60,
                  alignSelf: "center",
                  border: "none",
                  margin: "10px"
                  
                }
              }}
              speed={400}
            >
                <div className='px-1' style={{ width: 240, height: 330 }}>
                    <img src={image1tn} alt="somehting" width="220" />
                </div>
                <div style={{ width: 240, height: 330 }}>
                    <img src={image2tn} alt="somehting" width="220" />
                </div>
                <div style={{ width: 240, height: 330 }}>
                    <img src={image3tn} alt="somehting" width="220" />
                </div>
                <div style={{ width: 240, height: 330 }}>
                    <img src={image4tn} alt="somehting" width="220" />
                </div>
                <div style={{ width: 240, height: 330 }}>
                    <img src={image5tn} alt="somehting" width="220" />
                </div>

                </Carousel>
                </div>
            </div>        
        </div>


        <div className={styles['index-all-c']}>
            <div className={styles['parallax3']}>
                <div className={styles['paralax-box']}>
                    <div ref={myRef4} className={styles['index-limited-c5']}>
                        <div className={styles['index-limited-c5-up']}>
                            <h2>
                                Contact Us
                            </h2>
                            <p>
                                Proin enim orci, tincidunt quis suscipit in, placerat nec est. Vestibulum posuere faucibus posuere. Quisque aliquam velit eget leo blandit egestas. Nulla id posuere felis, quis tristique nulla.
                            </p>
                        </div>
                        <div className={styles['index-limited-c5-down']}>
                            <div className={styles['index-limited-c5-down-left']}>
                                <div className="row">
                                    <div className="right-content">
                                        <div className="container">
                                        <form id="contact" action="" method="post">
                                            <div className="row">
                                            <div className="col-md-12">
                                            
                                                <input name="name" type="text" className={`${styles['form-control2']}` }
                                                    id="name" placeholder="Your name..." required="" />
                                                
                                            </div>
                                            <div className="col-md-12">
                                                
                                                <input name="email" type="text" className={`${styles['form-control2']}` }
                                                    id="email" placeholder="Your email..." required=""  />
                                                
                                            </div>

                                            <div className="col-md-12">
                                                
                                                <textarea name="message" rows="6" className={`${styles['form-control3']}` }
                                                    id="message" placeholder="Your message..." required="" ></textarea>
                                                
                                            </div>
                                            <div className="col-md-12">
                                                
                                                <button type="submit" id="form-submit" className={`${styles['btnlblue1']}` }>
                                                    Send Message
                                                </button>
                                                
                                            </div>
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                            <div className={styles['index-limited-c5-down-right']}>
                                <div className={styles['contact-item']}>
                                    <a className={styles['contact-item-a']}>
                                    <i class="fa fa-2x fa-comment me-4" aria-hidden="true"></i>
                                    <span>Chat Online</span>
                                    </a>

                                </div>
                                <div className={styles['contact-item']}>
                                    <a className={styles['contact-item-a']}>
                                    <i class="fa fa-2x fa-envelope me-4" aria-hidden="true"></i>
                                        <span>Chat Online</span>
                                    </a>
                                </div>
                                <div className={styles['contact-item']}>
                                    <a className={styles['contact-item-a']}>
                                    <i class="fa fa-2x fa-map-marker me-4" aria-hidden="true"></i>
                                        <span>Chat Online</span>
                                    </a>
                                </div>
                                <div className={styles['contact-item']}>
                                    <a className={styles['contact-item-a']}>
                                    <i class="fa fa-2x fa-phone-square me-4" aria-hidden="true"></i>
                                        <span>Chat Online</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>




    </div>

    </Fragment>

)
}