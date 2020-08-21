import React, { Component } from 'react';
import { Affix, Icon, Nav, Navbar } from 'rsuite';
import { Link } from 'react-router-dom';

const MyLink = props => {
  const {href, as, val} = props;
  return (
    <Link href={href} as={as} to={href}>
      &nbsp;{val}&nbsp;
    </Link>
  );
};

const CustomLink = props => <Nav.Item componentClass={MyLink} {...props} />;

export default class CustomNavbar extends Component {
  
  render() {
    return (
      <Affix>
        <Navbar>
          <Navbar.Body>
            <Nav style={{display: 'inline-block', padding: '18px 20px'}}>
              <CustomLink href="/" val={'Home'}/>
              <CustomLink href="/games" val={'Games'}/>
              <CustomLink href="/resume" val={'Resum' + String.fromCharCode(233)}/>
            </Nav>
            <Nav pullRight>
              <Nav.Item
                target="_blank"
                rel="noopener noreferrer"
                href={'//github.com/wswiser101'}
                icon={<Icon icon="github"/>}
              />
              <Nav.Item
                target="_blank"
                rel="noopener noreferrer"
                href={'//linkedin.com/in/wswiser101'}
                icon={<Icon icon="linkedin"/>}
              />
              <Nav.Item
                target="_blank"
                rel="noopener noreferrer"
                href={'//twitter.com/warren_wiser'}
                icon={<Icon icon="twitter"/>}
              />
            </Nav>
          </Navbar.Body>
        </Navbar>
      </Affix>
    );
  }
}
