import React, { Component } from 'react';

export default class PageBase extends Component {
  
  static defaultProps = {
    title: undefined
  }
  
  componentDidMount() {
    // changes the title for each component
    const title = this.props.title;
    document.title = "Warren Wiser" + (title ? ' - ' + title : '');
  }
  
  render() {
    console.error('Cannot create instance of abstract class PageBase')
    return <div/>
  }
}