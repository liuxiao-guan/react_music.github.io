import request from "./request";
interface Iprops{
    id:string,
}
export const lyric=(props:Iprops)=>{
    return request({
        url:'/lyric',
        method:'get',
        params:props,
    })
}