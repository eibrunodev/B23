import React from 'react';
import {Header} from '../src/components/header';
import {ContainerHeader} from '../src/components/container';
import GlobalStyles from '../styles/global';
import styles from '../styles/pageStyle.module.scss';


function QuemSomos() {
    return (
      <>
        <GlobalStyles/>
        <Header/>
       
         <h1>Quem somos</h1>
        <ContainerHeader h1="Quem somos"
         Text= "Texto de apoio lorem ipsum dolor sit amet, consectetur adipiscing elit.Texto de apoio lorem ipsum dolor sit amet, consectetur"
        />

        <div className={styles.div}>Imagem Aqui</div>
      </>
    )
  }
  
  export default QuemSomos