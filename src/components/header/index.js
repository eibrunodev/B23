import React from 'react';
import styles from './title.module.scss'

import {ButtonGroup,Button} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Link from 'next/link';
export function Header(){
    return(
        <div className={styles.container}>
            <ButtonGroup className={styles.buttonContainer}>

               <Link href="/">
                <Button>Inicio <div className={styles.linha}/></Button>
               </Link> 

              <Link href="/consultaDebito"> 
                <Button>Consulta de débitos <div className={styles.linha}/></Button>
              </Link>  

              <Link href="atendimento">
                <Button>Atendimento presencial <div className={styles.linha}/></Button>
              </Link>
                <Link href="/quemSomos">   
                    <Button>Quem somos <div className={styles.linha}/></Button>
                </Link>

                <Link href="/agente"> 
                    <Button>Quero ser um agente <div className={styles.linha}/></Button>
                </Link> 
            
                <Link href="/ajuda"> 
                    <Button>Ajuda </Button>
                </Link>

                <Link href="/login">
                    <Button  className={styles.login} variant="outlined" ><AccountCircleIcon /> Acessar</Button>
                </Link>

            </ButtonGroup>
        </div>
    )
}