import * as React from 'react';
// import { Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridLayout from '../MainContentComponents/GridLayout'
import HeaderBar from "../HeaderComponent/HeaderLayout"
import Carousel from "../MainContentComponents/Carousel"
import { useNavigate } from "react-router-dom";
import { Routes, Route, } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import portfolioData from "./portfolio.json";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps }from '../../store/mapPropsToState';
import Avatar from '@mui/material/Avatar';
import "./sidebarStyle.scss"
import FooterLayout from '../FooterComponent/FooterLayout';
import { red } from '@mui/material/colors';
import { Container } from '@mui/system';
const drawerWidth = 240;

function CombineSideBar(props) {
  const navigate = useNavigate();
  const [appData, setAppData] = React.useState(portfolioData);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [open, setOpen] = React.useState(true);
  const location = useLocation();
  const path = appData.ProgrammingLanguage.find(lang => lang?.name === location.pathname.split('/')[1])?.name;
  const projectName = location.pathname.split('/')[2] ? location.pathname.split('/')[2] : '';
  const selectedPath = path ? path : appData.ProgrammingLanguage[0].name;
  const [selectedLang, setSelectedLang] = React.useState(selectedPath);

  const handleListItemClick = (name, index) => {
    setSelectedIndex(index);
    setSelectedLang(name);
    navigate(`/${name}`);
  };

  React.useEffect(() => {
    const index = appData.ProgrammingLanguage.findIndex(lang => lang?.name === location.pathname.split('/')[1]);
    if (index > -1) {
      setSelectedIndex(index);
    } 
  },[selectedIndex])

  React.useEffect(() => {
    navigate(`/${selectedLang}/${projectName}`);
    if (projectName) {
      const projectItem = props?.projectItem?.find((project) => (project?.language === selectedLang || selectedLang === 'all'))
      props.setSelectedProjectAction(projectItem);
    }
  },[selectedLang])

  React.useEffect(() => {
    props.setProjectListAction(appData?.Projects);
  },[appData])


  const toogleselected = (value) => {
    setOpen(!value)
  };

  
  return (
    <Box sx={{ display: 'flex', backgroundColor: (theme) => theme.palette.background }}>
      <CssBaseline />
      <HeaderBar sidebar={open} handleListItemClick={toogleselected}  />
      <Drawer className="custom-drawer" sx={{ backgroundColor: (theme) => { return theme.palette.sidebar.background},  width: open ? drawerWidth : 0 , flexShrink: 0, [`& .MuiDrawer-paper`]: { width: open ? drawerWidth : 0, boxSizing: 'border-box' }, }}
        variant="persistent" anchor="left" open={open}>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {appData.ProgrammingLanguage.map((object, index) => (
              <ListItem key={object.name} disablePadding sx={{ backgroundColor: (theme) => { return theme.palette.primary} }}>
                <ListItemButton 
                    selected={selectedIndex === index}
                    onClick={() => handleListItemClick(object.name, index)}
                    sx={{
                      // backgroundColor: (theme) => {
                      //   if (selectedIndex === index) {
                      //    console.log(selectedIndex)
                      //    console.log(theme?.palette.primary.main)
                      //    return theme?.palette.secondary.main;
                      //  }
                      //   return theme?.palette.secondary.main;
                    // }
                  }
                  }
                >
                  <ListItemIcon>
                    { <Avatar alt="Remy Sharp" src={object.image}/>}
                  </ListItemIcon>
                  <ListItemText primary={object.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box className="main-container" component="main" sx={{ flexGrow: 1, p: 3, maxWidth: `100%`,}}>
        <Container className="main-wrapper">
        <Toolbar />
          <Routes>
              <Route exact path={selectedLang} element={<GridLayout  language = {selectedLang}  projectItem = {appData.Projects} />} />
              <Route exact path={`/${selectedLang}/:projectName`} element={<Carousel  language = {selectedLang}  projectItem = {appData.Projects} />} />
          </Routes>
          </Container>
        <FooterLayout/>

      </Box>
    </Box>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(CombineSideBar)