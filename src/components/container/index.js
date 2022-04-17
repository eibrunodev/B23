import React, { useState, useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';

import {Container,Box} from '@mui/material';
import styles from './styles.module.scss';

import {Slider} from '../sliderImg/sliderMulher';
import {SliderJovem} from '../sliderImg/sliderJovem';
import {SliderIdoso} from '../sliderImg/sliderIdoso';

export function ContainerHeader(props){
   
  return(
       <Box className={styles.BoxContainer}>
        <Container maxWidth="auto" className={styles.container}>
          
            <h1>{props.h1}</h1>
            <text>{props.Text}</text>
            <img className={styles.logo} src="/assets/logo.svg"/>
          
         
          {/* imagens-header */}
         <div className={styles.containerImg}>
           <Slider/>
           <SliderJovem/>
           <SliderIdoso/>
           {/* <img className={styles.imgMulher} src={`/assets/foto-${props.Url1}.png`}/> */}
           {/* <img className={styles.imgJovem} src={`/assets/foto-${props.Url2}.png`}/> */}

           {/* <img className={styles.imgIdoso} src={`/assets/foto-${props.Url3}.png`}/> */}
         </div>
        
         <div className={styles.contatos}>
          <img className={styles.whatsapp} src="/assets/whatsapp.png"/>
          <img className={styles.message} src="/assets/message.png"/>
         </div>
       </Container>
       </Box> 
    )
}