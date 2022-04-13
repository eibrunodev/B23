import React from 'react';

import {FooterComponent} from '../src/components/footer/index';
import {Header} from '../src/components/header';
import {ContainerHeader} from '../src/components/container';

import { Button,Box,TextField,FormControl,Form} from '@mui/material';

import styles from '../styles/consultaStyles.module.scss';
import GlobalStyles from '../styles/global';

function ConsultaDebito(){

    

    return (
       <>
       <GlobalStyles/>
        <Header/>
        <ContainerHeader />   
       
        <Box className={styles.ContainerConsulta}>
            <FormControl>
              
            </FormControl>
        </Box>

        <FooterComponent/>
       </>
    )
}

export default ConsultaDebito;