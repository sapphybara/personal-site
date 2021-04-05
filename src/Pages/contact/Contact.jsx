import React  from 'react';
import pic from './website pic.JPG'
import PageBase from '../PageBase';

const pictureId = 'picture_of_me';

export default class Contact extends PageBase {
  
  render() {
    return (
      <div style={{display: 'inline-block'}}>
        <ol style={{width: '20%'}}>
          <li>
            email
          </li>
          <li>
            phone
          </li>
        </ol>
        <span>
          <img
            id={pictureId}
            style={{width: '30%', margin: '30px auto 0', display: 'block'}}
            src={pic}
            alt={'my brother ralph and i'}
          />
          <p style={{textAlign: 'center'}}>My brother Ralph and I (tye-die) with Beckham</p>
        </span>
        <br />
        <h5 style={{textAlign: 'center'}}>Thank you for your interest!</h5>
        <br />
        <p>
          Listed below are some ways to contact me. If you have feedback on my code, feel free to create a PR on the repo if
          you'd like. See the navbar for a
        </p>
      </div>
    );
  }
}