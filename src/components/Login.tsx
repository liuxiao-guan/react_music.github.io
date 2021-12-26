import React, {useState} from "react";
import {Form, Input, Button, Alert} from 'antd'
import {useNavigate} from 'react-router-dom'
import 'antd/dist/antd.css'
import './login.css'
import axios from 'axios'
import ReactDOM from "react-dom";
import {search} from "./utils/search";
import {login} from "./utils/login";

const FormItem = Form.Item;
//登陆页面
export default function Login() {
    const [name, setName] = useState('');//用户名
    const [password, setPassWord] = useState('');//密码
    const history = useNavigate();
    return (
        <Form className="login-form">
            <FormItem>
                <Input placeholder="请输入用户名" maxLength={20} onChange={(event) => {
                    setName(event.target.value);
                }}/>
            </FormItem>
            <FormItem>
                <Input placeholder="请输入密码" maxLength={16} type="password" onChange={(event) => {
                    setPassWord(event.target.value);
                }}/>
            </FormItem>
            <FormItem>
                <Button type="primary" id="login-button" onClick={() => {
                    loginThroughPhone(name, password).then((response) => {
                        let res = response.data;
                        console.log(res.code)
                        if (res.code === 200) {
                            history('/my');//如果登陆成功，则跳转到我的音乐页面
                        } else {
                            alert("登陆失败，请检查用户名或密码");//如果不成功，则提示登陆失败

                            //下面是通过antD里面Alert组件的方式跳转,不过会打开新的页面
                            // ReactDOM.render(<Alert
                            //     message="错误"
                            //     description="登陆失败，请检查用户名或密码"
                            //     type="error"
                            //     showIcon/>,document.getElementById('root'));
                        }
                    });
                }}>登录</Button>
            </FormItem>
        </Form>
    );
}

function loginThroughPhone(phone: string, password: string) {
    return login(
        {
            phone:phone,
            password:password,
        }
    );
}