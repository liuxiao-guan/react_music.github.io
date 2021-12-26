
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import { song_picture } from "../utils/song_picture";

interface SongProps {
    id: any,
    name: any,
    artists: any,
    album: any,
    duration: any,
    copyrightId: any,
    status: any,
    alias: any,
    rtype: any,
    ftype: any,
    mvid: any,
    fee: any,
    rUrl: any,
    mark: any,
    
}

let counter=0;
export default function Lyric() {
    const [inputPageNum,setInputPageNum]=useState('');
    const [result, setResult] = useState({
        lyric:"你好",     
        
    });
    let {id} = useParams() ;
    const hasPrevious=()=>{
        return counter===1;
    }
    const goPage = (pageNum:number)=>{
        counter=pageNum;
       song_picture({
          
           id:id as string,
           
        }).then((response)=>{
            let res=response.data;
            
            setResult({
               
                lyric:res.lrc.lyric,
            })
        })
    }
    const nextPage = () => {
        console.log(counter);
        counter++;
        goPage(counter);
    }
    const previousPage=()=>{
        console.log(counter);
        counter--;
        goPage(counter);
    }
    const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputPageNum(e.target.value);
    }
    const submitInputPage=()=>{
        goPage(Number(inputPageNum));
        setInputPageNum('');
    }
    const goDetail=()=>{
        window.open('#/detail','_self');
    }
    useEffect(()=>{
        if(counter===0){
           goPage(1);
        }
    })

    return (
        <><div>
            {/* {result.lyric} */}
            {/* <h1>找到了{result.total}条结果</h1>
    <Button onClick={previousPage} disabled={hasPrevious()}>上一页</Button>
    <Button onClick={nextPage}>下一页</Button>
    请输入您想跳转的页面:<input value={inputPageNum} onChange={handleInput}/>
    <Button onClick={submitInputPage}>跳转到此页</Button> */}
            {/* <ul style={{margin:"2% 10% 0 10%"}}>
                {result.lyricList.map((value: lyricmodel, index) => {
                    return (
                        <li key={index} onClick={goDetail}>
                            {value.time}-----------歌词:{value.lyc}
                        </li>
                    );
                })}
            </ul> */}
            
            
        </div></>
    );
}
