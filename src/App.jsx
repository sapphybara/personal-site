import React, { Component } from 'react';
import 'rsuite/lib/styles/themes/dark/index.less';
import CustomNavbar from './components/CustomNavbar';
import { Route, Switch } from 'react-router-dom';
import Games from './Pages/Games';
import Resume from './Pages/resume/Resume';
import Home from './Pages/Home';

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <CustomNavbar/>
        <Switch>
          <Route path="/games" render={() => <Games title={'Games'} />}/>
          <Route path="/resume" render={() => <Resume title={'Resum' + String.fromCharCode(233)} />}/>
          <Route exact path="/" render={() => <Home />}/>
        </Switch>
      </div>
    );
  }
}
