import React, {useState} from 'react';
import styles from './styles.module.scss';
import {List,ListItemButton,ListItemText,Collapse} from '@mui/material';
import {ExpandLess,ExpandMore} from '@mui/icons-material';

export function ListComponent(){
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
        <List  className={styles.listOne}>
            <ListItemButton   onClick={handleClick}>
            <ListItemText    primary="Lorem Ipsom dolor sit amet, consectetur ?" />
            {open ? <ExpandLess  /> : <ExpandMore className={styles.setaBaixo} />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 2 }}>
                    <ListItemText className={styles.paragrafo} >
                        <p>Texto de apoio lorem ipsum dolor 
                        sit amet, consectetur adipiscing elit. 
                        Texto de apoio lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Texto de apoio 
                        lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Texto de apoio lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Texto de apoio lorem 
                        ipsum dolor sit amet, consectetur adipiscing elit. 
                        Texto de apoio lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit.</p>
                    </ListItemText>
                </ListItemButton>
            </List>
            </Collapse>
      </List>
    )
}
