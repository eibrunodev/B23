import React, {useState} from 'react';
import styles from './styles.module.scss';
import {List,ListItemButton,ListItemText,Collapse} from '@mui/material';
import {ExpandLess,ExpandMore} from '@mui/icons-material';

export function ListComponent({children,value}){
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
        <List  className={styles.listOne}>
            <ListItemButton   onClick={handleClick}>
            <ListItemText    primary={value} />
            {open ? <ExpandLess  /> : <ExpandMore className={styles.setaBaixo} />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 2 }}>
                    <ListItemText className={styles.paragrafo} >
                        <p>{children}</p>
                    </ListItemText>
                </ListItemButton>
            </List>
            </Collapse>
      </List>
    )
}
