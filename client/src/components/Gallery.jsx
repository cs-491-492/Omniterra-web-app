import React from 'react'
import AreaGraph from "../components/AreaGraph";
import useSWR from "swr";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselComp from './CarouselComp';
const fetcher = url => axios.get(url).then(res => res.data)


export default function Gallery() {
    //const [collectionList, setCollectionList] = React.useState();
    const [collectionName, setCollectionName] = React.useState("");
    const [imageArray, setImageArray] = React.useState([]);
    const [ratioArray, setRatioArray] = React.useState([]);
    const { data, error } = useSWR('http://127.0.0.1:5000/list_collections', fetcher)
    console.log(data)

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

    function MakeItem(x) {
        return <option> {x} </option>
    }

    function handleSubmit(event) {
        
        if (collectionName) {
            const formData = new FormData();
            formData.append("cname", collectionName);
            axios
            .post("http://127.0.0.1:5000/retrieve_collection", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
           let myData = res.data;
           let arr = [];
           myData.forEach(element => {
               arr.push(element.img)
           }
               )
            setImageArray(arr)
             arr = [];
            myData.forEach(element => {
                arr.push(element.ratio_dict)
            })
            setRatioArray(arr)
            console.log(imageArray)
            console.log(ratioArray)
            })
            .catch((err) => 
            {  
              console.log(err)});
          }
          else {
            console.log('no image selected')
          }
    }
    const selectHandler = (event) => {
        const value = event.target.value
       console.log(value)
       setCollectionName(value)
        console.log(collectionName)
    }

    

    return (
        <div className='GeoJsonForm' id='GeoJsonForm' style={style}>
        <form>
            <select onChange={selectHandler}>
                {data && data.map(MakeItem)}
            </select>
        </form>
        <button className='GeoJsonForm--submit' onClick={handleSubmit}>
            Submit
        </button>
        <div style={{"height" : "500px","width" : "500px" }}>
             <Carousel>
                <div>
                    <img src="data:image/jpeg;base64,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" alt="" height={"200px"} width={"200px"}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="data:image/jpeg;base64,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" alt="" height={"200px"} width={"200px"}/>
                    <p className="legend">Legend 2</p>
                </div>
        </Carousel>
        </div>
         <AreaGraph/>
        </div>
    )
}

/*
 event.preventDefault()
        //do something with the data
        gejsonTemplate.features.push(JSON.parse(formData.data))
        let newData = gejsonTemplate
        console.log(newData) 
*/
