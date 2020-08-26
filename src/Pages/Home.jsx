import React  from 'react';
import PageBase from './PageBase';

export default class Home extends PageBase {
  
  render() {
    return (
      <div style={{padding: '30px'}}>
        <h1>Warren Wiser</h1>
        <br/>
        <h5>Welcome to my site!</h5>
        <div>
          I created this site after becoming familiar with <code>react</code> during an internship at the Pacific
          Northwest National Lab in Summer 2020. The repository for this app is&nbsp;
          <a target={'_blank'} rel={'noopener noreferrer'} href={'//github.com/wswiser101/personal-site'}>here</a>
          &nbsp;and the readme is below. {/* TODO add readme to this page */}
        </div>
      </div>
    );
  }
}