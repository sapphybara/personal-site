import React, { Component } from 'react';
import { css } from 'emotion';

const MAIN_NAV = css`
    height: 100vh;
    width: 20%;
    float: left;
    display: inline-block;
    border-right: 2px solid black;
`;

export default class SideNav extends Component {
  // Home
  // Education
  // Experience
  // Publications/Reports
  // Extracurricular activities
  
  render() {
    return (
      <div className={MAIN_NAV}>
        hi
      </div>
    );
  }
}