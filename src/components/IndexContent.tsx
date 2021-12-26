import React, {useState} from 'react'
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Button,Carousel} from "antd";
import {UserOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'
import IndexTopMenu from "./IndexTopMenu";
import './IndexContent.css'
import {banner} from "./utils/banner";
import { Content } from 'antd/lib/layout/layout';
import { Link, HashRouter, BrowserRouter} from 'react-router-dom'
import RecommendMusic from './find_music/RecommendMusic';
import TopMusic from './find_music/TopMusic';
import Liver from './find_music/Liver';
import Sheet from './find_music/Sheet';
import Musician from './find_music/Musician';
import MyMusic from './my_music/MyMusic';

import NotFound from './NotFound';
import Login from './Login';

//主页除了顶部菜单的内容部分
export default function IndexContent() {
    const [carousel,setCarousel]=useState([{
        imageUrl:'',
    }]);
    // banner(0).then((response)=>{
    //     setCarousel(response.data.banners)
    // })
    banner(0).then((response)=>{
        let res=response.data;
        if(res.code===200){
            setCarousel(res.banners);
        }
    })
    return (
        <div>
            
            {/* <IndexTopMenu/> */}
            <div id='index' style={{textAlign: 'center', top: '50%', left: '50%', fontSize: 40}}>
                这里是主页
                <br/>
                <Button icon={<UserOutlined/>}>
                    <Link to="/login">去登录</Link>
                </Button>
            </div>
            <Carousel className='carousel' autoplay>
                {carousel.map((item,index)=>{
                    return <div key={index}><img src={item.imageUrl} alt=""/></div>
                })}
            </Carousel>
        </div>
    )
}