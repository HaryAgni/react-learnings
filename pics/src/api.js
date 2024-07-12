import axios from "axios";

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID xfYDVakq8bKZ4QEHALn8CNuiIV2YbOorBaPYoqXN4j0'
        },
        params:{
            query: 'cars'
        }
    });
    console.log(response);
    return response;
}

export default searchImages;