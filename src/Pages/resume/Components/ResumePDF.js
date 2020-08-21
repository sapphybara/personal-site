import React, { Component } from 'react';
// local import to use webpack pdf loader
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import Resume from './WiserCV_draft_8.18.pdf'
import '../../../services/resumeStyles.less'
import { Icon, IconButton } from 'rsuite';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default class ResumePDF extends Component {
  
  state = {
    numPages: 1,
    file: Resume,
    pageNumber: 1
  }
  
  /**
   * gets the number of pages in pdf after it loads
   * @param {Object} totalPages contains the numPages attribute
   */
  onDocumentLoadSuccess = totalPages => {
    this.setState({ totalPages: totalPages.numPages, pageNumber: 1 });
  }
  
  /**
   * navigate between pages
   * @param offset 1 | -1 the number to move left/right
   */
  changePage = offset => {
    this.setState({ pageNumber: this.state.pageNumber + offset})
  }
  
  /**
   * moves pdf forward
   */
  handleForwardPageChange = () => {
    this.changePage(1)
  }
  
  /**
   * moves pdf back
   */
  handleBackwardPageChange = () => {
    this.changePage(-1)
  }
  
  render() {
    const { file, totalPages, pageNumber } = this.state;
    
    return (
      <div className="Resume__container__document">
       <span className={'button'}>
         <span>
           <IconButton
             onClick={this.handleBackwardPageChange}
             icon={<Icon icon={"caret-left"}/>}
             disabled={pageNumber <= 1}
           />
         </span>
         <span  style={{float: 'right'}}>
           <IconButton
             onClick={this.handleForwardPageChange}
             icon={<Icon icon={"caret-right"}/>}
             disabled={pageNumber >= totalPages}
           />
         </span>
      </span>
      <Document
        file={file}
        onLoadSuccess={this.onDocumentLoadSuccess}
        options={options}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      </div>
    );
  }
}