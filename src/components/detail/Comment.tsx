import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//import {search} from "../utils/search";
import { comment } from "../utils/comment";
import { Avatar, Button, List } from "antd";
import { VerticalAlignTopOutlined, HeartOutlined } from '@ant-design/icons'
import moment from 'moment';
import Item from "antd/lib/list/Item";
import {LikeOutlined,CommentOutlined,LikeTwoTone} from "@ant-design/icons/lib/icons";
import { Footer } from "antd/lib/layout/layout";

//封装歌曲结果对象
/*
* 不得不吐槽一下Typescript要求真多，这些参数是通过报错信息找到的，
* 如果想看，可以在下面渲染的时候，在map中把value的类型去掉，并在li的渲染中直接渲染value，react会在报错信息中提示
* 还不太清楚各个参数具体的类型，所以暂时都使用any
* */
interface CommentProps {
    user: any,
    beReplied: any,
    artists: any,
    pendantData: any,
    showFloorComment: any,
    status: any,
    commentId: any,
    content: any,
    contentResource: any,
    time: any,
    timeStr: any,
    needDisplayTime: any,
    expressionUrl: any,
    commentLocationType: any,
    parentCommentId: any,
    decoration: any,
    repliedMark: any,
    liked: any,
    likedCount:any,
}
let counter = 0;
//第二版搜索结果
export default function Comment() {
    const [inputPageNum, setInputPageNum] = useState('');
    const [songid, setSongid] = useState('');
    const [result, setResult] = useState({
        // 类型
        //type: '1',
        // 页容量
        limit: 15,
        // 页码
        page: 1,
        // 总条数
        total: 0,

        commentlist: [{
            user: {
                nickname: '',
                avatarUrl:'',
            },
            beReplied: null,
            artists: [],
            pendantData: null,
            showFloorComment: null,
            status: null,
            commentId: null,
            content: null,
            contentResource: null,
            time: '',
            timeStr: null,
            needDisplayTime: null,
            expressionUrl: null,
            commentLocationType: null,
            parentCommentId: null,
            decoration: null,
            repliedMark: null,
            liked: null,
            likedCount:null,
        }],
        hotcommentlist: [{
            user: {
                nickname: '',
                avatarUrl:'',
            },
            beReplied: null,
            artists: [],
            pendantData: null,
            showFloorComment: null,
            status: null,
            commentId: null,
            content: null,
            contentResource: null,
            time: '',
            timeStr: null,
            needDisplayTime: null,
            expressionUrl: null,
            commentLocationType: null,
            parentCommentId: null,
            decoration: null,
            repliedMark: null,
            liked: null,
            likedCount:null,
        }],

    });
    let { id } = useParams();
    let vid = id;

    const hasPrevious = () => {
        return counter === 1;
    }
    const goPage = (pageNum: number) => {
        counter = pageNum;
        comment({
            id: vid,
            limit: result.limit,
            offset: (counter - 1) * result.limit,
            //before:
        }).then((response) => {
            let res = response.data;
            if(counter > 1){
                setResult({
                    hotcommentlist:result.hotcommentlist,
                    commentlist: res.comments,
                    total: res.total,
                    //type: result.type,
                    limit: result.limit,
                    page: counter,
                })
            }else{
                setResult({
                    hotcommentlist:res.hotComments,
                    commentlist: res.comments,
                    total: res.total,
                    //type: result.type,
                    limit: result.limit,
                    page: counter,
                })
            }
           
        })
    }
    const nextPage = () => {
        console.log(counter);
        console.log(vid);

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
    const goDetail = (id: string, e: any) => {
        console.log(id);
        //window.open(`#/detail/${e}`, '_self')
        window.open(`#/detail/${id}`, '_self')
        //window.open(`#/search/${e.target.value}`, '_self')


    }
    useEffect(() => {
        if (counter === 0) {
            goPage(1);
        }
    })

    return (
        <div>

            <div>
                <span style={{fontSize:"20px",margin:"0% 2% 0 10%"}}>评论</span><span style={{ margin: "0px 0 0 0px" }}>找到了{result.total}条结果</span>
            </div>
            <div style={{border:" 2px solid rgb(219, 24, 17)",margin:"0% 10% 0 10%"}}></div> 
            <div style={{margin:"5% 10% 0 10%"}}>精彩评论</div>
            <div style={{border:" 1px solid #000",margin:"0 10% 0 10%"}}></div> 
            <List
            style={{margin:"0% 10% 0 10%"}}
                className="result-list"
                itemLayout="vertical"
                // dataSource={data}
                // dataSource={result.commentlist}
                dataSource={result.hotcommentlist}
                renderItem={item => (
                    <List.Item
                    actions={[
                        <div>点赞数:{item.likedCount} <LikeOutlined /></div>,

                        <div>回复: <CommentOutlined /></div>,
                      ]}>
                                          
                        <List.Item.Meta
                            avatar={<Avatar size="large" src={item.user.avatarUrl}/>}
                            description={item.timeStr}
                            title={<p>{item.user.nickname}</p>}
                        />
                        {item.content}                        
                        
                    </List.Item>
                )}
            />
            <div style={{margin:"2% 10% 0 10%"}} >最新评论</div>
            <div style={{border:" 1px solid #000",margin:"0 10% 0 10%"}}></div> 
            <List
                itemLayout="vertical"
                style={{margin:"0 10% 0 10%"}}
                className="result-list"                
                // dataSource={data}
                dataSource={result.commentlist}
                //dataSource={result.hotcommentlist}
                renderItem={item => (
                    <List.Item
                    actions={[
                        <div>点赞数:{item.likedCount} <LikeOutlined /></div>,

                        <div>回复</div>,
                      ]}>
                                          
                        <List.Item.Meta
                            avatar={<Avatar size="large" src={item.user.avatarUrl}/>}
                            description={item.timeStr}
                            title={<p>{item.user.nickname}</p>}
                        />
                        {item.content}                        
                        
                    </List.Item>
                )}
            />
            
            <Footer>
            <div className="pages" style={{margin:"0 20% 0 10%"}}>
                <Button onClick={previousPage} disabled={hasPrevious()}>上一页</Button>
               
                <Button onClick={nextPage}>下一页</Button>
                请输入您想跳转的页面:<input value={inputPageNum} onChange={handleInput} />
                <Button onClick={submitInputPage}>跳转到此页</Button>
            </div>
            </Footer>

        </div>
    );
}