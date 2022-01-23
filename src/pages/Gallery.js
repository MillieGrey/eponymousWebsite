import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import photoList from "../assets/photoList.json";

import React from "react";

const galleryContainer = {
  paddingTop: "100px",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  left: "0",
};

function Gallery() {
  return (
    <Container style={galleryContainer}>
      <iframe
        id='iframe'
        src='https://lightroom.adobe.com/embed/shares/3a376e5a1a02434ab3b04288c220c04c/slideshow?background_color=%232D2D2D&color=%23999999'
        frameborder='0'
        title='gallery'
      ></iframe>
    </Container>
  );
}

export default Gallery;
