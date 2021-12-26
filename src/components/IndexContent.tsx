import React, { useState } from 'react'
import { Button, Carousel } from "antd";
import { UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { banner } from "./utils/banner";
import { Content, Footer } from 'antd/lib/layout/layout';
import { Link, HashRouter, BrowserRouter } from 'react-router-dom'

//主页除了顶部菜单的内容部分
export default function IndexContent() {
    const [carousel, setCarousel] = useState([{
        imageUrl: '',
    }]);
    banner(0).then((response) => {
        let res = response.data;
        if (res.code === 200) {
            setCarousel(res.banners);
        }
    })
    return (
        <div>
            <Content className="contentContainer">
                <div id='index' style={{ textAlign: 'center', top: '50%', left: '50%', fontSize: 40 }}>
                    来随便听点什么吧
                    <br />
                    <Button icon={<UserOutlined />}>
                        <Link to="/login">去登录</Link>
                    </Button>
                </div>

                <div style={{ justifyContent: "center", display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <view>
                    </view>
                    <view style={{ width: "75%", height: "100%",padding:"15px" }}>

                        <Carousel className='carousel' autoplay>
                            {carousel.map((item, index) => {
                                return <div key={index}><img src={item.imageUrl} alt="" /></div>
                            })}
                        </Carousel>
                        </view>
                    <view>
                    </view>
                </div>

            </Content>

        </div>
    )
}