import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Container from '@mui/material/Container';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps }from '../../store/mapPropsToState';
import { useParams } from 'react-router-dom';
import CustomBadge from './CustomBadge';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function Carousel(props) {
  const { projectName } = useParams();
  const [ selectedProject, setSelectedProject ] = React.useState();
  const [ activeStep, setActiveStep ] = React.useState(0);
  const [ images, setImages ] = React.useState([]);
  const theme = useTheme();
  const maxSteps = props?.selectedProject?.images.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };


  React.useEffect(() => {
    const data = props?.selectedProject
    setSelectedProject(data);
    setImages(data?.images)
  },[props.selectedProject]);

  React.useEffect(() => {
    if (projectName != selectedProject?.projectName) {
      const data = props?.projectList?.find((item) => item?.projectName === projectName);
      if (data) {
        setSelectedProject(data);
        props.setSelectedProjectAction(data);
      }
    }
  },[props.projectList]);


  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box sx={{ maxWidth: '80%', flexGrow: 1 }} className="align-item-center">
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography className='custom-header'>{ selectedProject?.projectName }</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images?.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  <ImageListItemBar
                  sx={{
                    backgroundColor: '#98b2b7',
                    position:'relative'
                    }}
                    title={step.label}
                    position="top"
                    actionPosition="left"
                  />
                  <Box component="img" sx={{
                      height: 450,
                      display: 'block',
                      maxWidth: '100%',
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                </>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper  sx={{ fontSize:'35px'}}
          className='stepper set-width'
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              className='text-height'
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} 
              className='text-height'
              disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      <CustomBadge libraries={selectedProject?.libraries} cssClass={'carousel-view'}/>
      <Container className="container-description" sx={{ maxWidth: '80%', flexGrow: 1 }}>
        { selectedProject?.description }
      </Container>
      </Box>
  </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);