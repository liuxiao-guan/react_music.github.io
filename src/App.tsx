import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import React from "react";
import ReactDOM from "react-dom";
import IndexTopMenu from "./components/IndexTopMenu";
import MyMusic from "./components/my_music/MyMusic";
import RecommendMusic from "./components/find_music/RecommendMusic";
import SearchTop from './components/search/SearchTop'
import IndexContent from './components/IndexContent'
import TopMusic from './components/find_music/TopMusic'
import Sheet from './components/find_music/Sheet'
import Liver from './components/find_music/Liver'
import Musician from './components/find_music/Musician'
import Login from './components/Login'
import NotFound from './components/NotFound'
import ProjectRouter from "./components/ProjectRouter";
import { Link, Route, Routes } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (

            <>
            
            <ProjectRouter />
           
            </>
        );
    }
}

export default App;