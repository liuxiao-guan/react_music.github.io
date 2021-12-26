import request from "./request";
interface LoginParams{
    phone:string,
    password:string,
}
export const login = (props:LoginParams)=>{
    return request({
        url:'login/cellphone',
        method:'get',
        params:props,
        }
    )
}