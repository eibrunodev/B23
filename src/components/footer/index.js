import React from 'react';
import styles from './styles.module.scss';
import { Box,List,ListItemText,ListItem} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
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
                    <ListItem>
                        <ListItemText>Consultar débitos</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Quem somos</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Ajuda</ListItemText>
                    </ListItem>
                </List>
                <List >
                    <ListItem>
                        <ListItemText>Contato</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText><CallIcon className={styles.TelIcon}/> (61) 9 999.999</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText><LocalPostOfficeIcon className={styles.LocalIcon}/>soluções@B23.com</ListItemText>
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
                </Box>
    
            </Box>
        </footer>
    )
}