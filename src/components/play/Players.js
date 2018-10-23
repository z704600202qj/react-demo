import React from "react"
import ReactDOM from 'react-dom'
import {Song} from "@/model/song"
import './player.styl'
import Progress from "./Progress"

class Players extends React.Component {
    constructor(props) {
        super(props)
        this.song = new Song(0, "", "", "", 0, "", "")
        this.currentIndex = 0;
        //播放模式： list-列表 single-单曲 shuffle-随机
        this.playModes = ["list", "single", "shuffle"];
        this.state = {
            currentTime: 0,
            playProgress: 0,
            playStatus: false,
            currentPlayMode: 0
        }
    }

    componentDidMount() {
        // this.audioDOM = ReactDOM.findDOMNode(this.refs.audio);
        // this.singerImgDOM = ReactDOM.findDOMNode(this.refs.singerImg);
        // this.playerDOM = ReactDOM.findDOMNode(this.refs.player);
        // this.playerBgDOM = ReactDOM.findDOMNode(this.refs.playerBg);

    }

    render() {


        return (
           <div>xxxx</div>
        );

    }
}

export default Players
