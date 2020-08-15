import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Countdown from './components/Countdown/Countdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Switch>
          <Route exact path='/' render={(routeProps) => <Countdown forDate="Sat, 22 Aug 2020 07:00:00 GMT-0400" toDate="Sat, 22 Aug 2020 24:00:00 GMT-0400" {...routeProps} />} />
          <Route exact path='/cois' render={(routeProps) => <Countdown forDate="Sat, 22 Aug 2020 07:00:00 GMT-0400" toDate="Sat, 22 Aug 2020 24:00:00 GMT-0400" {...routeProps} />} />
          <Route render={(routeProps) => <Countdown forDate="Sat, 22 Aug 2020 07:00:00 GMT-0400" toDate="Sat, 22 Aug 2020 24:00:00 GMT-0400" {...routeProps} crisis={true}/>} />
        </Switch>
        <div className="footer">Made with love by <a className="developer" href="https://twitter.com/xsmndr">xsmndr</a></div>
      </HashRouter>
    </div>
  );
}

export default App;
