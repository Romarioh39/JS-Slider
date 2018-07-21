import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'react-emotion';
import './styles';
import { Container, Pix, Spic } from './styles';
import './pix/..'

class homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      p1: 1,
      p2: 2,
      p3: 3,
      p4: 4,
      p5: 5,
      p6: 6,
      p7: 7,
      p8: 8
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
        <Pix>
          <img src={require(`./pix/${this.state.p4}.jpg`)} alt="l" />
            <p class="legend">legend 4</p>
        </Pix>
        <Pix>
          <img src={require(`./pix/${this.state.p5}.jpg`)} alt="l" />
            <p class="legend">legend 5</p>
        </Pix>
        <Pix>
          <img src={require(`./pix/${this.state.p6}.jpg`)} alt="l" />
            <p class="legend">legend 6</p>
        </Pix>
        <Pix>
          <img src={require(`./pix/${this.state.p7}.jpg`)} alt="l" />
            <p class="legend">legend 7</p>
        </Pix>
        <Pix>
          <img src={require(`./pix/${this.state.p8}.jpg`)} alt="l" />
            <p class="legend">legend 8</p>
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
            }else if (this.state.p4 ===1) {
              this.setState({ p1: 5, p2: 6 , p3: 7})
            }else if (this.state.p5 ===1) {
              this.setState({ p1: 4, p2: 5 , p3: 6})	    
            }else if (this.state.p6 ===1) {
              this.setState({ p1: 3, p2: 4, p3: 5})
            }else if (this.state.p7 ===1) {
              this.setState({ p1: 2, p2: 3 , p3: 7})
            }else if (this.state.p8 ===1) {
              this.setState({ p1: 1, p2: 2 , p3: 3})
            } else {
              this.setState({ p1: this.state.p1 - 1, p2: this.state.p2 - 1, p3: this.state.p3 - 1 })
            }
          }} >Left</button>
          <button onClick={() => {
            console.log('Right')
            if (this.state.p1 === 5) {
              this.setState({ p1: 7, p2: 8, p3: 1 })
            } else if (this.state.p2 === 5) {
              this.setState({ p1: 8, p2: 1, p3: 2 })
            } else if (this.state.p3 === 5) {
              this.setState({ p1: 1, p2: 2, p3: 3 })
            } else if (this.state.p4 === 5) {
              this.setState({ p1: 2, p2: 3, p3: 4 })
            } else if (this.state.p5 === 5) {
              this.setState({ p1: 3, p2: 4, p3: 5 })	 
            } else if (this.state.p6 === 5) {
              this.setState({ p1: 4, p2: 5, p3: 6 })
            } else if (this.state.p7 === 5) {
              this.setState({ p1: 5, p2: 6, p3: 7 })
            } else if (this.state.p8 === 5) {
              this.setState({ p1: 6, p2: 7, p3: 8 })
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
