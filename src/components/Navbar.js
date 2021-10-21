import React from "react";
import Nav from "react-bootstrap/Nav";
import { RiGithubLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const footerStyle = {
  fontFamily: "Rajdhani",
  fontSize: "16px",
  backgroundColor: "rgba(26, 26, 26, 0.7)",
  position: "fixed",
  top: "0",
  width: "100%",
  height: "35px",
  zIndex: "100",
};

const navLinksWrapper = {
  display: "flex",
  flexDirection: "row",
  marginLeft: "auto",
  width: "120px",
};

const navLinksWrapperInvisible = {
  display: "flex",
  flexDirection: "row",
  marginRight: "auto",
  width: "120px",
  visibility: "hidden",
};

const iconStyle = {
  color: "#b6b6b6",
  height: "15px",
  width: "15px",
};

const navLinkStyle = {
  height: "40px",
  width: "40px",
  padding: "0px",
  margin: "0px",
  lineHeight: "40px",
};

const navLinkTextStyle = {
  color: "#b6b6b6",
  height: "40px",
  width: "auto",
  paddingLeft: "6px",
  paddingRight: "6px",
  paddingTop: "0px",
  paddingBottom: "0px",
  margin: "0px",
  lineHeight: "40px",
};

export default function Footer() {
  return (
    <Nav className='justify-content-center' style={footerStyle}>
      <div style={navLinksWrapperInvisible}></div>

      <Nav.Link href='/home' as={Link} to='/home' style={navLinkTextStyle}>
        Millie Grey
      </Nav.Link>

      <p style={navLinkTextStyle}> | </p>

      <Nav.Link href='' style={navLinkTextStyle}>
        Gallery
      </Nav.Link>

      <Nav.Link href='/about' as={Link} to='/about' style={navLinkTextStyle}>
        Flights
      </Nav.Link>

      <Nav.Link href='/contact' as={Link} to='/contact' style={navLinkTextStyle}>
        Projects
      </Nav.Link>

      <div style={navLinksWrapper}>
        <Nav.Link href='https://github.com/MillieGrey' target='blank' style={navLinkStyle}>
          <RiGithubLine style={iconStyle} />
        </Nav.Link>

        <Nav.Link href='//www.instagram.com/milliegreyscale/' target='blank' style={navLinkStyle}>
          <RiInstagramLine style={iconStyle} />
        </Nav.Link>
      </div>
    </Nav>
  );
}
