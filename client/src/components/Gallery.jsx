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
       <CarouselComp/>
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
