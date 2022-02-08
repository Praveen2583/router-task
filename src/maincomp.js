import React from 'react';
import ButtonAppBar from './AppBar';
import BasicCard from './card';
import CustomizedButtons from './Button';
import SimpleAccordion from './Accordion';

const Main = () => {
  return (

  <div>

      <ButtonAppBar/> <br></br>
      <BasicCard/><br></br>
      <CustomizedButtons/><br></br>
      <SimpleAccordion/> <br></br>

      <div id='footer'>
          <span>CONTACT US</span> &nbsp;
          <span>ABOUT US</span> &nbsp;
          <span>BRANCHES</span>&nbsp;
      </div>

      

     
  </div>
  
  
  )
};

export default Main;
