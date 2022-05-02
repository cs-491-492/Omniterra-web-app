
import React, { Component, useRef,useState } from "react";
import * as markerjs2 from "markerjs2";
import { saveAs } from "file-saver";

function Annotation() {
  const imgRef = useRef();
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  function showMarkerArea() {
    if (imgRef.current !== null) {
      // create a marker.js MarkerArea
      const markerArea = new markerjs2.MarkerArea(imgRef.current);
      // attach an event handler to assign annotated image back to our image element
      markerArea.settings.defaultColorSet = [
        " #000000",
        "#FFFF00",
        "#FFFF00",
        "#FF00FF",
        "#00FFFF",
        "#FF0000",
        "#0000FF",
        "#00FF00"
      ];
      markerArea.addEventListener("render", (event) => {
        if (imgRef.current) {
          imgRef.current.src = event.dataUrl;
        }
      });
      // launch marker.js
      markerArea.show();
    }
  };

  const downloadImg = () => {
    let imgUrl = imgRef.current.src;
    console.log(imgUrl);
    saveAs(imgUrl, "img.png");
  };

  //clear image
  const clearImg = () => {
    setSelectedImage()
  }

   const sendImg = () => {
   } 
    return (
      <div className="App">
       { selectedImage && <img
          ref={imgRef}
          src={URL.createObjectURL(selectedImage)}
          alt="sample"
          crossOrigin="anonymous"
          style={{ width:"auot", height:"auto" }}
          onClick={() => showMarkerArea()}
        />}
         
        <button onClick={downloadImg}> Download Image </button>
        <input style={{}} accept="image/*" type="file" onChange={imageChange} />
        <button onClick={clearImg}> Clear Image </button>
        <button onClick={sendImg}>Send Img</button>
      </div>
    );
  
}



export default Annotation;
