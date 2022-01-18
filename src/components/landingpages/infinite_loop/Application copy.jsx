import React, { Fragment, useState, useEffect, useRef }  from 'react'
import useWindowDimensions from './useWindowDimensions';
//import smallDimensions from './useWindowDimensions';
import './index.css'
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
    const [stateheader, setStateheader] = useState(false)
    const [vade, setVade] = useState({
        scroll1: true, 
        scroll2: false,
        scroll3: false,

      })
      const { height, width } = useWindowDimensions();
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
      }));
    
    }

    if(position>=1178.1 && position<1996.3){

      setVade((prevState) => ({
        ...prevState,
        scroll1: false, 
        scroll2: true,
        scroll3: false
      }));
      
    }

    if(position>=1996.3 && position<2155.0){

      setVade((prevState) => ({
        ...prevState,
        scroll1: false, 
        scroll2: false,
        scroll3: true

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
    <div className={`topnavt  ${stateheader ? 'responsive ':''}`} >
        <a  class="logo">
        Infinite Loop
        </a>
         
        <a className="nactive" >Contact</a>
        <a className="nactive" >Gallery</a>
        <a className="nactive" >Testimonials</a>
        <a className="nactive" >What We Do</a>
        <a className="active" >Home</a>   
        
        <a  className="icon" onClick={e => change(e)}>
            <i className="fa fa-bars"></i>
        </a>
    </div>
    <div className="index-main">
        <div className="index-all-c">
            <div className="parallax">
                <div className="paralax-box">
                    <h2>
                        Infinite Loop
                    </h2>
                    <p>
                    Bootstrap 4.0 Parallax Theme <br/>
                        Free HTML Template by TOOPLATE
                    </p>
                </div>
                <div className="paralax-box">
                    <div className="paralax-button">
                        <i class="fa fa-2x fa-arrow-down tm-down-arrow" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

        </div>
        <div className="index-all-white">
            <div className="index-limited-white-c">
                <div  className="index-limited-white-c-up">
                    <h2>
                        What We Do
                    </h2>
                    <p>
                        This is Infinite Loop, free Bootstrap 4.0 HTML template with a parallax effect. This layout is what you can modify and use for your websites. Please spread a word to your friends about our website. Thank you for supporting us. If you have any question, you can contact us or chat with us on our Tooplate Facebook page.
                    </p>
                </div>
                <div  className="index-limited-white-c-down">
                    <div className="index-limited-white-c-down-box">
                        <div className="index-limited-white-c-down-box-img" >
                            <i class="fa fa-2x fa-bar-chart " aria-hidden="true"></i>
                        </div>
                        <div className="index-limited-white-c-down-box-text">
                            <h2>
                                Market Analysis
                            </h2>
                            <p>
                                Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna.
                            </p>
                        </div>
                    </div>
                    <div className="index-limited-white-c-down-box">
                        <div className="index-limited-white-c-down-box-img" >
                            <i class="fa fa-2x fa-handshake-o" aria-hidden="true"></i>
                        </div>
                        <div className="index-limited-white-c-down-box-text">
                            <h2>
                                Fast Support
                            </h2>
                            <p>
                                Credit goes to Pexels website for all images used in this template. Cras condimentum mi et sapien dignissim luctus.
                            </p>
                        </div>
                    </div>
                    <div className="index-limited-white-c-down-box">
                        <div className="index-limited-white-c-down-box-img" >
                        <i class="fa fa-2x fa-shield" aria-hidden="true"></i>
                        </div>
                        <div className="index-limited-white-c-down-box-text">
                            <h2>
                                Top Security
                            </h2>
                            <p>
                                You have no authority to post this template as a ZIP file on your template collection websites. You can use this template for your commercial websites. 
                            </p>
                        </div>
                    </div>
                    <div className="index-limited-white-c-down-box">
                        <div className="index-limited-white-c-down-box-img" >
                        <i class="fa fa-2x fa-users" aria-hidden="true"></i>
                        </div>
                        <div className="index-limited-white-c-down-box-text">
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
        <div className="index-all-c">
            <div className="parallax2">
                <div className="paralax-box">
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
                    <div className='img-carousel-face' >
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
        <div className="index-all-white">
            <div className="index-limited-white-c">
                <div  className="index-limited-white-c-up">
                        <h2 style={{ textAlign: 'center' }}>
                            Gallery
                        </h2>
                        <p>
                        Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis<br/>
                        nibh semper. Pellentesque est urna, lobortis eu arcu a, aliquet tristique urna.
                        </p>
                </div>
                <div  className="index-limited-white-c-down">

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


        <div className="index-all-c">
            <div className="parallax3">
                <div className="paralax-box">
                    <div className="index-limited-c5">
                        <div className="index-limited-c5-up">
                            <h2>
                                Contact Us
                            </h2>
                            <p>
                                Proin enim orci, tincidunt quis suscipit in, placerat nec est. Vestibulum posuere faucibus posuere. Quisque aliquam velit eget leo blandit egestas. Nulla id posuere felis, quis tristique nulla.
                            </p>
                        </div>
                        <div className="index-limited-c5-down">
                            <div className="index-limited-c5-down-left">
                               
                            </div>
                            <div className="index-limited-c5-down-right">

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>




    </div>
    <div>
 
    <h4>{scrollPosition}</h4>
    <div>
      width: {width} ~ height: {height}
    </div>
    <div>
      width: {width2} ~ height: {height}
    </div>
    </div>
    <div class="content">
    <h3>On Scroll Sticky Header</h3>
        <p>The header will stick to the top when you reach its scroll position.</p>
        <p>Scroll back up to remove the sticky effect.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
    </div>
    </Fragment>

)
}