import React, { Fragment, useState }  from 'react'
import imagep from './assets/logo-image.jpg'
import './index.css'




export default  (props) => {

    const [begun, setBegun] = useState(false)

     const match = (label) => {
        setBegun(true)

     }

   
    
    return (
    <Fragment>
    <div className="sidenav">
      <div className="sidenav-space">
        <div className="sidenav-photo-space">
        <img src={imagep} alt="somehting" width="160" height="160"/>
        </div>
        <div className="sidenav-font-space">
          <h4>BLUGOON</h4>
          <span>Free Bootstrap Theme</span>
      </div>
      </div>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
    </div>
    <div className="content">
  
      <p>This sidebar is of full height (100%) and always shown.</p>
      <p>Scroll down the page to see the result.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
    </div>

                           
    </Fragment>

    )
}