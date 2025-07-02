import { Drawer, Box, Typography, Button } from "@mui/material";

type Props = {
    drawerOpen: boolean;
    toggleDrawer: (open: boolean) => () => void;
}

export default function TopMenu({toggleDrawer, drawerOpen}: Props) {


    return (
        <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
        >
            <Box
                sx={{ padding: 2 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <Typography variant="h6" gutterBottom>
                    Profile Menu
                </Typography>
                <Button fullWidth>1</Button>
                <Button fullWidth>2</Button>
                <Button fullWidth>3</Button>
            </Box>
        </Drawer>
    );
}