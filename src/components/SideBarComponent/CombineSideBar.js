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


const drawerWidth = 240;
function CombineSideBar() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (key, index) => {
      setSelectedIndex(index);
      navigate(`/${key}`)
    };

    const navigate = useNavigate();
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderBar/>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['All', 'Angular', 'Java', 'React'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                    selected={selectedIndex === index}
                    onClick={() => handleListItemClick(text, index)}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
          <Routes>
              <Route exact path='/' element={<GridLayout />} />
              <Route exact path="/all" element={<Carousel />} />
              <Route exact path="/angular" element={<GridLayout />}/>
              <Route exact path="/react" element={<GridLayout />}/>
              <Route exact path="/java" element={<GridLayout />}/>
          </Routes>
      </Box>
    </Box>
  );
}


export default CombineSideBar