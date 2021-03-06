import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import photoList from "../assets/photoList.json";

import React from "react";

const galleryContainer = {
  // paddingTop: "100px",
  display: "flex",
  // position: 'absolute',
  height: "100vh",
  width: "100vw",
  alignItems: "center",
  justifyContent: "center",
};

const adobeIframe = {
  width: "90%",
  height: "100%",
  // position: "absolute",
  paddingTop: "100px",
  top: "0",
  left: "0",
  zIndex: "100",
};

function Gallery() {
  return (
    <Container style={galleryContainer}>
      <iframe
        id='iframe'
        src='https://lightroom.adobe.com/embed/shares/3a376e5a1a02434ab3b04288c220c04c/slideshow?&color=%23999999'
        frameborder='0'
        title='gallery'
        style={adobeIframe}
      ></iframe>
    </Container>
  );
}

export default Gallery;
