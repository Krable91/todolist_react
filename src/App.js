import React from 'react';
import Clock from "react-live-clock";
import Weather from "./Weather";
import Greeting from "./Greeting";
import './App.css';


class App extends React.Component {
  state = {
    haveUserName: true
  }

  render() {
    return (
      <section className="appSection">
        <div className="header">
          <div>
            <Clock format={`YYYY년MM월DD일 HH시mm분ss초`} ticking={true} timezone={`Asia/Seoul`}/>
          </div>
          <div>
            <Weather/>
          </div>
        </div> 
        <div className="main">
          <Greeting/>
        </div>
      </section>
    )}
}

export default App;