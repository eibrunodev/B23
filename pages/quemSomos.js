import React from 'react';
import {Header} from '../src/components/header';
import {ContainerHeader} from '../src/components/container';
import GlobalStyles from '../styles/global';

import styles from '../styles/quemSomosStyle.module.scss';


import {FooterComponent} from '../src/components/footer/index';
import { Box} from '@mui/material';

function QuemSomos() {
    return (
      <>
        <GlobalStyles/>
        <Header/>
       
        
        <ContainerHeader className={styles.HeaderQuem} h1="Quem somos"
         Text= "A B23 é uma empresa de business technology com atuação nacional que presta serviços especializados a instituições financeiras e não financeiras,  desenvolvendo, implantando e operando soluções tecnológicas de ponta."
        />

          
          
        <Box className={styles.containerQuemSomos}>
        <Box className={styles.Missao}>
            <h1>Missão</h1>
              <p>Existimos para permitir que pessoas
                liquidem de forma financeiramente saudável, 
                ética e eficiente as suas dívidas.
              </p>
          </Box>
          <img src="assets/ilustra-quem_somos.png"/>

              <Box classname={styles.trabalhe}>
                <h1>Trabalhe Conosco</h1>
                  <p>
                    Nossa equipe é dinâmica, eficiente e competente. 
                    Temos as mais importantes certificações do mercado e 
                    buscamos excelência em tudo que fazemos. Se identificou? 
                    Faça parte dessa missão e trabalhe conosco!
                  </p>
              </Box>
           
          <Box>
            
          </Box>

          

        </Box>

        <Box>
         <FooterComponent/>
        </Box>

      </>
    )
  }
  
  export default QuemSomos