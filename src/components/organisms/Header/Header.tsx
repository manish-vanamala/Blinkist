import Logo from '../../atoms/Logo/Logo';
import Typography from '../../atoms/typography/Typographys';
import {Menu, MenuItem} from '@mui/material';
import {ArrowDropUp, Search} from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
const HeaderComponent = (props : any) => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Logo {...props} sx={{ flexGrow: 1 }}/>
                <Menu open={true} sx={{display: 'flex', alignItems: 'center'}}>
                    <MenuItem key={0} sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography variant='h1' content='Explore'/>
                        <ArrowDropUp />
                    </MenuItem>
                    <MenuItem key={1}>
                        <Search />
                    </MenuItem>
                    <MenuItem key={2}>
                        <Typography variant='h1' content='My Library'/>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderComponent;