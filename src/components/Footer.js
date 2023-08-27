import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <Link href="https://www.instagram.com/unaisak_/" target="_blank">
      <InstagramIcon />
            </Link>
            
            <Link href="http://www.facebook.com/unais" target="_blank">
            <FacebookIcon />
            </Link>
       
            <Link
            href="http://www.linkedin.com/im/muhammad-unais-ak-0510a325b"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
      </div>
      <p> &copy; 2023 muhammad unais ak</p>
    </div>
  );
}

export default Footer;
