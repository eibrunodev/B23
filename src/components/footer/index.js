import React from 'react';
import styles from './styles.module.scss';
import { Box,List,ListItemText,ListItem} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export function FooterComponent(){
    return(
        <footer  className={styles.ContainerFooter}>
            <Box className={styles.Logo}>
                <img src='/assets/logo.svg'/>
            </Box>
            <Box className={styles.Parceiros}>
                <img src='/assets/Parceiros.png'/>
            </Box>
            <Box className={styles.Info}>
                <Box className={styles.Consutar}>
                    <List >
                        <ListItem >
                            <ListItemText className={styles.Text}>Consultar débitos</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText className={styles.Text}>Quem somos</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText className={styles.Text}>Ajuda</ListItemText>
                        </ListItem>
                    </List>
                    <List >
                        <ListItem>
                            <ListItemText className={styles.Text}>Contato</ListItemText>
                        </ListItem>
                        <ListItem className={styles.ContatoEmail}>
                            <div className={styles.Contato}><WhatsAppIcon /><ListItemText> (61) 9 999.999</ListItemText></div>
                            
                            <div className={styles.Email}><LocalPostOfficeIcon className={styles.LocalPostOffice}/><ListItemText >soluções@B23.com</ListItemText></div>
                            
                        </ListItem>
                        
                    </List>
                    <List >
                        <ListItem className={styles.RedesIcon}>
                            <ListItemText>Redes Sociais</ListItemText>
                            <ListItemText><FacebookIcon/><TwitterIcon/><InstagramIcon/><LinkedInIcon/></ListItemText>
                        </ListItem>
                    
                    </List>
                 
                </Box>
                <Box className={styles.Descricao}>
                <h4>Empresa credenciada junto ao DENATRAN pela portaria Nº 750, de 18 de Outubro de 2018.<a>Saiba mais</a> | Termo de uso | Politica de privacidade</h4>
                <h5>CNPJ 40.402.740/0001-79| Razão Social - B23 Tecnologia e Pagamentos Ltda| Endereço:Setor SHN Quadra 1 Bloco A Conjunto A, 1113 Sala Parte C, Ed. Le Quartier</h5>
                </Box>
    
            </Box>
        </footer>
    )
}