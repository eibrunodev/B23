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

          <ContainerHeader h1="Consulte e Pague seus Débitos online"
            Text= "Pague agora qualquer boleto, guia, multa, imposto ou taxa em até 12x sem precisar sair de casa."
            Url1={"mulher"} Url2={"jovem"} Url3={"idoso"}
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
              <h1>Pague</h1>
          </Box>
          <Box className={styles.Paragrafos}>
              <p>
                Insira as informações necessárias de 
                acordo com o débito que quer pagar
              </p>

              <p>
              Escolha a forma de pagamento 
              e a quantidade de parcelas
              </p>

              <p>
                Finalize seu pagamento e tenha 
                seus débitos liquidados de forma segura e rápida
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
              <h2>Lucas Vasconcelos</h2>
              <h3>Águas Claras - DF</h3>
              <p>
              Minha vida é muito corrida, valorizo muito a praticidade que a 
              B23 trouxe pra minha vida. Mesmo quando quero parcelar em poucas vezes, 
              utilizo a B23 pela facilidade que ela oferece. 
              </p>
            </Box>
            <Box className={styles.Opnioes}>
              <h2>Beatriz Vilhena</h2>
              <h3>Brasília - DF</h3>
              <p>
              Como utilizo muito o cartão de crédito, 
              a B23 permite que eu esteja em dia com minhas 
              contas sem me sobrecarregar. Meus débitos são 
              quitados imediatamente, e só depois eu pago o 
              restante das parcelas. É muito útil pra mim!
              </p>
            </Box>
            <Box className={styles.Opnioes}>
              <h2>Juliana Lopes</h2>
              <h3>São Paulo - SP</h3>
              <p>
              É bom poder confiar numa empresa prática e moderna.
              Nunca tive nenhuma dificuldade e me sinto muito segura 
              com a B23. Recomendo bastante, de verdade.
              </p>
            </Box>
            <Box className={styles.Opnioes}>
              <h2>Carlos Vicente</h2>
              <h3>Uberlândia, MG</h3>
              <p>
              Eu pago minhas contas e as da minha mãe. Poder fazer tudo em um só 
              lugar é muito bom pra mim. Vocês ajudam muito pessoas como nós. Muito obrigado!
              </p>
            </Box>
            <Box className={styles.Opnioes}>
              <h2>Francisco Castro</h2>
              <h3>Fortaleza, CE</h3>
              <p>
              Entrei em contato por telefone e me explicaram 
              que eles têm credenciamento direto com os órgãos 
              e são certificados para fazerem transações online 
              com segurança. Me trouxe muita paz. Gostei demais! 
              </p>
            </Box>
          </Box>
       </Box>
       <Box className={styles.ContainerNumeros}>
               <Box className={styles.numero1}>
                 <h1>52</h1>
                 <p>instituições conveniadas e parceiras</p>
               </Box>
               <Box className={styles.numero2}>
                 <h1>26</h1>
                 <h2>Estados e o DF</h2>
                 <p>presente em todo o Brasil!</p>
               </Box>
               <Box className={styles.numero3}>
                 <h1>+10</h1>
                 <h2>milhões</h2>
                 <p>em débitos regularizados</p>
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