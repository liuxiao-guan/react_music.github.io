import request from "./request";

export const banner = (type:number) => {
return request({
    url:'banner',
    method:'get',
    params:type,
})
}