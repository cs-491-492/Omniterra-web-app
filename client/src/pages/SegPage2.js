import React from "react";
import { useState } from "react";
import { saveAs } from 'file-saver'
import axios from "axios";
import '../App.css';
import Logo from "../images/uploadimage.jfif";

const SegPage2 = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [imgSent, setimgSent] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const removeSentImage = () => {
    setimgSent();
  };

  const sendImg = () => {
    setimgSent(selectedImage);
  };

  const downloadImage = () => {
    saveAs(URL.createObjectURL(selectedImage), 'image.jpg') // Put your image url here.
  }

 

  return (
    <>
      <div style={styles.container}>
        <input accept="image/*" type="file" onChange={imageChange} />
        <button onClick={sendImg}> send image </button>
        <button onClick={downloadImage}>Download</button>
        <div className = "SegmentationPageUI">
        { (
          <div style={styles.preview}>
            <img
              src={selectedImage ? URL.createObjectURL(selectedImage): Logo}
              style={styles.image}
              alt="Thumb"
            />
            <div className = "SegmentationPageUI">
            <input  accept="image/*" type="file" onChange={imageChange} title = "empty"/>
            <button onClick={removeSelectedImage} style={styles.delete} className = {selectedImage ? "btn" : "hideButton"}>
              Remove This Image
            </button>
            <button className = "btn" onClick={sendImg}> send image </button>
            </div>
          </div>
        )}
        {(
          <div style={styles.preview} className ="SegmentationPageUI2">
            <img
              src={imgSent ?  URL.createObjectURL(imgSent) : Logo}
              style={styles.image}
            />
            <button onClick={removeSentImage} style={styles.delete} className = {imgSent ? "btn" : "hideButton"} >
              Remove This Image
            </button>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default SegPage2;

// Just some styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column"
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none"
  }
};





