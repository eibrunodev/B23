import React from 'react';

import {Header} from '../src/components/header';
import {ContainerHeader} from '../src/components/container';
import {ListComponent} from '../src/components/listComponent';
import {FooterComponent} from '../src/components/footer/index';
import { Box,Button} from '@mui/material';


import GlobalStyles from '../styles/global';
import styles from '../styles/pageStyle.module.scss';



function HomePage() {
   
    
    return (
      
      <>
      
       <GlobalStyles/>
       <Header/>

          <ContainerHeader h1="Consulte e pague online seus débitos"
          Text= "Texto de apoio lorem ipsum dolor sit amet, consectetur adipiscing elit.Texto de apoio lorem ipsum dolor sit amet, consectetur"
          />
         
         
          <h2 className={styles.textConsulta}>Consultar débitos</h2> 
          <img className={styles.imgPague} src="/assets/paguecom.png"/>
         
       <Box className={styles.div} >
         <Box className={styles.imgBox}>
           <img className={styles.ilustraHome} src="/assets/ilustra-home.png"/>
         </Box>
       </Box> 

       <Box className={styles.saibaFacil}>
          <h1 className={styles.title}>Saiba como é fácil</h1>
          
          <Box className={styles.imgFacil}>
            <img className={styles.Finaliza} src="/assets/FINALIZA.png"/>
            <img className={styles.Lupa} src="/assets/LUPA.png"/>
            <img className={styles.Pesquisa} src="/assets/PESQUISA.png"/>
          </Box>
          <Box className={styles.Titles}>
              <h1>Consulta</h1>
              <h1>Seleciona</h1>
              <h1>Paga</h1>
          </Box>
          <Box className={styles.Paragrafos}>
              <p>Texto de apoio lorem ipsum dolor 
                sit amet, consectetur adipiscing elit. 
                Texto de apoio lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
              </p>

              <p>Texto de apoio lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Texto de apoio lorem 
                 ipsum dolor sit amet, consectetur adipiscing elit. 
              </p>

              <p>Texto de apoio lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Texto de apoio lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
              </p>
          </Box>
          
          
          <Box className={styles.ContainerConsultaBandeiras}>
           <Button variant="contained" className={styles.buttonConsulta}>Consulte débitos</Button>
            <img className={styles.bandeiras} src="/assets/bandeiras.png"/>
          </Box>
       </Box>

       <Box className={styles.ContainerAcham}>
        <h1>O que nossos clientes acham da gente</h1>
          <Box className={styles.ContainerOpinioes}>
            <Box className={styles.Opnioes}>
              <h2>Fábio Fernandes</h2>
              <h3>Brasília-DF</h3>
              <p>
              Texto de apoio lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Texto de apoio lorem ipsum dolor sit 
              amet, consectetur. 
              </p>
            </Box>
            <Box className={styles.Opnioes}>
              <h2>Fábio Fernandes</h2>
              <h3>Brasília-DF</h3>
              <p>
              Texto de apoio lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Texto de apoio lorem ipsum dolor sit 
              amet, consectetur. 
              </p>
            </Box>
            <Box className={styles.Opnioes}>
              <h2>Fábio Fernandes</h2>
              <h3>Brasília-DF</h3>
              <p>
              Texto de apoio lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Texto de apoio lorem ipsum dolor sit 
              amet, consectetur. 
              </p>
            </Box>
            <Box className={styles.Opnioes}>
              <h2>Fábio Fernandes</h2>
              <h3>Brasília-DF</h3>
              <p>
              Texto de apoio lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Texto de apoio lorem ipsum dolor sit 
              amet, consectetur. 
              </p>
            </Box>
            <Box className={styles.Opnioes}>
              <h2>Fábio Fernandes</h2>
              <h3>Brasília-DF</h3>
              <p>
              Texto de apoio lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Texto de apoio lorem ipsum dolor sit 
              amet, consectetur. 
              </p>
            </Box>
          </Box>
       </Box>
       <Box className={styles.ContainerNumeros}>
               <Box className={styles.numero1}>
                 <h1>52</h1>
                 <p>instituições conveniadas</p>
               </Box>
               <Box className={styles.numero2}>
                 <h1>200</h1>
                 <h2>mil</h2>
                 <p>clientes ajudados</p>
               </Box>
               <Box className={styles.numero3}>
                 <h1>520</h1>
                 <h2>mil</h2>
                 <p>débitos liquidados</p>
               </Box> 
       </Box>
          <Box className={styles.Duvidas}>
                <Box className={styles.tituloDuvidas}>
                  <h1>Ficou com dúvida?</h1>
                </Box>
                <Box className={styles.duvidas1}>
                 <ListComponent/>
                 <ListComponent/>
                 <ListComponent/>
                 <ListComponent/>
                 <h3>Veja mais</h3>
                </Box>   
          </Box>  
          
       <Box className={styles.footerContainer}>
         <FooterComponent/>
        
            
            
       </Box>
       
      
      
      </>
    )
  }
  
  export default HomePage