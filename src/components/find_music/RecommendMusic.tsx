import React from 'react'
import {Button} from 'antd'
import {useNavigate} from 'react-router-dom'
import IndexTopMenu from "../IndexTopMenu";
//推荐
export default function RecommendMusic() {
    console.log('Hello')
    const history = useNavigate()
    return (
        <div>
            <div id='recommend' className="findMusic">
                推荐音乐
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