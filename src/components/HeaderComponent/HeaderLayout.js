import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import "./headerStyle.scss";
import logo from '../../assests/JTimg.png'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../store/mapPropsToState';


function HeaderBar(props) {
  const [ theme, setTheme ] = React.useState(false);
  const toogleSideBar = () => {
    props.handleListItemClick(props.sidebar)
  }

  const switchTheme = () => {
    props.switchTheme(!theme);
    setTheme(!theme);
  }

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
      <Container maxWidth="xl" className='align-header'>
        <Toolbar disableGutters>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={ toogleSideBar }
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className='customize-logo' width='10px'/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JYOTI Technosoft LLP
          </Typography>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JYOTI Technosoft
          </Typography>
        </Toolbar>
        <Container className="inner-container">
          <FormGroup>
            <FormControlLabel control={<Switch color="secondary" onChange={() => { switchTheme()} }/>} label="Dark Mode" labelPlacement="end"/>
          </FormGroup>
        </Container>
      </Container>
    </AppBar>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);