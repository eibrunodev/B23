import React from 'react';
import {Header} from '../src/components/header';
import {ContainerHeader} from '../src/components/container';
import GlobalStyles from '../styles/global';

import styles from '../styles/agenteStyles.module.scss';


import {FooterComponent} from '../src/components/footer/index';
import { Button,Box,TextField,FormControl,Checkbox } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';



const label = { inputProps: { "aria-label": "Checkbox demo" } };

function QuemSomos() {

    return (
      <>
        <GlobalStyles/>
        <Header/>
       
        
        <ContainerHeader className={styles.HeaderQuem} h1="Agente Credenciado"
         Text="Nossos agentes credenciados nos representam de forma presencial em pontos estratégicos no Brasil. Como importantes parceiros de negócio, recebem uma comissão sobre o faturamento dos parcelamentos realizados."
         Url1={"mão"} Url2={"cafe"} Url3={"jovens"}
       />

        <Box className={styles.agenteTel}>
            <img src='/assets/agente-tel.png'/>
        </Box>  
         
        <Box className={styles.containerQuemSomos}>
          <Box className={styles.cantainerImgMissao}>
            <img src="assets/ilustra-agente.png"/>
              <Box className={styles.Afiliado}>
                <h1>Agente Afiliado</h1>
                  <p>Temos agentes afiliados por todo o Brasil! 
                    Estes representantes vendem através de suas redes sociais e 
                    outros meios online a nossa solução, gerando assim uma significativa 
                    renda complementar através da comissão que recebem em cima do valor de 
                    cada parcelamento realizado. 
                  </p>
              </Box>
          </Box>
            <Box className={styles.ContainerTrabalheForm}>
              <Box className={styles.SejaAgente}>
                <h1>Seja um agente você também</h1>
                  <p>
                  Preencha os dados ao lado para se tornar um agente
                   da B23. Descreva o que te motiva a revender nossa solução. 
                   Nós entraremos em contato para formalizar o início da nossa 
                   parceria! Obrigada pelo seu interesse. 
                  </p>
              </Box>

              
               <FormControl className={styles.Form}>
                 <Box className={styles.FormLeft}>    
                        <TextField id="outlined-basic" label="Nome" variant="outlined" className={styles.TextNome} />
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" className={styles.TextNome} />
                        <TextField id="outlined-basic" label="Telefone" variant="outlined" className={styles.TextNome} />
                       
                            <Box className={styles.check}>
                                <Checkbox {...label}  />
                                Agente credenciado
                            </Box>    
                            <Box className={styles.check}>
                                <Checkbox {...label} />
                                Agente afiliado
                            </Box>
                    
                  </Box>
                    <Box className={styles.FormRigt}>
                    <TextField id="outlined-basic" label="CPF/CNPJ" variant="outlined" className={styles.CPF} />
                       <TextField
                            id="outlined-multiline-static"
                            label="Mensagem"
                            multiline
                            rows={4}
                            defaultValue=""
                            className={styles.CaixaText}
                        />
                        <Button className={styles.ButtonEnviar} size="large">Enviar</Button>
                    </Box>
    
               </FormControl >
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