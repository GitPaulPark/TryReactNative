import * as React from 'react';
import {Link} from "react-router-dom"
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function SideMenu(props) {
    const theme = useTheme();

    // const [open, setOpen] = React.useState(false);
    const [list, setList] = React.useState([
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Profile",
            url: "/profile"
        },
        {
            name: "Axios",
            url: "/axios"
        },
        {
            name: "mobxPractice",
            url: "/async"
        },
        {
            name: "InfiniteScroll",
            url: "/scroll"
        },
    ]);

const handleDrawerClose = () => {
    props.handleDrawerClose();
}



    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={props.open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>

                <Divider/>
                <List>
                    {list.map((item, index)=>(
                            <Link  key={index} style={{textDecoration:'none'}} to={`${item.url}`}>
                                <ListItem  disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText  primary={item.name} />
                                </ListItemButton>
                                </ListItem>
                            </Link>
                        ))
                    }
                </List>

                <Divider/>
            </Drawer>

        </Box>
    );
}
