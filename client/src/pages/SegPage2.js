import React, { useEffect } from "react";
import { useState } from "react";
import { saveAs } from 'file-saver'
import axios from "axios";
import '../App.css';
import {VictoryPie} from 'victory';
import Logo from "../images/uploadimage.jfif";
import PieChart from '../components/NivoPie';
import useSwr from 'swr'
import '../components/graph_styles/text_area_style.css'


const SegPage2 = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [imgSent, setimgSent] = useState();
  const [fetchError,setFetchError] = useState(false);
  const [fetchRatio, setFetchRatio] = useState();
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    document.getElementById("CollectionForm").style.display = "inline";
    setSelectedImage();
  };

  const removeSentImage = () => {
    document.getElementById("segmentedImage").src = Logo;
    setimgSent();
  };

  const  [cForm, setCForm] = React.useState({data:""});

  const sendImg = () => {
  
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      formData.append("cname", cForm.data);
      axios
      .post("http://127.0.0.1:5000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
      console.log(res.data)
      setimgSent(res.data.img)
      setFetchRatio(res.data.ratio_dict)
      setFetchError(false);
      })
      .catch((err) => 
      {  setimgSent(selectedImage)
         setFetchError(true)
        console.log(err)});
      document.getElementById("CollectionForm").style.display = "none";
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

  function handleChange(event) {
    const {name, value} = event.target
    setCForm(prevState => ({
        ...prevState,
        [name]: value
    }))
    console.log(cForm.data)
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
            
            <button onClick={removeSelectedImage} style={styles.delete}   >
              Remove Image
            </button>
            <button className = "btn" onClick={sendImg}> Send Image </button>
            </div>
          </div>
        )}
       
        {(
          <div style={styles.preview} className ="SegmentationPageUI2">
            <img
             id = "segmentedImage"
             alt=""
              src={
                fetchError ? 
                imgSent ?  URL.createObjectURL(imgSent) : Logo : `data:image/png;base64, ${imgSent}`
               }
              style={styles.image}
            />
            <button onClick={removeSentImage} style={styles.delete}  >
              Remove Image
            </button>
            <button onClick={downloadImage}>Download</button>
          </div>
        )}
      
        </div>
        <div style={styles.collectionForm}>
        {
          <div className='CollectionForm' id='CollectionForm'>
          <form>
            <textarea 
            className="textarea"
                  value={cForm.data}
                  placeholder="Enter Collection Name to Save"
                  onChange={handleChange}
                  name="data"
                  style={{}}
              />
          </form>
          </div>
        }
        { fetchRatio && ( 
          
            <PieChart input_data={fetchRatio}/>
         )
        }
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
    paddingTop: 20,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    width: 400,
    height: 400
  },
  image: { width: 400, height: 400, border: "1px solid #dee2e6" },
  delete: {
    cursor: "pointer",
    padding: 0,
    background: "red",
    color: "white",
    border: "none",
    borderRadius: 4,
    fontSize: 12
  },
  deleteDisabled: {
    cursor: "not-allowed",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
    background: "#ccc",
    borderRadius: 4 
  },
  collectionForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  }
};






