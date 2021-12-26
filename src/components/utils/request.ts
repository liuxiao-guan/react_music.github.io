import axios from "axios";
//创建axios请求对象，方便api使用
const request = axios.create(
    {
        baseURL: process.env.REACT_APP_BASEURL,
    }
)
export default request;