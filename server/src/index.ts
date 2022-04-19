const express = require('express')
const axios = require('axios')
const app = express()
const port = 5002

const options = {
  method: 'POST',
  url: 'https://nsfw-images-detection-and-classification.p.rapidapi.com/adult-content',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Host': 'nsfw-images-detection-and-classification.p.rapidapi.com',
    'X-RapidAPI-Key': '83685a434fmsh7d95056e1e40f0bp1636eajsna2017779fb52'
  },
  data: '{"url":"https://images.unsplash.com/photo-1602911429311-1c56a6c42a81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}'
};

let getFacts = async () => {
  let response = await axios.get(`https://catfact.ninja/fact`);
  return response;
};

let getImg = async () => {
  let response = await axios(`https://aws.random.cat/meow`);
  return response;
};


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.post('/hi', async (req:any, res:any) => {
  let facts = await getFacts();
  res.send(facts.data.fact);
})

app.post('/cat', async (req:any, res:any) => {
  let img = await getImg();
  res.send(img.data.file);
})

