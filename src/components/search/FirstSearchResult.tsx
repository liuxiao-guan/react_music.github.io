import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {search} from "../utils/search";

//是展示搜索结果的初版，感觉不太好用，但后面可能有用，所以也推了
export default function FirstSearchResult() {
    const [result, setResult] = useState({
        // 类型
        type: '1',
        // 页容量
        limit: 15,
        // 页码
        page: 1,
        // 总条数
        total: 0,
        songList: [],
        playList: [],
        mvList: [],
    });
    let {param}=useParams();
    let keyword:string;
    if(param===undefined){
        keyword='';
    }
    else{
        keyword=param;
    }

    console.log(keyword);
    const getResult = async () => {
        const res = await search({
            keywords: keyword,
            type: result.type,
            limit: result.limit,
            offset: (result.page - 1) * (result.limit),
        });
        if (res.data.code === 200) {
            // @ts-ignore
            switch (result.type) {
                case '1':
                    setResult({
                        songList: res.data.result.songs,
                        total: res.data.result.songCount,
                        type: result.type,
                        limit: result.limit,
                        page: result.page,
                        playList: result.playList,
                        mvList: result.mvList,
                    });
                    break;
                case '1000':
                    setResult({
                        songList: result.songList,
                        total: res.data.result.playlistcount,
                        type: result.type,
                        limit: result.limit,
                        page: result.limit,
                        playList: res.data.result.playlists,
                        mvList: result.mvList,
                    })
                    break;
                case '1004':
                    setResult({
                        songList: result.songList,
                        total: res.data.mvCount,
                        type: result.type,
                        limit: result.limit,
                        page: result.limit,
                        playList: result.playList,
                        mvList: res.data.result && res.data.result.mvs,
                    })
                    break;
                default:
                    break;
            }
        }
    }
    getResult();


    // const renderSongList= () =>{
    //     getResult();
    //     const songList=result.songList;
    //     return (
    //         <table className="el-table">
    //             <thead>
    //             <tr>
    //                 <th></th>
    //                 <th>音乐标题</th>
    //                 <th>歌手</th>
    //                 <th>专辑</th>
    //                 <th>时长</th>
    //             </tr>
    //             </thead>
    //             <tbody>
    //             {songList.map((item, index) => {
    //                 return (
    //                     <tr
    //                         className="el-table__row"
    //                         key={index}
    //                     >
    //                         <td>{index + 1}</td>
    //                         <td>
    //                             <div className="song-wrap">
    //                                 <div className="name-wrap">
    //                                     <span className="name">{item.name}</span>
    //                                     {item.mvid !== 0 && (
    //                                         <span
    //                                             className="iconfont icon-mv"
    //                                         ></span>
    //                                     )}
    //                                 </div>
    //                                 {item.alias.length !== 0 && (
    //                                     <span className="sub-name">{item.alias[0]}</span>
    //                                 )}
    //                             </div>
    //                         </td>
    //                         <td>{item.artists[0].name}</td>
    //                         <td>{item.album.name}</td>
    //                     </tr>
    //                 )
    //             })}
    //             </tbody>
    //         </table>
    //     )
    // }
    return (
        <div>
            <h2>
                {keyword.toString()}
            </h2>
            <span className="sub-title">找到{result.total}个结果</span>
        </div>
    );
}