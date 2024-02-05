import React from 'react'
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLeaflet } from "react-leaflet";
import L from "leaflet";
import shp from "shpjs";


function Upload({Ftitle, children, Headline, zipUrl}) {
  const { map } = useLeaflet();

  useEffect(() => {
    const geo = L.geoJson(
      { features: [] },
      {
        // onEachFeature: function popUp(f, l) {
        //   var out = [];
        //   if (f.properties) {
        //     for (var key in f.properties) {
        //       out.push(key + ": " + f.properties[key]);
        //     }
        //     l.bindPopup(out.join("<br />"));
        //   }
        // }
      }
    ).addTo(map);

    shp(zipUrl).then(function (data) {
      geo.addData(data);
    });
  }, []);


  return (
  
    <>
    <div className="absolute max-w-sm rounded-lg overflow-y-hidden bg-white z-20 top-1/2 mt-20 left-8 bg-opacity-80 h-56 w-96 ">
    {/* <Image  class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{Headline}</div>
        <div className="text-md mb-2">{Ftitle}</div>
        <div className='text-gray-700 text-base text-xs'>
        {children}
        </div>
        <button className='bg-sky-200 rounded-lg p-2 text-xs'>Upload file</button>
    </div>
    </div>
        
    </>
  )
}

Shapefile.propTypes = {
  zipUrl: PropTypes.string.isRequired
};



export default Upload

