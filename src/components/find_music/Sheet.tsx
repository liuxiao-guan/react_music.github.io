import React from 'react'
import {Button} from 'antd'
import {useNavigate} from 'react-router-dom'
import IndexTopMenu from "../IndexTopMenu";
//歌单
export default function Sheet() {
    console.log('Sheet')
    const history = useNavigate()
    return (
        <div>
            {/* <IndexTopMenu/> */}
            <div id='sheet' style={{textAlign: 'center', position: 'absolute', top: '50%', left: '50%', fontSize: 40}}>
                歌单
                <br/>
                <Button onClick={() => {
                    window.open('/','_self')//跳转回到主页，原来的navigate hook有搜索bug
                }}>
                    返回首页
                </Button>
            </div>
        </div>
    )
}