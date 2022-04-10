import React from 'react';
import {Container} from '@mui/material';
import styles from './styles.module.scss';

export function ContainerHeader(props){
    return(

        <Container maxWidth="auto" className={styles.container}>
         
         

        <h1>{props.h1}</h1>
        <text>{props.Text}</text>
        <div className={styles.containerLogo}>
         <img className={styles.logo} src="/assets/logo.svg"/>
        </div>

     

          {/* imagens-header */}
         <div className={styles.containerImg}>
            <div className={styles.containerGrafismo}>
              <img className={styles.grafismo} src="/assets/grafismo.png" />
            </div>
           <img className={styles.imgMulher} src="/assets/foto-mulher.png"/>
           <img className={styles.imgJovem} src="/assets/foto-jovem.png"/>
           <img className={styles.imgIdoso} src="/assets/foto-idoso.png"/>
         </div>
        
         <div className={styles.contatos}>
          <img className={styles.whatsapp} src="/assets/whatsapp.png"/>
          <img className={styles.message} src="/assets/message.png"/>
          
         </div>

         
        
        
       </Container>
    )
}