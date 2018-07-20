import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'react-emotion';
import './styles';
import { Container } from './slider/styles';
import './pix/..'

class homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      p4: 4
    }
  }

  render() {
    return (
      <Container>
        <div>
          <img src={require(`./pix/${this.state.p4}.jpg`)} alt="l" />
        </div>
      </Container>
    );
  }
}

export default (homepage)
