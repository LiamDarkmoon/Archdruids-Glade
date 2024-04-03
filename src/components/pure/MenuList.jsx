import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { Home, Task, Person, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home/>)

        case 'TASK':
            return (<Task/>)

        case 'PERSON':
            return (<Person/>)

        case 'SETTINGS':
            return (<Settings/>)
    
        default:
            return (<Home/>)
    }
}


const MenuList = ({list}) => {

    const navigate = useNavigate();
    const navigation = (path) => {
        navigate(path)
    }

    return (
        <List>
            { list.map(({text, path, icon}, index) => 
            (
                <ListItemButton key={index} onClick={navigation(path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText primary={text}/>

                </ListItemButton>
            )
            ) }
        </List>
    );
}

export default MenuList;
