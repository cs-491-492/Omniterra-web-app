
import './App.css';
import SegmentedImage from "./images/exp_result.png";
import React, { Component } from "react";
//import { Box, Typography, ListItem, withStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';

export default class SegPage extends Component {
  constructor(props ) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
    this.clear = this.clear.bind(this);
    this.download = this.download.bind(this);


    this.state = {
      currentFile: undefined,
      previewImage: undefined,
      progress: 0,

      message: "",
      isError: false,
      imageInfos: [],
    };
  }

  
  download(e) {
    const {
      currentFile,
      previewImage,
      progress,
      message,
      imageInfos,
      isError
    } = this.state;
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", previewImage); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };


  selectFile(event) {
    this.setState({
      currentFile: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0]),
      progress: 0,
      message: ""
    });
  }

  upload() {
    this.setState({
      progress: 0
    });
  }

  clear(event){
    this.setState({
      currentFile: null,
      previewImage: null,
      progress: 0,
      message: ""
    });
  }

  /*download(){
    window.location.href 
    = "File/randomfile.docx";
  }*/


  render() {
    const {
      currentFile,
      previewImage,
      progress,
      message,
      imageInfos,
      isError
    } = this.state;
    
    return (
      <div>
        <label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="btn-upload"
            style={{ display: 'none' }}
            type="file"
            accept="image/*"
            onChange={this.selectFile} />
          <Button
            //className="btn-choose"
            variant="outlined"
            component="span" >
             Choose Image
          </Button>
        </label>
    
        <Button
          //className="btn-upload"
          color="primary"
          variant="contained"
          component="span"
          disabled={!currentFile}
          onClick={this.upload}>
          Upload
        </Button>

        <Button
          //className="btn-upload"
          color="primary"
          variant="contained"
          component="span"
          disabled={!currentFile}
          onClick={this.clear}>
          Clear
        </Button>

        <Button
          //className="btn-upload"
          color="primary"
          variant="contained"
          component="span"
          disabled={!currentFile}
          onClick={this.download}>
          Download
        </Button>


        {previewImage && (
         <div style={{ display: "flex", justifyContent: "flex-end", flexDirection:'row' }}>
            <img className="preview my20" src={previewImage} alt="" />
            <img className="preview my20" src={SegmentedImage} alt="" />
          </div>
        )}
      </div >
    );
  }
}