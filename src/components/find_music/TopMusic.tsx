import React from 'react'
import {Button} from 'antd'
import {useNavigate} from 'react-router-dom'
import IndexTopMenu from "../IndexTopMenu";
//热门
export default function TopMusic() {
    console.log('Top')
    const history = useNavigate()
    return (
        <div>
            <div id='top' className="findMusic">
                最热门音乐
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