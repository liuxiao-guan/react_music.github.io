
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import {search} from "../utils/search";
import { lyric } from "../utils/lyric";

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
export interface lyricmodel {
    time: string,
    lyc: string,
}
let counter = 0;
export default function Lyric() {
    const [inputPageNum, setInputPageNum] = useState('');
    const [result, setResult] = useState({
        lyric: "你好",
        lyricList: [{ time: "", lyc: "" }],

    });
    let { id } = useParams();
    const hasPrevious = () => {
        return counter === 1;
    }
    const goPage = (pageNum: number) => {
        // if(counter === parseInt(id as string)){
        //     counter = 0;
        // }else{
        //     counter =parseInt(id as string);
        // }     
       // counter = 1;
        lyric({
            id: id as string,
        }).then((response) => {
            let res = response.data;
            // console.log(res);
            // console.log(res.lrc);
            let res1 = res.lrc;
            let lyricList = result.lyricList
            // console.log(res1);
            let lyc1 = res1.lyric as string

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
        })
    }
    const nextPage = () => {
        console.log(counter);
        counter++;
        goPage(counter);
    }
    const previousPage = () => {
        console.log(counter);
        counter--;
        goPage(counter);
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPageNum(e.target.value);
    }
    const submitInputPage = () => {
        goPage(Number(inputPageNum));
        setInputPageNum('');
    }
    const goDetail = () => {
        window.open('#/detail', '_self');
    }
    useEffect(() => {
            goPage(1);   
        //组件第一次渲染结束后执行函数
    },[])

    return (
        <div>
            <ul style={{ margin: "2% 10% 40px 10%" }}>
                {result.lyricList.map((value: lyricmodel, index) => {
                    return (
                        <li key={index} >
                            {value.time}-----------:{value.lyc}
                        </li>
                    );
                })}
            </ul>


        </div>
    );
}
