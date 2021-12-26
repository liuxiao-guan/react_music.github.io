import request from "./request";
interface Iprops{
    // keywords:any,
    // limit:number,
    // offset:number,
    // type:string,
    id:string,
}
export const song_picture=(props:Iprops)=>{
    return request({
        url:'/song/detail',
        method:'get',
        params:props,
    })
}