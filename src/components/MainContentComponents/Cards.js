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
import CustomBadge  from './CustomBadge'

function Cards(props) {
  const navigate = useNavigate();
  
  const [pdetails, setProjdetails] = React.useState(props.projectData);

  React.useEffect(() => {
    setProjdetails(props.projectData);
  }, [props.projectData])

  const handleNext = (pdetails) => {
    props.setSelectedProjectAction(pdetails);
    navigate(`${pdetails?.projectName}`);
  };

  const openWebsites = (event, websiteRef) => {
    event.stopPropagation();
    window.open(websiteRef, '_blank', 'noreferrer');
  }

  return (
    <Card sx={{ maxWidth: 430, minHeight: 500, maxHeight:500 }} className="grid-card" onClick={ () => { handleNext(pdetails) } } >
      <CardMedia
        sx={{ height: 250 }}
        image="https://picsum.photos/seed/picsum/200/300"
        title="green iguana"
      />
      <CardContent sx={{ maxWidth: 430, minHeight: 140, maxHeight:140 }}>
        <Typography gutterBottom variant="h5" component="div">
          { pdetails?.projectName }
        </Typography>
        <Typography className="align-text" variant="body2" color="text.primary">
          { pdetails?.description }
        </Typography>
      </CardContent>
      <CustomBadge libraries={pdetails?.libraries} cssClass={'card-view'} />
      <CardActions>
        <Button size="small" onClick={ (event) => { event.stopPropagation(); }}>Share</Button>
        <Button size="small" onClick={ (event) => { openWebsites(event, pdetails?.websiteRefenceLink)}}>Visit site</Button>
      </CardActions>
    </Card>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards) 