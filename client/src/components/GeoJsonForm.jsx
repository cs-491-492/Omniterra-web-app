import React from 'react'
import axios from 'axios'
//import { geoJsonData } from '../data/data'
import '../App.css';
import './graph_styles/text_area_style.css'

export default function GeoJsonForm() {

    const style = {
        'border': '1px solid black',
        'width': '100%',
        'height': '100px',
        'backgroundColor': '#000000'
    }

      


    const  [formData, setFormData] = React.useState({
        data:""    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        //do something with the data
        // let jsonArr =  JSON.parse(data)
        let data = JSON.parse(formData.data)
        console.log(data)
        const frmData = new FormData();
        data = JSON.stringify(data)
        frmData.append("data", data);
        axios
        .post("http://127.0.0.1:5000/add_data", frmData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
      console.log(res.data)
      
      })
      .catch((err) => 
      {  
        console.log(err)});
        window.location.reload(false);
    }
    

    return (
        <div className='GeoJsonForm' id='GeoJsonForm' style={style}>
        <form>
         <textarea 
                className = "textarea2"
                value={formData.data}
                placeholder="Enter Data"
                onChange={handleChange}
                name="data"
            />
        </form>
        <button className='GeoJsonForm--submit' onClick={handleSubmit}>
            Submit
        </button>
        </div>
    )
}
