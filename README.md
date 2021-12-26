### ！！！项目调用API需要经过whistle配置，因为无法直接访问https://cloud-music.pl-fe.cn/ 需要将 http://cloud-music.pl-fe.cn/代理一下。 

![img](file:///C:\Users\Sean\Documents\Tencent Files\1751672022\Image\C2C\ISTZW7SMC8H5JNO1N6T2Z}N.png)

---

# 基于React的网易云音乐


## 项目说明(必看)

由于目前没有服务器，所以需要以下面的方式启动项目

在项目文件夹中,输入以下命令以安装

```script
yarn install
```

输入以下命令以启动项目

```script
npm start
```

## 项目结构

### 技术栈:
Typescript+React+Ant Design(https://ant.design/index-cn)

### 目录结构:
#### public:
脚手架生成的，index.html里title和标签页的小logo已经改好了.
#### src:
存放源代码的文件夹

>components
>存放各个组件<br/>
>
>>IndexContent是主页的内容,IndexTopMenu是顶部的主菜单<br/>
>login是登陆页面<br/>
>NotFound是没有任何匹配，找不到请求的资源时跳转的页面<br/>
>ProjectRouter负责项目的路由
>find_music存放发现音乐相关的页面<br/>
>my_music存放我的音乐相关的页面<br/>
>search存放搜索框和搜索结果
>
>其他文件:<br/><br/>
>App.css,App.test.tsx,App.tsx是组件的主文件<br/><br/>
>index.css,index.tsx是项目的主文件<br/><br/>
>.env.development是项目配置文件，用于开发环境的配置，
>这里配置了网易云API的URL，配置的是localhost:3000,
>把api配置到3000的原因是我的电脑
>这边把先启动项目再把api启动在其他端口会报错,原因不明
>如果要改，那么只改自己电脑适用的value,key不要改<br/><br/>
>.env.production是项目配置文件，用于生产环境的配置，
>目前在本地服务器上跑，所以配置的也是localhost:3000
>这里配置了网易云API的URL，如果要改，那么只改value,key不要改<br/><br/>
>其他的是脚手架生成的

