import React, { Component } from 'react';
// import logo from './logo.svg';
// import styled from 'react-emotion';
import { Container, Pix, Spic } from './styles';
import './pix/..'

class homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      p1: 1,
      p2: 2,
      p3: 3
    }
  }

  render() {
    return (
      <Container>
        <Pix>
          <img src={require(`./pix/${this.state.p1}.jpg`)} alt="l" />
           <p  class="legend">legend 1</p>
        </Pix>
        <Pix>
          <img src={require(`./pix/${this.state.p2}.jpg`)} alt="l" />
            <p class="legend">legend 2</p>
        </Pix>
        <Pix>
          <img src={require(`./pix/${this.state.p3}.jpg`)} alt="l" />
            <p class="legend">legend 3</p>
        </Pix>
        <Spic>
          <button onClick={() => {
            console.log('Left')
            if (this.state.p1 === 1) {
              this.setState({ p1: 8, p2: 1, p3: 2 })
            } else if (this.state.p2 === 1) {
              this.setState({ p1: 7, p2: 8, p3: 1 })
            } else if (this.state.p3 === 1) {
              this.setState({ p1: 6, p2: 7, p3: 8 })
            } else {
              this.setState({ p1: this.state.p1 - 1, p2: this.state.p2 - 1, p3: this.state.p3 - 1 })
            }
          }} >Left</button>

          <button onClick={() => {
            console.log('Right')
            if (this.state.p3 === 8) {
              this.setState({ p1: 7, p2: 8, p3: 1 })
            } else if (this.state.p2 === 8) {
              this.setState({ p1: 8, p2: 1, p3: 2 })
            } else if (this.state.p1 === 8) {
              this.setState({ p1: 1, p2: 2, p3: 3 })
            } else {
              this.setState({ p1: this.state.p1 + 1, p2: this.state.p2 + 1, p3: this.state.p3 + 1 })
            }
          }} >Right</button>
        </Spic>
      </Container>
    );
  }
}

export default (homepage)
