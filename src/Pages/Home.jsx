import React  from 'react';
import PageBase from './PageBase';

export default class Home extends PageBase {
  
  render() {
    return (
      <div style={{padding: '30px'}}>
        <h1>Warren Wiser</h1>
        <br/>
        <h5>Welcome to my site!</h5>
      </div>
    );
  }
}