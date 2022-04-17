import React,{useEffect, useState} from 'react';

import {FooterComponent} from '../src/components/footer/index';
import {Header} from '../src/components/header';
import {ContainerHeader} from '../src/components/container';

import { Button,Box,TextField,FormControl,Form} from '@mui/material';

import styles from '../styles/consultaStyles.module.scss';
import styles1 from '../styles/consultaDebitos.module.scss';
import GlobalStyles from '../styles/global';

import axios from 'axios';

const baseUrl ='http://api.parcelenahora.com.br/login/v1/login';

function ConsultaDebito(){

    var axios = require('axios');
    var data = JSON.stringify({
      "email": "cesar.ferreira@b23s.com.br",
      "senha": "Cesray@01"
    });
    
    var config = {
      method: 'post',
      url: 'http://api.parcelenahora.com.br/login/v1/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data.token));
    })
    .catch(function (error) {
      console.log(error);
    });

    var axios = require('axios');
var data = JSON.stringify({
  "cpf": "04995073639",
  "uf": "DF",
  "placa": "FSK2F56",
  "renavam": "01001570917",
  "inscricaoImovel": ""
});

var config = {
  method: 'post',
  url: 'http://api.parcelenahora.com.br/api/v1/ConsultaDebito',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkPDqXNhciBWaW5pY2l1cyBkZSBQYXVsYSBGZXJyZWlyYSIsImVtYWlsIjoiY2VzYXIuZmVycmVpcmFAYjIzcy5jb20uYnIiLCJuYW1laWQiOiI0MTYiLCJyb2xlIjoiYWRtaW4iLCJuYmYiOjE2NDk5MzU4MjgsImV4cCI6MTY0OTk0MzAyOCwiaWF0IjoxNjQ5OTM1ODI4fQ.-pL9Pl1S8IkKy88SPbdl9yuYDddHY1kGzL6f1Ab9oIw', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

var axios = require('axios');
var data = JSON.stringify({
  "pedido": 1462658,
  "qtdParcelas": 2,
  "codFaturas": [
    6632157
  ]
});

var config = {
  method: 'post',
  url: 'http://api.parcelenahora.com.br/api/v1/CotacaoDebito',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkPDqXNhciBWaW5pY2l1cyBkZSBQYXVsYSBGZXJyZWlyYSIsImVtYWlsIjoiY2VzYXIuZmVycmVpcmFAYjIzcy5jb20uYnIiLCJuYW1laWQiOiI0MTYiLCJyb2xlIjoiYWRtaW4iLCJuYmYiOjE2NDk5MzU4MjgsImV4cCI6MTY0OTk0MzAyOCwiaWF0IjoxNjQ5OTM1ODI4fQ.-pL9Pl1S8IkKy88SPbdl9yuYDddHY1kGzL6f1Ab9oIw', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

    
    return (
       <>
       <GlobalStyles/>
        <Header/>
        <ContainerHeader />   
       

          
         
        <Box className={styles1.containerQuemSomos}>
            <Box className={styles1.ContainerTrabalheForm}>
              
              <Box className={styles1.Form}>
               <FormControl >
                 <TextField id="outlined-basic" label="PLACA" variant="outlined" className={styles1.TextNome} />
                 <TextField id="outlined-basic" label="RENAVAM" variant="outlined" className={styles1.TextNome} />
                 <TextField id="outlined-basic" label="TELEFONE" variant="outlined" className={styles1.TextNome} />
                 <TextField id="outlined-basic" label="E-MAIL" variant="outlined" className={styles1.TextNome} />
                 
              
                  <Button className={styles1.ButtonEnviar} size="large">Enviar</Button>
                  
               </FormControl >
              </Box>
            </Box>
        <Box>
            
          </Box>

          

        </Box>

        <Box></Box>
        <FooterComponent/>
       </>
    )
}

export default ConsultaDebito;