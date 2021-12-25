

import './App.css';
import OmAppBar from './components/OmAppBar';
import OmAppBar2 from './components/OmAppBar2';
import OmMapBox from './components/OmMapBox';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid'
import { useForm } from "react-hook-form";

import React, { Component } from "react";
//import { Box, Typography, ListItem, withStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';

export default class SegPage extends Component {
  constructor(props ) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      currentFile: undefined,
      previewImage: undefined,
      progress: 0,

      message: "",
      isError: false,
      imageInfos: [],
    };
  }


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
        <div className="file-name">
        {currentFile ? currentFile.name : null}
        </div>
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
          onClick={this.upload}>
          Clear
        </Button>


        {previewImage && (
          <div>
            <img className="preview my20" src={previewImage} alt="" />
          </div>
        )}


      </div >
    );
  }
}