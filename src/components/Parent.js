import React, { Component } from 'react'
import { Container } from '../Style'
import Signin from './Signin'
import Signup from './Signup'
export default class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isReg: true
    }
  }
  handleClick=()=>{
    this.setState({
      isReg: !this.state.isReg
    })
  }
  render() {
    return (
      <Container>
        {
          this.state.isReg ? <Signin meth={this.handleClick} /> : <Signup meth={this.handleClick} />
        }
      </Container>
    )
  }
}
