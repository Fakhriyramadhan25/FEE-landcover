"use client"; // This is a client component 👈🏽

// leaflet
import { MapContainer, TileLayer, Marker, Popup, LayersControl} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

// components 
import GEE from "../components/GEE";
import SearchBar from '../components/SearchBar';
import Attribute from '../components/Attribute';
import Upload from '@/components/Upload';


export default function Home() {

      const viewMaps = {
        centerObj: {lat:-0.5423496074335277 , lng: 117.098048155026},
        zoom: 12,
        scrollWheelZoom: true,
        zoomControl: false
      }
  
    return (
    <>
      <div className='z-20'>
       <Attribute  Ftitle="Land Cover: Samarinda" Headline="Land Cover Classification"> 
         
       </Attribute>
       <Upload Ftitle="Upload Shp" Headline="Set AOI">
       <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">.Shp (MAX. 2mb).</p>
      
       </Upload>
      </div>
      

      <div className='z-0'>
      <MapContainer zoom={viewMaps.zoom} center={viewMaps.centerObj} scrollWheelZoom={viewMaps.scrollWheelZoom} zoomControl={viewMaps.zoomControl}>

      <SearchBar/>
  
      
      <LayersControl position='topright' collapsed={true}>
        
        <LayersControl.BaseLayer checked name="OpenStreet Basemap">
        <TileLayer
                attribution='false'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
        </LayersControl.BaseLayer>
        
        <LayersControl.BaseLayer name="Carto Basemap">
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='false'
            />
          </LayersControl.BaseLayer>
  
        
          <LayersControl.BaseLayer name="Imagery Satellite">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='false'
            />
          </LayersControl.BaseLayer>
  
          <LayersControl.Overlay name="Land Cover 2021" >
            <GEE year="2021"/>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Land Cover 2011" checked>
            <GEE year="2011"/>
        </LayersControl.Overlay>
  
  
        <LayersControl.Overlay name="marker" checked>
          <Marker position={viewMaps.centerObj}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
        </LayersControl.Overlay>
  
        </LayersControl>
        
      </MapContainer>
      </div>
  
  </>
    )
}
