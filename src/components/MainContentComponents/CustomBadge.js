import { Container } from "@mui/material"
import * as React from 'react'

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
        <Container sx={{ maxWidth: 'auto', spacing:0 }} className={cssClass}> { 
            libraries?.map((item, index) => {{
                return <div className='set-background' sx={{width: "auto"}}>{item}</div>
            }})
        }
        </Container>
    </div>
  )
}

export default CustomBadge

