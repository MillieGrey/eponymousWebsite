import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import photoList from "../assets/photoList.json";

import React from "react";

function Gallery() {
  return (
    <div
      class='lr_embed'
      style='position: relative; padding-bottom: 50%; height: 0; overflow: hidden;'
    >
      <iframe
        id='iframe'
        src='https://lightroom.adobe.com/embed/shares/3a376e5a1a02434ab3b04288c220c04c/slideshow?background_color=%232D2D2D&color=%23999999'
        frameborder='0'
        style='width:100%; height:100%; position: absolute; top:0; left:0;'
      ></iframe>
    </div>
  );
}

export default Gallery;
