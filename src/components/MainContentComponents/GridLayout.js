import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cards from "./Cards";
import "./MainContent.scss"
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function GridLayout(props) {

  const [projectItem, setProjectItem] = React.useState([]);
  const [language, setSelectedLang] = React.useState();

  React.useEffect(() => {
    loadProjects(props.language); 
  }, [props.projectItem, props.language]);

  React.useEffect(() => {
    setSelectedLang(props.language);
  }, [props.language])

  const loadProjects = (language) => {
    let projects = props.projectItem.filter((project) => (project.language == language || language == 'all'));
    if (projects?.length > 6) {
      projects = projects.slice(0, 6);
    }
    setProjectItem(projects)
  }
  
  const loadMoreProject = (visibleProjectIndex ) =>  {
    let projects = props.projectItem.filter((project) => (project.language == language || props.language == 'all'));
    projects = projects.slice(0, (visibleProjectIndex+6));
    setProjectItem(projects)
  }

  return (
    <Box sx={{ flexGrow: 1, margin: '10px 0px 0px 8px', }}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        { projectItem.map((pdetails, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Cards projectData={pdetails} />
          </Grid>
        ))}
      </Grid>
      <div>
         { projectItem.length < props.projectItem.filter((project) => (project.language == language || props.language == 'all'))?.length ? 
            <div className='load-button'>
              <Button variant="text" onClick={ () => { loadMoreProject(projectItem?.length) }}>load more</Button>
            </div> 
            : <></>
         }
      </div>

    </Box>
  );
}

export default GridLayout