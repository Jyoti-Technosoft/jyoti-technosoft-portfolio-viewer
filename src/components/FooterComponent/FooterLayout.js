import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { positions } from '@mui/system';

const FooterLayout = () => {
  return (
    <div className="footer-wrapper">
        <div className="container center">
        <a href="https://www.facebook.com/info.jyotitechnosoft/?ref=py_c" className="btn-floating waves-effect waves-light grey darken-3">
            <FacebookRoundedIcon fontSize="large"/>
            </a>
            <a href="https://g.page/jyoti-technosoft?gm" className="btn-floating waves-effect waves-light grey darken-3">
                <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://twitter.com/JyotiTechnosoft" className="btn-floating waves-effect waves-light grey darken-3">
                <TwitterIcon fontSize="large"/>
            </a>
            <a href="https://in.linkedin.com/company/jyoti-technosoft" className="btn-floating waves-effect waves-light grey darken-3">
                <LinkedInIcon fontSize="large"/>
            </a>
            <a href="https://github.com" className="btn-floating waves-effect waves-light grey darken-3">
                <GitHubIcon fontSize="large"/>
            </a>
        </div>
        <div className="footer-copyright grey lighten-3 grey-text text-darken-3">
        <div className="container center">© 2023 Jyoti Technosoft LLP</div>
        </div>
    </div>
  )
}

export default FooterLayout;


