import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeartTwoTone from '@ant-design/icons/lib/icons/HeartTwoTone';
import { search } from "../utils/search";
import { Avatar, Button, List, Menu, Result, Skeleton, Table } from "antd";
import { PlayCircleOutlined, DownloadOutlined } from "@ant-design/icons/lib/icons";
import TopJumper from "../detail/TopJumper";
import Test from "./test";
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
let counter = 0;
//第二版搜索结果
export default function SearchResult() {
    const [inputPageNum, setInputPageNum] = useState('');
    const [result, setResult] = useState({
        // 类型
        type: '1',
        // 页容量
        limit: 15,
        // 页码
        page: 1,
        // 总条数
        total: 0,
        songList: [{
            id: null,
            name: null,
            artists: [],
            album: {
                name: null,
                artist: {
                    img1v1Url: null
                }
            },
            duration: '',
            copyrightId: null,
            status: null,
            alias: null,
            rtype: null,
            ftype: null,
            mvid: null,
            fee: null,
            rUrl: null,
            mark: null,
        }],
    });
    let { keyword } = useParams();
    const hasPrevious = () => {
        return counter === 1;
    }
    const goPage = (pageNum: number) => {
        counter = pageNum;
        search({
            keywords: keyword,
            limit: result.limit,
            offset: (counter - 1) * result.limit,
            type: result.type,
        }).then((response) => {
            let res = response.data;
            setResult({
                songList: res.result.songs,
                total: res.result.songCount,
                type: result.type,
                limit: result.limit,
                page: counter,
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
    const goDetail = (id: string | null, e: any) => {
        console.log(id);
        window.open(`#/detail/${id}`, '_self');
    }
    const showPlayList = (keyword: string | undefined, e: any) => {
        window.open(`#/searchplaylist/${keyword}`, '_self');
    }
    useEffect(() => {
        if (counter === 0) {
            goPage(1);
        }
    })

    return (
        <div>
            <Menu theme='light' mode="horizontal">
                <Menu.Item key="song">单曲</Menu.Item>
                <Menu.Item key="singer">歌手</Menu.Item>
                <Menu.Item key="album">专辑</Menu.Item>
                <Menu.Item key="vedio">视频</Menu.Item>
                <Menu.Item key="songList" onClick={(e) => showPlayList(keyword, e)}>歌单</Menu.Item>
            </Menu>

            <div className="container">
                <List
                    className="list"
                    itemLayout="horizontal"
                    dataSource={result.songList}
                    header={
                        <div className="title" >
                            <span id='keyword'>{keyword}</span>
                            <span>找到了{result.total}条结果</span>
                        </div>
                    }
                    renderItem={item => (
                        <List.Item
                            actions={[<a key="list-loadmore-edit">下载 <DownloadOutlined /></a>]}
                        >
                            <List.Item.Meta
                                style={{ fontSize: "20px" }}

                                avatar={<Avatar style={{ backgroundColor: '#fa1a1ad9' }} shape="square" size={40}>{item.album.name}</Avatar>
                                    // src={item.album.artist.img1v1Url} 
                                }
                                // https://p2.music.126.net/CcthX_ZCexIdriZADoNn3g==/109951165628166191.jpg?
                                title={<a onClick={(e) => goDetail(item.id, e)}>{item.name}</a>}
                                description={
                                    <div>歌手:{item.artists.map((item: { name: any; }) => {
                                        return item.name;
                                    })}
                                    </div>}
                            />
                            {/* <Test sid={item.id}/> */}
                            <div style={{ margin: 10 }}>时长  {new Date(item.duration).getMinutes()}:{new Date(item.duration).getSeconds()}</div>
                            {console.log(item)}
                            <div><PlayCircleOutlined />  <HeartTwoTone twoToneColor="#fa1a1a" />
                                {/* <HeartOutlined /> */}
                            </div>
                        </List.Item>
                    )}
                />
                <div className="pages">
                    <Button onClick={previousPage} disabled={hasPrevious()}>上一页</Button>
                    <Button onClick={nextPage}>下一页</Button>
                    <span>请输入您想跳转的页面:</span>
                    <input style={{ width: 40 }} value={inputPageNum} onChange={handleInput} />
                    <Button onClick={submitInputPage}>跳转到此页</Button>
                </div>
            </div>
            <TopJumper />
        </div>
    );
}