import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'react-emotion';
import './styles';
import { Container } from './slider/styles';
import './pix/1.jpg'

class homepage extends Component {
  render() {
    return (
      <Container>
        <img src={ require("./pix/1.jpg") } alt=""/>
      </Container>
    );
  }
}

export default (homepage)
