import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID xfYDVakq8bKZ4QEHALn8CNuiIV2YbOorBaPYoqXN4j0'
        },
        params:{
            query: term
        }
    });
    return response.data.results;
    // return 0;
}

export default searchImages;