import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import "./footerStyle.scss"

const FooterLayout = () => {
  return (
    <div className="footer-wrapper">
        <div className="container justify-content-center">
        <Link href="https://www.facebook.com/info.jyotitechnosoft/?ref=py_c" className="btn-floating waves-effect waves-light grey darken-3">
            <FacebookRoundedIcon fontSize="large"/>
            </Link>
            <Link href="https://g.page/jyoti-technosoft?gm" className="btn-floating waves-effect waves-light grey darken-3">
                <i className="fa fa-google-plus-square"></i>
            </Link>
            <Link href="https://twitter.com/JyotiTechnosoft" className="btn-floating waves-effect waves-light grey darken-3">
                <TwitterIcon fontSize="large"/>
            </Link>
            <Link href="https://in.linkedin.com/company/jyoti-technosoft" className="btn-floating waves-effect waves-light grey darken-3">
                <LinkedInIcon fontSize="large"/>
            </Link>
            <Link href="https://github.com" className="btn-floating waves-effect waves-light grey darken-3">
                <GitHubIcon fontSize="large"/>
            </Link>
        </div>
        <div className="footer-copyright grey lighten-3 grey-text text-darken-3">
        <div className="container">© 2023 Jyoti Technosoft LLP</div>
        </div>
    </div>
  )
}

export default FooterLayout;


