import React,{useState,useMemo} from 'react';
import {Header} from '../src/components/header';
import {FooterComponent} from '../src/components/footer/index';

import GlobalStyles from '../styles/global';

import styles from '../styles/ajudaStyles.module.scss';

import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';
import { Button,Box,TextField,InputAdornment} from '@mui/material';


import {ListComponent} from '../src/components/listComponent';

function Ajuda(){

    const duvidas = [
        { 
            title: `É seguro pagar com a B23?`, 
            conteudo: `O site da B23 segue todos os 
            protocolos de segurança exigidos pelos órgãos, 
            credenciadoras e bandeiras. Além disso,possui criptografia 
            e não armazena os dados referentes ao cartão de crédito do 
            cliente. A B23 possui o Certificado PCI-DSS, que permite fazer 
            o manuseio dos dados sensíveis sem ter receio de perdas ou vazamentos. 
            Seguimos as regras estabelecidas pelo Banco Central e rigorosamente a 
            Lei Geral de Proteção de Dados (LGPD).`
        },

        { 
            title: `Posso pagar no boleto?`, 
            conteudo: ` Sim, geramos um boleto no final da sua compra. Ao realizar o 
            pagamento do boleto, seguimos para dar baixa aos seus débitos. 
            Além do boleto, você pode pagar com até dois cartões de crédito em 
            até 12 vezes, cartão de débito, PIX, ou uma mistura destas formas de pagamento.`
        },

        { 
            title: `Quem pode usar os serviços da B23?`, 
            conteudo: `Qualquer pessoa que tenha ao menos um cartão de crédito com limite suficiente para a quitação 
            dos débitos e a taxa de serviço, ou saldo para pagamento à vista através de PIX, 
            boleto ou cartão de débito. Os valores podem ser parcelados com cartões de terceiros mediante
            análise de titularidade.`
        },

        { 
            title: `Posso parcelar qualquer débito do meu veículo?`, 
            conteudo: `Todos os débitos que constam no DETRAN ou na SEFAZ 
            são parceláveis: multas, IPVA, licenciamento, seguro obrigatório, etc.`
        },

        {
            title: `O que pode ser parcelado?`, 
            conteudo: `Você pode parcelar em até 12 vezes multas, IPVA, energia elétrica,
             IPTU, ITBI, ICMS, dívida ativa, contas diversas (telefone, internet, boletos 
             bancários etc), contas de água, parcelamento administrativo, taxas públicas ou 
             de entidades de classe, impostos municipais e ou estaduais entre outros. Parcelamos 
             qualquer boleto bancário. `
        },

        { 
            title: `Quanto tempo demora a regularização do débito após sua quitação?`, 
            conteudo: `Dependendo do tipo de débito, a baixa pode ocorrer em até 10 minutos.
            Porém, informamos que o prazo máximo é de até 72 horas úteis.`
        },
        { 
            title: `Posso simular o valor do meu parcelamento?`, 
            conteudo: `Sim, ela é realizada diretamente no nosso site.
             É necessário apenas informar os dados do veículo ou os dados 
             relevantes para consulta do débito ou código de barra do boleto ou guia.`
        },
        { 
            title: `Quais tipos de cartões e em quantas vezes posso parcelar?`, 
            conteudo: `Trabalhamos com cartões de crédito e débito e as principais 
            bandeiras, como VISA, MASTERCARD, ELO, HIPERCARD, AMEX, CABAL. Você pode 
            parcelar em até 12 vezes no cartão de crédito.`
        },
        { 
            title: `É possível parcelamento de dívida ativa?`, 
            conteudo: `Sim, em alguns casos o nosso site apresenta a sua dívida caso você 
            tenha o número do CDA, em outros casos nós apenas parcelamos a sua guia.`
        },
        {
             title: `O parcelamento pode ser feito em dois cartões?`, 
             conteudo: `Sim, você pode parcelar em até dois cartões de crédito e escolher 
             qual valor colocar em qual cartão. É necessário apenas ter limite de crédito 
             suficiente para o pagamento do valor total gerado.`
        },
        { 
            title: `Como saber o status do meu pedido?`, 
            conteudo: `Após realizar seu login, seu histórico de compras e status de pedido 
            constará nos “Seus Pagamentos`
        },
        { 
            title: `Quais os benefícios que a B23 oferece?`, 
            conteudo: `Proporcionar condições de manter suas contas em dia, sem dispor de 
            recursos financeiros imediatos; Pagamento parcelado no cartão de crédito, 
            em até 12 vezes, inclusive utilizando cartões de terceiros ou familiares; 
            Pagamento facilitado também na opção de débito, PIX ou boleto.`
        },

        { 
            title: `Como acessar meus comprovantes?`, 
            conteudo: `O seu recibo será enviado para o seu e-mail. Além disso, após realizar 
            seu login, seu histórico de compras e status de pedido constará nos “Seus Pagamentos`
        },
        { 
            title: `Como emito o meu novo CRLV?`, 
            conteudo: `Após a baixa dos seus débitos, acesse o site do órgão e verifique os 
            procedimentos para emissão do CRLV digital.`
        },
        { 
            title: `A baixa no atendimento presencial é mais rápida?`, 
            conteudo: `Não, o tempo de baixa é igual para pagamentos online ou presenciais.`
        },
        { 
            title: `Qual o vínculo da B23 com o Detran?`, 
            conteudo: `A B23 é credenciada junto ao Senatran e aos Detrans, o que nos 
            permite acesso seguro às informações referentes aos débitos veiculares.`
        },

        { 
            title: `Qual a vantagem de parcelar as dívidas no cartão de crédito?`, 
            conteudo: `A B23 é credenciada junto ao Senatran e aos Detrans, o que nos permite 
            acesso seguro às informações referentes aos débitos veiculares.`
        },

              
      ]

    const [busca,setBusca] = useState('');
    
    

    const buscaRealizada = useMemo(()=>{
        const LowerCase = busca.toLowerCase();
       return duvidas.filter((duvida)=>duvida.title.toLowerCase().includes(LowerCase))
    },[busca]) 
    
      
    return (
        <>
            <GlobalStyles/>
            <Header/>
            
            <Box className={styles.ajuda}>
                 <Box className={styles.WhatsAppIcon}>
                     <Button><WhatsAppIcon className={styles.IconZap} /></Button>
                     <Button><ChatIcon className={styles.IconMessage}/></Button>
                 </Box>   
            <h1 className={styles.title}>Ajuda</h1>

                 <TextField
                    id="input-with-icon-textfield"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <SearchIcon />
                        </InputAdornment>
                     ),
                    }}
                     variant="standard"
                     className={styles.Buscar}
                     value={busca}
                     onChange={(ev)=>setBusca(ev.target.value)}


                 />
                   {buscaRealizada.map((duvida)=>(
                     <ListComponent className={styles.list} key={duvida.title} value={duvida.title}>{duvida.conteudo}</ListComponent>
                     ))}

            </Box>   
            <FooterComponent/>
            
        </>
    )
}

export default Ajuda;