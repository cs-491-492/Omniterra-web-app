import React from "react";
import { useState } from "react";
import { saveAs } from 'file-saver'
import axios from "axios";

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
        {selectedImage && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
            <button onClick={removeSelectedImage} style={styles.delete}>
              Remove This Image
            </button>
          </div>
        )}
        {imgSent && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(imgSent)}
              style={styles.image}
              alt="Thumb"
            />
            <button onClick={removeSentImage} style={styles.delete}>
              Remove This Image
            </button>
          </div>
        )}
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





