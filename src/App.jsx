import React from 'react';
import 'rsuite/lib/styles/themes/dark/index.less';
import CustomNavbar from './components/CustomNavbar';
import { Route, Switch } from 'react-router-dom';
import Games from './Pages/Games';
import Resume from './Pages/Resume';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <Switch>
        <Route path="/games" component={Games}/>
        <Route path="/resume" component={Resume}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
