import { Route, Routes } from "react-router";
import Liver from "./components/find_music/Liver";
import Musician from "./components/find_music/Musician";
import RecommendMusic from "./components/find_music/RecommendMusic";
import Sheet from "./components/find_music/Sheet";
import TopMusic from "./components/find_music/TopMusic";
import IndexContent from "./components/IndexContent";
import MyMusic from "./components/my_music/MyMusic";
//import { Switch, useHistory } from 'react-router-dom';

export default function MenuRouter() {
    return (
        <>
            <IndexContent />
            <RecommendMusic />
            <TopMusic />
            <Sheet />
            <Liver />
            <Musician />
            <MyMusic />
        </>
    );


}