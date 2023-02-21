import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps }from '../../store/mapPropsToState';

function Cards(props) {
  console.log(props)
 
  const navigate = useNavigate();
  
  const [pdetails, setProjdetails] = React.useState(props.projectData);

  React.useEffect(() => {
    setProjdetails(props.projectData);
  }, [props.projectData])

  const handleNext = (pdetails) => {
    console.log(pdetails)
    props.setSelectedProjectAction(pdetails);
    navigate(`${pdetails?.projectName}`);
  };

  const openWebsites = (websiteRef) => {
    window.open(websiteRef, '_blank', 'noreferrer');
  }

  return (
    <Card sx={{ maxWidth: 430 }} className="grid-card" onClick={ () => { handleNext(pdetails) } } >
      <CardMedia
        sx={{ height: 250 }}
        image="https://picsum.photos/seed/picsum/200/300"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { pdetails?.projectName }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { pdetails?.description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={ () => { openWebsites(pdetails?.websiteRefenceLink)}}>Visit site</Button>
      </CardActions>
    </Card>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards) 