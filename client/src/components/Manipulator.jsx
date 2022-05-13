
import React, { Component, useRef,useState } from "react";
import * as markerjs2 from "markerjs2";
import { saveAs } from "file-saver";
//import '../styles/Manipulator.css';
//The code snippet below is obtained from https://gist.github.com/rickkk856/6a2800cc84dd8fd456074e5a467edc47

function Manipulator(){
    /*
    const imgRef = useRef();
    const [selectedImage, setSelectedImage] = useState();

    const downloadImg = () => {
        let imgUrl = imgRef.current.src;
        console.log(imgUrl);
        saveAs(imgUrl, "img.png");
    };
    
    //clear image
    const clearImg = () => {
        setSelectedImage()
    };

    const sendImg = () => {
    }; 
    */
 /*
    var canvas = document.querySelector('canvas')
    var ctx = canvas.getContext('2d')

    var base_image = new Image();
    base_image.crossOrigin = "anonymous";
    base_image.onload = () => {
        ctx.drawImage(base_image, 0, 0);
        //const base64 = this.getBase64Image(base_image);
        //this.setState({currentImagebase64: base64});  
    }
    base_image.src = 'client/src/images/exp_result.png';
    //ctx.fillStyle = 'white';
    //ctx.fillRect( 0, 0, canvas.width, canvas.height);

    var Brush_Size = 30 //Change made here


    var coord_list = []
    var mouse = {x: 0, y: 0}

    var clear_button = document.querySelector('#reset')
    var save_button = document.querySelector('#save')
    var exit_button = document.querySelector('#exit')
    var save_mask = document.querySelector('#save_mask')

    canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX - this.offsetLeft
    mouse.y = e.pageY - this.offsetTop
    })
    canvas.onmousedown = ()=>{
    ctx.beginPath()
    ctx.moveTo(mouse.x, mouse.y)

    canvas.addEventListener('mousemove', onPaint)
    }
    canvas.onmouseup = ()=>{
    canvas.removeEventListener('mousemove', onPaint)
    }
    var onPaint = ()=>{
    coord_list.push([mouse.x,mouse.y])
    ctx.fillRect(mouse.x-( Brush_Size/2), mouse.y-(Brush_Size/2), Brush_Size, Brush_Size)
    ctx.stroke()
    }

    const colors = document.getElementsByClassName('color');

    Array.from(colors).forEach(color => {
        color.addEventListener('click', (event) => {
            const colorSelected = event.target.getAttribute('id-color');
            ctx.fillStyle = colorSelected;
        });
    });


    clear_button.onclick = ()=>{{
        console.log('Clearing Screen')
        coord_list = []
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(base_image, 0, 0);
        }}
        canvas.addEventListener('load', function() {{
        console.log('All assets are loaded')
    }})
    var data = new Promise(resolve=>{{
        save_button.onclick = ()=>{{
        resolve(canvas.toDataURL('image/jpg'))
        }}
    }})  
    var data2 = new Promise(resolve=>{{
        save_mask.onclick = ()=>{{
        var mask = JSON.stringify(coord_list);
        resolve(mask)
        }}
        exit_button.onclick = ()=>{{
        resolve()
        }}
    }})
   */

    



    return(
    <div className="App">


    <canvas  style={{"border":"1px solid black "}} id="myCanvas" width="256" height="256"></canvas>

    <div >
    <div  class="color" style={{"background-color": "#000000",  "width": "30px", "height": "30px", "border-radius": "50%" }} id="000000"></div>
    <div class="color" style={{"background-color": "#FFFFFF",  "width": "30px", "height": "30px", "border-radius": "50%", "border":"1px solid black "}} id-color="#FFFFFF" opacity="0.5"></div>
    <div class="color"  style={{"background-color": "#FFFF00",  "width": "30px", "height": "30px", "border-radius": "50%"}} id-color="#FFFF00"></div>
    <div class="color" style={{"background-color": "#FF00FF",  "width": "30px", "height": "30px", "border-radius": "50%"}} id-color="#FF00FF"></div>
    <div class="color" style={{"background-color": "#00FFFF",  "width": "30px", "height": "30px", "border-radius": "50%"}} id-color="#00FFFF"></div>
    <div class="color" style={{"background-color": "#FF0000",  "width": "30px", "height": "30px", "border-radius": "50%"}} id-color="#FF0000"></div>
    <div class="color" style={{"background-color": "#0000FF",  "width": "30px", "height": "30px", "border-radius": "50%"}} id-color="#0000FF"></div>
    <div class="color" style={{"background-color": "#00FF00",  "width": "30px", "height": "30px", "border-radius": "50%"}} id-color="#00FF00"></div>
    </div>

    <div>
    <button id="save" >Save</button>
    <button id="save_mask">Save Mask</button>
    <button id="reset">Reset</button>
    <button id="exit">Exit</button>
    </div> 
    </div>
    );
}

export default Manipulator;