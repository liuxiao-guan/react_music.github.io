import React from "react";
import ProjectRouter from "./components/ProjectRouter";
import { Footer } from 'antd/lib/layout/layout';
import MyFooter from './components/MyFooter';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <>
                <ProjectRouter />
                <Footer>
                    <MyFooter />
                </Footer>
            </>
        );
    }
}

export default App;