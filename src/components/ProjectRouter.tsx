import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import IndexContent from "./IndexContent";
import RecommendMusic from "./find_music/RecommendMusic";
import TopMusic from "./find_music/TopMusic";
import Sheet from "./find_music/Sheet";
import Liver from "./find_music/Liver";
import Musician from "./find_music/Musician";
import MyMusic from "./my_music/MyMusic";
import Login from "./Login";
import NotFound from "./NotFound";
import SearchResult from "./search/SearchResult";
import Detail from "./detail/Detail";
import IndexTopMenu from "./IndexTopMenu";
import SearchTop from "./search/SearchTop";
//各界面的路由，当写了新的页面时，请在这里添加路由
export default function ProjectRouter() {
    //当输入的地址没有任何匹配时，跳转到404页面
    return (
        <Router>       
            <IndexTopMenu />     
            <div>
                <Routes>
                    <Route path='/' element={<IndexContent />} />
                    <Route path='/recommend' element={<RecommendMusic />} />
                    <Route path='/top' element={<TopMusic />} />
                    <Route path='/sheet' element={<Sheet />} />
                    <Route path='/liver' element={<Liver />} />
                    <Route path='/musician' element={<Musician />} />
                    <Route path='/my' element={<MyMusic />} />

                    <Route path='/login' element={<Login />} />
                    {/*<Route path="/search/:keyword" element={<FirstSearchResult/>} />*/}
                    <Route path="/search/:keyword" element={<SearchResult />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

            </div>

        </Router>
    );
}