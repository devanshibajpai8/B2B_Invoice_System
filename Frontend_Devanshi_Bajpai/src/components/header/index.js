import React from 'react'
import img1 from '../images/abc_product.svg';
import img2 from '../images/hrclogo.svg';

import './styles.css';

export const Header = () => {
return(
  <><div style={{ margin: "0.5rem" }}>
    <img src={img1} />
    <img style={{ marginLeft: "20rem" }} src={img2} />
  </div><div style={{color:" #db4437",fontSize:'25px',fontWeight:'bold'}}>
    Invoice List
    </div></>
  )
}