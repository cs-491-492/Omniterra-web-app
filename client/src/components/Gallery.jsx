import React from 'react'
import useSWR from "swr";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselComp from './CarouselComp';
import AreaGraph from '../components/AreaGraph';

const fetcher = url => axios.get(url).then(res => res.data)


export default function Gallery() {
    //const [collectionList, setCollectionList] = React.useState();
    const [collectionName, setCollectionName] = React.useState("");
    const [imageArray, setImageArray] = React.useState([]);
    const [ratioArray, setRatioArray] = React.useState([]);
    const { data, error } = useSWR('http://127.0.0.1:5000/list_collections', fetcher)
    console.log(data)

    const customStyles = {
        menu: (provided, state) => ({
          ...provided,
          width: state.selectProps.width,
          borderBottom: '1px dotted pink',
          color: state.selectProps.menuColor,
          padding: 20,
        }),
      
        control: (_, { selectProps: { width }}) => ({
          width: width
        }),
      
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }

    const style = {
        'border': '1px solid black',
        'width': '100%',
        'height': '100px',
        'backgroundColor': '#005477',
        display: "flex",
        flexDirection: "column",
       padding: "20px",
        alignItems: "center",

        
       
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
    function MakeImgItem(imgSent) {
        return  <div>
        <img src={`data:image/png;base64, ${imgSent}`}alt="" height={"500px"} width={"700px"}/>
        
    </div>
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
            setImageArray(myData.imgs)
            setRatioArray(myData.plot_array)
            console.log(myData.plot_array)
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
        <div >
        <div className='GeoJsonForm' id='GeoJsonForm' style={style}>
            <div style={{padding:"40px", width:"100px", height:"30px", display: "flex", }}>
            <form>
                <select onChange={selectHandler} style={{height:"50px", width:"150px", color:"white", background:"black"}} width='200px' menuColor='blue' name="cars">
                <option>  </option>
                    {data && data.map(MakeItem)}
                </select>
            </form>
            <button className='GeoJsonForm--submit' onClick={handleSubmit} style={{height:"30px", margin:"10px", background:"black", color:"white"}}>
                Submit
            </button>
             </div >
             <div style={{"height" : "500px","width" : "700px", margin:"30px" ,"border": "1px solid #dee2e6"}}>
                <Carousel showThumbs={false}>
                    {imageArray.length !== 0 && imageArray.map(MakeImgItem)}
                </Carousel>
             </div>
             {ratioArray.length !== 0 && <AreaGraph input_data={ratioArray}/>}
             </div>
           
          
            
          
     
        </div>
    )
}
// 
/*
 event.preventDefault()
        //do something with the data
        gejsonTemplate.features.push(JSON.parse(formData.data))
        let newData = gejsonTemplate
        console.log(newData) 
*/
