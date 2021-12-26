import React from "react";
import IndexTopMenu from "../IndexTopMenu";
import {Button} from "antd";
//我的音乐页面
export default function MyMusic(){
    console.log("myMusic")
    return(
        <div>
            {/*<IndexTopMenu/>*/}
        <div id="my" style={{textAlign:'center',position:'absolute',top:'50%',left:'50%',fontSize:40}}>
            我的音乐
            <br/>
            <Button onClick={() => {
                window.open('/','_self')//跳转回到主页，原来的navigate hook有搜索bug
            }}>
                返回首页
            </Button>
        </div>
            </div>
    );
}