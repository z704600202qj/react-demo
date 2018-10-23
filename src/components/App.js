import React, {Component} from 'react';
import {Route, Switch, Redirect, NavLink} from 'react-router-dom'

import Recommend from "./recommend/Recommend"
import Ranking from "./ranking/Ranking"
import Search from "./search/Search"
import Players from "../containers/Players"

import logo from "../assets/imgs/logo.png"
import '../assets/stylus/reset.styl'
import './App.styl';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <header className='app-header'>
                    <img src={logo} className='app-logo' alt="logo"/>
                    <h1 className='app-title'>React音乐</h1>
                </header>
                <div className='music-tab'>
                    <div className="tab-item selected">
                        <NavLink to="/recommend" className="tab-link ">
                            <span>推荐</span>
                        </NavLink>
                    </div>
                    <div className="tab-item">
                        <NavLink to='/ranking' className="tab-link">
                            <span>排行榜</span>
                        </NavLink>
                    </div>
                    <div className="tab-item">
                        <NavLink to='/search' className="tab-link">
                            <span>搜索</span>
                        </NavLink>
                    </div>
                </div>
                <div className="music-view">
                    {/*
                         Switch组建用来选择最近的一个路由，否则最后一个没有指定path的路由会显示
                         Redirect 重定向大到列表页
                    */}
                    <Switch>
                        <Route path='/recommend' component={Recommend}/>
                        <Route path='/ranking' component={Ranking}/>
                        <Route path='/search' component={Search}/>
                        <Redirect from='/' to='/recommend'/>
                        <Route component={Recommend}/>
                    </Switch>
                </div>
                <Players/>
            </div>
        );
    }
}

export default App;
