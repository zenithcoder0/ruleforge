import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ProfileIcon from './ProfileIcon';
import { useState } from 'react';
import TopMenu from './ProfileMenu';
import MenuBurger from './MenuBurger';
import NavMenu from './NavMenu';

export default function NavBar() {
    const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);

    const toggleProfileDrawer = (open: boolean) => () => {
        setProfileDrawerOpen(open);
    };
    const [burgerDrawerOpen, setBurgerDrawerOpen] = useState(false);

    const toggleBurgerDrawer = (open: boolean) => () => {
        setBurgerDrawerOpen(open);
    };
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <MenuBurger onClickBurger={toggleBurgerDrawer(true)}/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <ProfileIcon onClickProfile={toggleProfileDrawer(true)}/>
                </Toolbar>
            </AppBar>
            <TopMenu drawerOpen={profileDrawerOpen} toggleDrawer={toggleProfileDrawer} />
            <NavMenu drawerOpen={burgerDrawerOpen} toggleDrawer={toggleBurgerDrawer} />
        </Box>
    );
}
