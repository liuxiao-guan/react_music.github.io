import React, { useState } from "react"
import { song_picture } from "../utils/song_picture";

interface Props {
  sid:any;
}


export default function Test(props:Props){

  const [result, setResult] = useState({
    picture:"你好",     
    
    });
     const goPage = (id:string)=>{
        
       song_picture({
          
           id: id as string,
           
        }).then((response)=>{
            let res=response.data;
            
            setResult({
               
                picture:res.song
            })
        })
    }
      
  return (
    <div>
        It is from child,songid:{props.sid}.
    </div>
// https://p1.music.126.net/8y8KJC1eCSO_vUKf2MyZwA==/109951165796899183.jpg

  );

}