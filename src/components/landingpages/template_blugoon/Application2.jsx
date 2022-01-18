import React, { Fragment, useState, useEffect, useRef, useCallback }  from 'react'


import imagep from './assets/logo-image.jpg'
import imagep2 from './assets/aerobic-girls.jpg'
import imagep3 from './assets/mountain-reflection.jpg'


import styles from './index2.module.css'

import gallery21 from './assets/gallery2/falls2.jpg'
import gallery22 from './assets/gallery2/mist.jpg'
import gallery23 from './assets/gallery2/mountainskies.jpg'
import gallery24 from './assets/gallery2/nature.jpg'
import gallery25 from './assets/gallery2/ocean.jpg'
import gallery26 from './assets/gallery2/paris.jpg'
import gallery27 from './assets/gallery2/rocks.jpg'
import gallery28 from './assets/gallery2/underwater.jpg'
import gallery29 from './assets/gallery2/wedding.jpg'

const dataphotos = [
  {
      image: gallery27 , 
      caption:"Caption1",
      description:"Description Here1",
      filtro: "algo1",
      filtrox: "all"
      },
      {
      image: gallery22 , 
      caption:"Caption1",
      description:"Description Here1",
      filtro: "algo2",
      filtrox: "all"
      },
      {
      image: gallery23 , 
      caption:"Caption1",
      description:"Description Here1",
      filtro: "algo3",
      filtrox: "all"
      },
      {
      image: gallery24 , 
      caption:"Caption1",
      description:"Description Here1",
      filtro: "algo1",
      filtrox: "all"
      },
      {
      image: gallery25 , 
      caption:"Caption1",
      description:"Description Here1",
      filtro: "algo2",
      filtrox: "all"
      },
      {
      image: gallery26 , 
      caption:"Caption1",
      description:"Description Here1",
      filtro: "algo3",
      filtrox: "all"
      },
      {
      image: gallery21 , 
      caption:"Caption1",
      description:"Description Here1",
      filtro: "algo1",
      filtrox: "all"
      },
      {
      image: gallery28 , 
      caption:"Caption1",
      description:"Description Here1",
      filtro: "algo2",
      filtrox: "all"
      },
  
]


export default  (props) => {
  const myRef1 = useRef(null)
  const myRef2 = useRef(null)
  const myRef3 = useRef(null)
  const myRef4 = useRef(null)
    
  const [vade, setVade] = useState({
    scroll1: true, 
    scroll2: false,
    scroll3: false,
    scroll4: false,
    flag1: false,
    flag2: false,
    flag3: false,
  })
  const [ flag1, setFlag1 ] = useState(false)
  const [ flag2, setFlag2 ] = useState(false)
  const [ flag3, setFlag3 ] = useState(false)




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




  const executeScroll = () =>{
    myRef1.current.scrollIntoView()
    setVade((prevState) => ({
      ...prevState,
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

//filter gallery image





const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    
    if(position>0 &&  position<1169.0){
      if(vade.flag1 == false){
      setVade((prevState) => ({
        ...prevState,
        scroll1: true, 
        scroll2: false,
        scroll3: false,
        scroll4: false,
        flag1: true,
      }));
      
      
    }
    }else {
      setVade((prevState) => ({
        ...prevState,
        flag1: false,
      }));
      
    }
    if(position>=1170 && position<1988.0){
      if(flag2 == false){
      setVade((prevState) => ({
        ...prevState,
        scroll1: false, 
        scroll2: true,
        scroll3: false,
        scroll4: false,
      }));
      
    }
    }else {
      
    }
    
    if(position>=1989.0 && position<2561.0 ){
      if(flag3 == false){
      setVade((prevState) => ({
        ...prevState,
        scroll1: false, 
        scroll2: false,
        scroll3: true,
        scroll4: false,
      }));
      
      }
    }
   //   alert("hello");
   if(position>=2561.0 ){
    if(flag3 == false){
    setVade((prevState) => ({
      ...prevState,
      scroll1: false, 
      scroll2: false,
      scroll3: false,
      scroll4: true,
    }));
    
    }
  }
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

const Gallery = (props) => {

const vector = [1,2,3]

  return (
    
      <div className={styles['index-all-5-photos']}>

                <div  className={styles['index-all-5-photos-box']}> 
                  {props.photos.slice(0, 3).map((slide, i) => {
                      return (    
                        <div class={styles['container2']}>             
                              <img 
                              key={i}
                              className={styles['photo-landing']}
                              src={slide.image}
                              alt="slider image"
                              />  
                          <div class={styles['middle']}>
                            <div class={styles['text']}>{slide.caption}</div>
                          </div>
                        </div>                        
                      )})
                  }  
                </div>
                <div  className={styles['index-all-5-photos-box']}> 
                  {props.photos.slice(3, 6).map((slide, i) => {
                      return (                 
                        <div class={styles['container2']}>             
                              <img 
                              key={i}
                              className={styles['photo-landing']}
                              src={slide.image}
                              alt="slider image"
                              />  
                          <div class={styles['middle']}>
                            <div class={styles['text']}>{slide.caption}</div>
                          </div>
                        </div>                         
                      )})
                  }  
                </div>
                <div  className={styles['index-all-5-photos-box']}> 
                  {props.photos.slice(6, 9).map((slide, i) => {
                      return (                 
                        <div class={styles['container2']}>             
                              <img 
                              key={i}
                              className={styles['photo-landing']}
                              src={slide.image}
                              alt="slider image"
                              />  
                          <div class={styles['middle']}>
                            <div class={styles['text']}>{slide.caption}</div>
                          </div>
                        </div>                        
                      )})
                  }  
                </div>


      </div>
  );
};

return (
      
<Fragment>
      
  <div className={styles.sidebar}>
    <div className={styles['sidebar-space']}>
          <div className={styles['sidebar-photo-space']}>
          <img src={imagep} className={` ${styles['sidebar-photo-space-self']}`} alt="somehting" width="160" height="160"/>
          </div>
          <div className={styles['sidebar-font-space']}>
            <h4>TEST FRONT-END</h4>
            <span>A react build-up page</span>
          </div>
    </div>
    
    <a className={`${vade.scroll1 ?styles.active:styles.nactive }`} onClick={executeScroll}>Intro</a>
    <a className={`${vade.scroll2 ?styles.active:styles.nactive }`} onClick={executeScrol2}>Features</a>
    <a className={`${vade.scroll3 ?styles.active:styles.nactive }`}  onClick={executeScrol3}>Gallery</a>
    <a className={`${vade.scroll4 ?styles.active:styles.nactive }`}  onClick={executeScrol4}>Contact</a>
  </div>

  <div className={styles.contentAll}>
  <div className={styles.content}>
    <div ref={myRef1} className={styles['sidebar-photo-space']}>
      <img src={imagep2} className={`w3-round ${styles['imagep2']}`} alt="somehting" height="250" />
    </div>

    <div className={styles['content-heading']} > 
        <h2>
          Introducing to test front-end React
        </h2>
        <span>
        
        This is a Bootstrap v4.3.1 layout which was made by ldjProjetos and it was built based in BLUGOON website themes. If you are 
        goint to copy the code of this landing page, please see Blugoon copyright. It's important to emphasize that Ldjprojetos just coded This
        page to show his skils with css, React.js and html. 
        </span>
    </div>

    <div className={styles['content-right-post']}>
        <div className={styles['content-right-post-up']}>
          <div className={styles['content-right-post-up-left']}>
          <h2>Modern Web Design</h2>
          <span>
            This site was built by ldjProjetos who design it from 0 to test his skils. but 
            You are allowed to use this template for commercial or personal websites.  You can feature this template on your blog post.

            All photos in this template are from Pexels website. Blugoon HTML Template is provided by Tooplate. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
          </span>
          </div>
          <div className={styles['content-right-post-up-right']}>
            <img src={imagep3} className={`w3-round ${styles['imagep2']}`} alt="somehting" height="250" />
          </div>
        </div>
        <div className={styles['content-right-post-down']}>
          <button class={styles.btnlwhite1}>read more</button>
        </div>
    </div>

    <div className={styles['content-left-post']}>
        <div className={styles['content-left-post-up']}>
          <div className={styles['content-left-post-up-left']}>
          <div className={styles['content-left-post-up-right']}>
            <img src={imagep3} className={`w3-round ${styles['imagep2']}`} alt="somehting" height="250" />
          </div>
          </div>
          <div className={styles['content-left-post-up-right']}>
          <h2>Best Template for you!</h2>
          <span>
            Quisque feugiat nisl at lacus condimentum, eu suscipit odio fringilla. Mauris eu est vitae erat condimentum pellentesque. Fusce vehicula nunc at augue sagittis tristique.

            Ut imperdiet massa at enim tempus volutpat. Nullam gravida augue quis facilisis commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </span>
          </div>
        </div>
        <div className={styles['content-left-post-down']}>
          <button class={styles.btnlwhite1} onClick={handleChange2}>read more2</button>
        </div>
    </div>

    <div ref={myRef2} className={`mt-5 ${styles['content-heading']}`}> 
        <h2>
          Greatest Features
        </h2>
        <span>
          Praesent posuere fringilla elit, non maximus tellus posuere nec. Nunc eu sapien nec est elementum sodales.
        </span>
    </div>

    <div className={styles['square-content']}>
        <div className={styles['square-content-block']}>
          <div className={styles['square-content-block-shape']}>
          <div className={styles['square-content-block-shape-up']}>
          <i class="fa fa-area-chart"></i>
          </div>
          <div className="square-content-block-shape-down">
            <h4>Top Performance</h4>
            <p>Donec sit amet tempor quam. Maecenas nec aliquam leo, sed tincidunt urna.</p>
                
          </div>
          </div>
        </div>
        <div className={styles['square-content-block']}>
        <div className={styles['square-content-block-shape']}>
          <div className={styles['square-content-block-shape-up']}>
            <i class="fa fa-check-square-o"></i>
          </div>
          <div className={styles['square-content-block-shape-down']}>
            <h4>Trusted Service</h4>
            <p>Donec sit amet tempor quam. Maecenas nec aliquam leo, sed tincidunt urna.</p>
          </div>
          </div>
        </div>
        <div className={styles['square-content-block']}>
        <div className={styles['square-content-block-shape']}>
          <div className={styles['square-content-block-shape-up']}>
            <i class="fa fa-question-circle"></i>
          </div>
          <div className={styles['square-content-block-shape-down']}>
          <h4>Need Help?</h4>
            <p>Donec sit amet tempor quam. Maecenas nec aliquam leo, sed tincidunt urna.</p>
                
          </div>
          </div>
        </div>
        <div className={styles['square-content-block']}>
        <div className={styles['square-content-block-shape']}>
          <div className={styles['square-content-block-shape-up']}>
            <i class="fa fa-support"></i>
          </div>
          <div className={styles['square-content-block-shape-down']}>
            <h4>Quick Support</h4>
            <p>Donec sit amet tempor quam. Maecenas nec aliquam leo, sed tincidunt urna.</p>
                
          </div>
          </div>
        </div>

    </div>
    
        <div ref={myRef3} className={`mt-5 ${styles['content-heading']}` }> 
            <h2>
              Gallery
            </h2>
            <span>
              Donec sit amet enim tempor nisl fermentum aliquam. In consectetur sapien eu nisi venenatis lobortis. Sed ullamcorper tristique elit nec facilisis.
            </span>
        </div>

        

        <div class={` ${styles['isotope-toolbar']}`}>
            <a className={`${gallery.stateAll ? styles.active2:styles.nactive2 }`} 
            onClick={() =>{galleryfilter('all')}} >

              <span>all</span></a>
            <a className={`${gallery.state1 ? styles.active2:styles.nactive2 }`}
                onClick={() =>{galleryfilter(gallery.state1s)}}>
              <span>pretty</span></a>
            <a className={`${gallery.state2 ? styles.active2:styles.nactive2 }`}
                onClick={() =>{galleryfilter(gallery.state2s)}}>
              <span>sexy</span></a>
            <a className={`${gallery.state3 ? styles.active2:styles.nactive2 }`}
                onClick={() =>{galleryfilter(gallery.state3s)}}>
              <span>beach</span></a>
            
        </div>

        <Gallery photos={expenses} />


        <div ref={myRef4} className={`mt-5 ${styles['content-heading']}` }> 
          <h2>
            Contact
          </h2>
          <span>
          Aenean a consectetur mi, sit amet consequat velit. Mauris vitae nunc viverra, mattis arcu quis, vestibulum eros.
          </span>
        </div>

        <div className="row">
              <div className="right-content">
                <div className="container">
                  <form id="contact" action="" method="post">
                    <div className="row">
                      <div className="col-md-6">
                      
                          <input name="name" type="text" className={`${styles['form-control2']}` }
                            id="name" placeholder="Your name..." required="" />
                        
                      </div>
                      <div className="col-md-6">
                        
                          <input name="email" type="text" className={`${styles['form-control2']}` }
                            id="email" placeholder="Your email..." required=""  />
                        
                      </div>
                      <div className="col-md-12">
                        
                          <input name="subject" type="text" className={`${styles['form-control2']}` } 
                            id="subject" placeholder="Subject..." required="" />
                        
                      </div>
                      <div className="col-md-12">
                        
                          <textarea name="message" rows="6" className={`${styles['form-control3']}` }
                            id="message" placeholder="Your message..." required="" ></textarea>
                        
                      </div>
                      <div className="col-md-12">
                        
                          <button type="submit" id="form-submit" className={`${styles['btnlwhite1']}` }>
                            Send Message
                          </button>
                        
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
  </div>
  </div>
                           
    </Fragment>

    )
}