
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
// import {search} from "../utils/search";
import { lyric } from "../utils/lyric";
import {Button} from "antd";
import TopJumper from "./TopJumper";

//封装歌曲结果对象
/*
* 不得不吐槽一下Typescript要求真多，这些参数是通过报错信息找到的，
* 如果想看，可以在下面渲染的时候，在map中把value的类型去掉，并在li的渲染中直接渲染value，react会在报错信息中提示
* 还不太清楚各个参数具体的类型，所以暂时都使用any
* */
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
export interface lyricmodel{
    time:string,
    lyc:string,
}
let counter=0;
//第二版搜索结果
export default function Lyric() {
    const [inputPageNum,setInputPageNum]=useState('');
    const [result, setResult] = useState({
        lyric:"你好",
        lyricList:[{time:"",lyc:""}],
        
    });
    let {id} = useParams() ;
    const hasPrevious=()=>{
        return counter===1;
    }
    const goPage = (pageNum:number)=>{
        counter=pageNum;
       lyric({
          
           id:id as string,
           
        }).then((response)=>{
            let res=response.data;
            // console.log(res);
            // console.log(res.lrc);
            let res1 = res.lrc;
            let lyricList = result.lyricList
            // console.log(res1);
            let lyc1  = res1.lyric as string
            
            lyc1.split(/[\n]/) // 截取中括号
      .forEach((item: string) => {
        let temp: Array<string> = item.split(/\[(.+?)\]/)
        lyricList.push(
          {
            time: temp[1], // 时间
            lyc: temp[2] //歌词内容
          })
      })
    lyricList = lyricList.filter((v: { [x: string]: any; }) => v['lyc']) // 去除无歌词内容
    setResult({
      lyric: res['lrc']['lyric'],
      lyricList
    })
            // setResult({
               
            //     lyric:res.lrc.lyric,
            // })
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
            <ul style={{margin:"2% 10% 0 10%"}}>
                {result.lyricList.map((value: lyricmodel, index) => {
                    return (
                        <li key={index} onClick={goDetail}>
                            {value.time}-----------歌词:{value.lyc}
                        </li>
                    );
                })}
            </ul>
            
            
        </div></>
    );
}
