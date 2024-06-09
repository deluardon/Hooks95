// import React from 'react';

import { useEffect,useState } from "react";
import Posts from "../post/Posts";

const Apiloder = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/photos')
   .then(res=>res.json())
   .then(data=>setData(data))
  //  .then(data=>console.log(data))
  },[])
  return (
    <div>
      {
        data.map(data=>{
          return <Posts key={data.id} item={data}></Posts>
        })
        
        
          


      }
    </div>
  );
};

export default Apiloder;