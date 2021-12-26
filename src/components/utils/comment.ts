import request from "./request";
interface Iprops{
    id:any,
    limit:number,
    offset:number,
    //before:string,
}
export const comment=(props:Iprops)=>{
    return request({
        url:'/comment/music',
        method:'get',
        params:props,
    })
}