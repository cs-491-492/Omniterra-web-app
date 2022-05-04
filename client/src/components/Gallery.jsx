import React from 'react'
import AreaGraph from "../components/AreaGraph";

export default function Gallery() {

    const style = {
        'border': '1px solid black',
        'width': '100%',
        'height': '100px',
        'backgroundColor': '#005477'
      }

    let gejsonTemplate = {
        "type": "FeatureCollection",
        "features": [
        ]
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
        gejsonTemplate.features.push(JSON.parse(formData.data))
        let newData = gejsonTemplate
        console.log(newData)
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
        <AreaGraph/>
        </div>
    )
}