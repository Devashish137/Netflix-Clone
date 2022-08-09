import React, {useEffect,useState} from 'react'
import axios from 'axios'
import requests from './requests'
function Banner() {
    const[movie,setMovie] = useState([]);
    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length - 1)
                ]
            )
            return requests;
        }
        fetchData();
    }, []);
    console.log(movie)
  return (
    <div>
        
        
    </div>
  )
}

export default Banner