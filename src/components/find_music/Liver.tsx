import React from 'react'
import {Button} from 'antd'
import 'antd/dist/antd.css'
import {useNavigate} from 'react-router-dom'
import IndexTopMenu from "../IndexTopMenu";
//电台
export default function Liver() {
    console.log('Liver')
    const history = useNavigate()
    return (
        <div>
            {/* <IndexTopMenu/> */}
            <div id='liver' style={{textAlign: 'center', position: 'absolute', top: '50%', left: '50%', fontSize: 40}}>
                电台
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