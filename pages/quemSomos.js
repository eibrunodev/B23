import React from 'react';
import {Header} from '../src/components/header';
import {ContainerHeader} from '../src/components/container';
import GlobalStyles from '../styles/global';

import styles from '../styles/quemSomosStyle.module.scss';


import {FooterComponent} from '../src/components/footer/index';
import { Button,Box,TextField,FormControl,Form} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

function QuemSomos() {
    return (
      <>
        <GlobalStyles/>
        <Header/>
       
        
        <ContainerHeader className={styles.HeaderQuem} h1="Quem somos"
         Text= "A B23 é uma empresa de business technology com atuação nacional que presta serviços especializados a instituições financeiras e não financeiras,  desenvolvendo, implantando e operando soluções tecnológicas de ponta."
         Url1={"mão"} Url2={"cafe"} Url3={"jovens"}
       />

          
         
        <Box className={styles.containerQuemSomos}>
          <Box className={styles.cantainerImgMissao}>
            <img src="assets/ilustra-quem_somos.png"/>
              <Box className={styles.Missao}>
                <h1>Missão</h1>
                  <p>Existimos para permitir que pessoas
                    liquidem de forma financeiramente saudável, 
                    ética e eficiente as suas dívidas.
                  </p>
              </Box>
          </Box>
            <Box className={styles.ContainerTrabalheForm}>
              <Box className={styles.trabalhe}>
                <h1>Trabalhe Conosco</h1>
                  <p>
                    Nossa equipe é dinâmica, eficiente e competente. 
                    Temos as mais importantes certificações do mercado e 
                    buscamos excelência em tudo que fazemos. Se identificou? 
                    Faça parte dessa missão e trabalhe conosco!
                  </p>
              </Box>

              <Box className={styles.Form}>
               <FormControl >
                 <TextField id="outlined-basic" label="Nome" variant="outlined" className={styles.TextNome} />
                 <TextField id="outlined-basic" label="E-mail" variant="outlined" className={styles.TextNome} />
                 <TextField id="outlined-basic" label="Telefone" variant="outlined" className={styles.TextNome} />
                  
            
                  <TextField
                    id="outlined-multiline-static"
                    label="Mensagem"
                    multiline
                    rows={9}
                    defaultValue=""
                    className={styles.CaixaText}
                  />

                  <Button className={styles.ButtonEnviar} size="large">Enviar</Button>
                  <Button className={styles.ButtonAnexar} ><AttachFileIcon/> Anexar</Button>
               </FormControl >
              </Box>
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