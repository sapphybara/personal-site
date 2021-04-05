import React  from 'react';
import ResumePDF from './Components/ResumePDF.jsx';
import PageBase from '../PageBase';

export default class Resume extends PageBase {
  
  render() {
    return (
      <div>
        <h3 style={{textAlign: 'center', top: '30px'}}>{this.props.title}</h3>
        <ResumePDF />
      </div>
    );
  }
}