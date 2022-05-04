import React, { useEffect } from "react";
import { useState } from "react";
import { saveAs } from 'file-saver'
import axios from "axios";
import '../App.css';
import Logo from "../images/uploadimage.jfif";
import { PieChart } from 'react-minimal-pie-chart';


const SegPage2 = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [imgSent, setimgSent] = useState();
  const [fetchError,setFetchError] = useState(false);
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
  
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      axios
      .post("http://127.0.0.1:5000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
      console.log(res.data)
      setimgSent(res.data)
      setFetchError(false);
      })
      .catch((err) => 
      {  setimgSent(selectedImage)
         setFetchError(true)
        console.log(err)});
    }
    else {
      console.log('no image selected')
    }
  };


  const downloadImage = async () => {
    if( !fetchError  ){
    const base64response = await fetch(`data:image/jpeg;base64,${imgSent}`); 
    const blob = await base64response.blob();
    saveAs(blob, 'image.jpg');
    }
    else {
      saveAs(imgSent,'image.jpg');
    }
  }

  return (
    
      <div style={styles.container}>
        <div className = "SegmentationPageUI">
        { (
          <div style={styles.preview}>
            <img
              src={selectedImage ? URL.createObjectURL(selectedImage): Logo}
              style={styles.image}
              alt="Thumb"
            />
            <div className = "SegmentationPageUI">
            
              <input accept="image/*" type="file" onChange={imageChange} title = "empty"/>
            
            <button onClick={removeSelectedImage} style={styles.delete} className = {selectedImage ? "btn" : "hideButton"}>
              Remove This Image
            </button>
            <button className = "btn" onClick={sendImg}> Send Image </button>
            </div>
          </div>
        )}
        <div className = "radialChart">
        <PieChart
            data={[
              { title: 'Red',  value: 10, color: '#FF0000' },
              { title: 'Yellow', value: 15, color: '#FFFF00' },
              { title: 'Blue', value: 20, color: '#0000ff' },
              { title: 'Purple', value: 20, color: '#9f81b7' },
              { title: 'Green', value: 20, color: '#00FF00' },
              { title: 'Red', value: 20, color: '#FFC380' },
            ]}
            />
             <div >
            <div className="pieChartExplanation">
            <div  className="color" style={{"background-color": "#FF0000",  "width": "30px", "height": "30px", "border-radius": "50%" }} id="000000"></div>
            <div>Building</div>
             </div>
             <div className="pieChartExplanation">
            <div  className="color" style={{"background-color": "#FFFF00",  "width": "30px", "height": "30px", "border-radius": "50%" }} id="000000"></div>
            <div>Road</div>
             </div>
             <div className="pieChartExplanation">
            <div  className="color" style={{"background-color": "#0000FF",  "width": "30px", "height": "30px", "border-radius": "50%" }} id="000000"></div>
            <div>Water</div>
             </div>
             <div className="pieChartExplanation">
            <div  className="color" style={{"background-color": "#9F81B7",  "width": "30px", "height": "30px", "border-radius": "50%" }} id="000000"></div>
            <div>Barren</div>
             </div>
             <div className="pieChartExplanation">
            <div  className="color" style={{"background-color": "#00FF00",  "width": "30px", "height": "30px", "border-radius": "50%" }} id="000000"></div>
            <div>Forest</div>
             </div>
             <div className="pieChartExplanation">
            <div  className="color" style={{"background-color": "#FFC380",  "width": "30px", "height": "30px", "border-radius": "50%" }} id="000000"></div>
            <div>Agricultural</div>
             </div>
             
             
             </div>
    </div>
        {(
          <div style={styles.preview} className ="SegmentationPageUI2">
            <img
             alt=""
              src={
                fetchError ? 
                imgSent ?  URL.createObjectURL(imgSent) : Logo : `data:image/png;base64, ${imgSent}`
               }
              style={styles.image}
            />
            <button onClick={removeSentImage} style={styles.delete} className = {imgSent ? "btn" : "hideButton"} >
              Remove This Image
            </button>
            <button onClick={downloadImage}>Download</button>
           

          </div>
        )}
        </div>
      </div>
   
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
    paddingTop: 20
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column"
  },
  image: { width: 500, height: 500 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none"
  }
};






