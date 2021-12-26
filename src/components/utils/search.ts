import request from "./request";
interface Iprops{
    keywords:any,
    limit:number,
    offset:number,
    type:string,
}
export const search=(props:Iprops)=>{
    return request({
        url:'search',
        method:'get',
        params:props,
    })
}