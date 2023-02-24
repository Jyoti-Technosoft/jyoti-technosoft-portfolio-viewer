import { Container } from "@mui/material"
import * as React from 'react'
import Tooltip from '@mui/material/Tooltip';

function CustomBadge(props) {
    const [libraries, setLibraries] = React.useState([]);
    const [cssClass, setCssClass] = React.useState('');


    React.useEffect(() => {
        setCssClass(props.cssClass);
    },props.cssClass)

    React.useEffect(() => {
        setLibraries(props.libraries);
    }, [props.libraries])

  return (
    <div className="set-position">
        <Container sx={{ maxWidth: 'auto', spacing:0, color: (theme) => { return theme.palette.badge.color }}} className={cssClass}> { 
            libraries?.map((item, index) => {{
                return (<Tooltip  title={item} arrow>
                            <Container className='set-background' sx={{width: "auto", backgroundColor: (theme) => { return theme.palette.badge.background }}}>
                                {item}
                            </Container>
                        </Tooltip>)
            }})
        }
        </Container>
    </div>
  )
}

export default CustomBadge

