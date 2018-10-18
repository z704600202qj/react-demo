import React, { Component } from 'react';
import logo from "../assets/imgs/logo.png"
import '../assets/stylus/reset.styl'
import './App.styl';

class App extends Component {
  render() {
    return (
     <div className='app'>
         <header className='app-header'>
             <img src={logo} className='app-logo' alt="logo"/>
             <h1 className='app-title'>xxxxxx</h1>
         </header>
         <div className='music-tab'>
             <div className="tab-item selected">
                 <span>推荐</span>
             </div>
             <div className="tab-item">
                 <span>排行榜</span>
             </div>
             <div className="tab-item">
                 <span>搜索</span>
             </div>
         </div>
     </div>
    );
  }
}

export default App;
