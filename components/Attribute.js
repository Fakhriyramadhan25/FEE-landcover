import React, { useState } from 'react'
// grid 
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
// react 
import { useRef, useEffect} from 'react';


function Attribute({Ftitle, children, Headline}) {
    
    const wrapperRef21 = useRef(null);
    const wrapperRef11 = useRef(null);
    const [active21, setActive21] = useState(false);
    const [active11, setActive11] = useState(false);

    const grid_21 = new Grid({
      columns: ['Types', 'Area (Ha)'],
      data: 
        [
          ["High density dryland forest","0.0"],
          ["Medium density dryland forest","0.0"],
          ["High density swamp forest","0.0"],
          ["Medium density swamp forest","0.0"],
          ["High density mangrove forest","0.0"],
          ["Medium density mangrove forest","0.0"],
          ["Low-level vegetation","3441.0"],
          ["Inundated low-level vegetation","0.0"],
          ["Built-up","0.0"],
          ["Bareland","4276.0"],
          ["Oil palm","8671.0"],
          ["Coconut","2353.0"],
          ["Wood shrubs","10012.0"],
          ["Rubber plantation","0.0"],
          ["Timber plantation","0.0"],
          ["Banana plantation","0.0"],
          ["Water","0.0"],
          ["Ponds","0.0"],
          ["Snow/Ice","0.0"],
          ["unknown","0.0"]
      ],
      width: '95%',
      height: '50%',
      
    });

    const grid_11 = new Grid({
        columns: ['Types', 'Area (Ha)'],
        data: 
          [
            ["High density dryland forest","0.0"],
            ["Medium density dryland forest","0.0"],
            ["High density swamp forest","0.0"],
            ["Medium density swamp forest","0.0"],
            ["High density mangrove forest","0.0"],
            ["Medium density mangrove forest","0.0"],
            ["Low-level vegetation","12435.0"],
            ["Inundated low-level vegetation","0.0"],
            ["Built-up","0.0"],
            ["Bareland","69.0"],  
            ["Oil palm","6455.0"],  
            ["Coconut","1599.0"],  
            ["Wood shrubs","4701.0"],  
            ["Rubber plantation","0.0"],  
            ["Timber plantation","0.0"],
            ["Banana plantation","0.0"],  
            ["Water","3495.0"],  
            ["Ponds","0.0"],  
            ["Snow/Ice","0.0"],  
            ["unknown","0.0"]
        ],
        width: '95%',
        height: '50%',
        
      });
  
  useEffect(() => {
    grid_21.render(wrapperRef21.current);
    grid_11.render(wrapperRef11.current);
    
  });

  const handle21 = ()=>{
    setActive21(!active21);
  }
  const handle11 = ()=>{
    setActive11(!active11);
  }

  return (
    <>
    <div className="absolute max-w-sm rounded-lg overflow-y-hidden bg-white z-20 top-14 left-8 bg-opacity-80 h-1/2 w-96">
    {/* <Image  class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{Headline}</div>
        <div className="text-md mb-2">{Ftitle} {active21 != false ? "2021":""} {active11 != false ? "2011":""}</div>
        <div className="pb-2">
        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ms-0 mb-2 hover:bg-sky-700 hover:text-white focus:bg-sky-200 focus:outline-none focus:ring focus:ring-violet-300" onClick={handle21}>2021</button>
        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ms-2 mb-2 hover:bg-sky-700 hover:text-white focus:bg-sky-200 focus:outline-none focus:ring focus:ring-violet-300" onClick={handle11}>2011</button>
        </div>
        <div className='text-gray-700 text-base text-xs'>
        {active21 != false ? (<div><p>2021</p><div ref={wrapperRef21} className='overflow-y-scroll h-48'/></div>) : (<div ref={wrapperRef21} className='overflow-y-scroll h-48 hidden'/>)}
        {active11 != false ? (<div ref={wrapperRef11} className='overflow-y-scroll h-48'/>) : (<div ref={wrapperRef11} className='overflow-y-scroll h-48 hidden'/>)}
        </div>
    </div>
  
    </div>
        
    </>
  )
}

export default Attribute