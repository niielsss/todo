import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';

export default function Navbar(props) {

    const routes = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Todo List',
            path: '/todo-list'
        },
        {
            name: 'Extra',
            path: '/extra'
        }
    ]

    const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleSidebarToggle = () => {
    setMobileOpen(!mobileOpen);
  };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleSidebarToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign={'center'}>
                        Duodeka - Technical Test
                    </Typography>
                </Toolbar>
            </AppBar>
            <Sidebar routeArray={routes} mobileOpen={mobileOpen} handleSidebarToggle={handleSidebarToggle}>
                {props.children}
            </Sidebar>
        </Box>
    );
}