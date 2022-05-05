import React from 'react'
//import { geoJsonData } from '../data/data'

export default function GeoJsonForm({geoJsonData}) {

    const style = {
        'border': '1px solid black',
        'width': '100%',
        'height': '100px',
        'backgroundColor': '#000000'
    }

    let data =  [{
      type:"Feature"
   }]
      


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
      data[0].geometry = JSON.parse(formData.data)
      geoJsonData.rows.push(data)
      console.log(geoJsonData)
       console.log(data)
    }

    return (
        <div className='GeoJsonForm' id='GeoJsonForm' style={style}>
        <form>
         <textarea 
                value={formData.comments}
                placeholder="Data"
                onChange={handleChange}
                name="data"
            />
            <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
        </form>
        <button className='GeoJsonForm--submit' onClick={handleSubmit}>
            Submit
        </button>
        </div>
    )
}
