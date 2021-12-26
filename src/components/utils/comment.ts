import request from "./request";
interface Iprops{
    id:any,
    limit:number,
    offset:number,
}
export const comment=(props:Iprops)=>{
    return request({
        url:'/comment/music',
        method:'get',
        params:props,
    })
}