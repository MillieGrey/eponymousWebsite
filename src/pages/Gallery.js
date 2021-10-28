import React from "react";
import { Lightbox } from "react-lightbox-pack"; // <--- Importing LightBox Pack
import "react-lightbox-pack/dist/index.css";
import data from "../assets/imgData.json"; // <--- Importing Sample JSON Data

const Gallery = () => {
  // State
  const [toggle, setToggle] = React.useState(false);
  const [sIndex, setSIndex] = React.useState(0);

  // Handler
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };

  return (
    <div>
      // data should be an array of object
      {data.map((item, index) => (
        <>
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            style={{ maxHeight: "80vh", maxWidth: "50vw" }}
            onClick={() => {
              lightBoxHandler(true, index);
            }}
          />
        </>
      ))}
      //Component
      <LightBox
        state={toggle}
        event={lightBoxHandler}
        data={data}
        imageWidth='60vw'
        imageHeight='70vh'
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
      />
    </div>
  );
};
export default Gallery;
