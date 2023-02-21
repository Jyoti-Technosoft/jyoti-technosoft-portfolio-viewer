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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GridLayout from '../MainContentComponents/GridLayout'
import HeaderBar from "../HeaderComponent/HeaderLayout"
import Carousel from "../MainContentComponents/Carousel"
import { useNavigate } from "react-router-dom";
import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import portfolioData from "./portfolio.json";

const drawerWidth = 240;
function CombineSideBar() {

  const [appData, setAppData] = React.useState(portfolioData);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [open, setOpen] = React.useState(true);
  const { projectName } = useParams();
  const path = projectName ? projectName : appData.ProgrammingLanguage[0].name;
  const [selectedLang, setSelectedLang] = React.useState(path);

  const handleListItemClick = (name, index) => {
    setSelectedIndex(index);
    setSelectedLang(name);
    navigate(`/${name}`);
  };

  React.useEffect(() => {
    navigate(`/${selectedLang}`);
  },[selectedLang])

  const navigate = useNavigate();

  const toogleselected = (value) => {
    setOpen(!value)
  };


  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderBar sidebar={open} handleListItemClick={toogleselected}  />
      <Drawer sx={{ width: open ? drawerWidth : 0 , flexShrink: 0, [`& .MuiDrawer-paper`]: { width: open ? drawerWidth : 0, boxSizing: 'border-box' }, }}
        variant="persistent" anchor="left" open={open}>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {appData.ProgrammingLanguage.map((object, index) => (
              <ListItem key={object.name} disablePadding>
                <ListItemButton
                    selected={selectedIndex === index}
                    onClick={() => handleListItemClick(object.name, index)}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={object.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, maxWidth: `100%`, }}>
        <Toolbar />
          <Routes>
              <Route exact path={selectedLang} element={<GridLayout  language = {selectedLang}  projectItem = {appData.Projects} />} />
              <Route exact path={`/${selectedLang}/:projectName`} element={<Carousel  language = {selectedLang}  projectItem = {appData.Projects} />} />
          </Routes>
      </Box>
    </Box>
  );
}


export default CombineSideBar