import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import photoList from "../assets/photoList.json";

const galleryContainer = {
  paddingTop: "100px",
};

function Gallery() {
  photoList.resources.forEach((element) => {
    // there is a json file that has all the secure urls for all the photos on cloudinary, i'm trying to turn that into a bunch of elements like the ones below
  });
  return (
    <Container style={galleryContainer}>
      <SRLWrapper>
        {/* This will be your content with the images. It can be anything. Content defined by
      yourself, content fetched from an API, data from a graphQL query... */}
        <a href='https://res.cloudinary.com/milliegrey/image/upload/v1635499384/My%20Photos/Rori_disney_princess.jpg'>
          <img
            src='https://res.cloudinary.com/milliegrey/image/upload/v1635499384/My%20Photos/Rori_disney_princess.jpg'
            alt='yes'
            width='300rem'
          />
        </a>
        <a href='https://res.cloudinary.com/milliegrey/image/upload/v1635499384/My%20Photos/Fall_Rori-235-200925_a8emsp.jpg'>
          <img
            src='https://res.cloudinary.com/milliegrey/image/upload/v1635499384/My%20Photos/Fall_Rori-235-200925_a8emsp.jpg'
            alt='no'
            width='300rem'
          />
        </a>
        {/* <CloudinaryContext cloudName='milliegrey'>
          <Image publicId='My%20Photos/Rori_disney_princess.jpg' width='200rem' />
          <Image publicId='My%20Photos/Fall_Rori-235-200925_a8emsp.jpg' width='200rem' />
        </CloudinaryContext> */}
      </SRLWrapper>
    </Container>
  );
}
export default Gallery;
