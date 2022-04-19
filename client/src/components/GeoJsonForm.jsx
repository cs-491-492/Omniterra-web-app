import React from 'react'

export default function GeoJsonForm() {

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
        <div className='GeoJsonForm'>
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
