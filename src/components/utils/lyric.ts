import request from "./request";
interface Iprops{
    // keywords:any,
    // limit:number,
    // offset:number,
    // type:string,
    id:string,
}
export const lyric=(props:Iprops)=>{
    return request({
        url:'/lyric',
        method:'get',
        params:props,
    })
}