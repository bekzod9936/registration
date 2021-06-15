import React, { Component } from 'react'
import { Container } from '../Style'
import Signin from './Signin'
import Signup from './Signup'
import WelcomePage from './WelcomePage'
export default class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isReg: true ,
       isWelcome: true,
    }
  }
  handleClick=()=>{
    this.setState({
      isReg: !this.state.isReg, 
    })
  }
  handleWelcome=()=>{
    this.setState({
      isWelcome: !this.state.isWelcome
    })
  }
  render() {
    return (
      <Container>
        {
          this.state.isReg ? <Signin meth={this.handleClick} /> : this.state.isWelcome ?   <Signup meth={this.handleClick} open={this.handleWelcome} /> : <WelcomePage />
        }

      </Container>
    )
  }
}
