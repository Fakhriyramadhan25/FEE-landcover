import { useEffect, useState } from 'react';
import {  TileLayer } from 'react-leaflet';



function GEE(props) {
    const [queryRes, setQueryRes] = useState('');
    const [test, setTest] = useState(false)

    useEffect(()=>{

        const fetchingData = async () => { 
          await fetch("http://localhost:5000/getGEE", {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              imageYear: props.year,})
          })
            .then((response) => response.json())
            .then((mapid) => {
              setQueryRes(mapid.url);
              console.log(mapid);
            });
          }
          console.log(props.year);

          fetchingData();
    },[test])

  return (
    <>
    
    {queryRes !== null ? 
    (
      <TileLayer
          attribution='false'
          url={queryRes}
          />
  ) :
  ""
    }
      
      
    </>
  )
}

export default GEE