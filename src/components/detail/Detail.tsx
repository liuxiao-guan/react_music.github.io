import { format } from "path";
import React from "react";
import Lyric from "./Lyric";
import Comment from "./Comment";
import TopJumper from "./TopJumper";
//import Lyric from 
class Detail extends React.Component {
    render() {
        return (
            <div>
                <Lyric />
                <Comment />
                <TopJumper />
            </div>
        );
    }
}

export default Detail;