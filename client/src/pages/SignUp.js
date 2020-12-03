import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __RegisterUser } from '../services/UserServices'
import {Link} from 'react-router-dom'

export default class Signup extends Component {
  // TODO Integrate Auth
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      accountTier: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
    console.log(this.state)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await __RegisterUser(this.state)
      this.props.history.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const { name, password, email, accountTier } = this.state
    return (
      <div className="signup flex-col">
        
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Your Name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            />
          <TextInput
            placeholder="Your Email"
            name="email"
            value={email}
            type="email"
            onChange={this.handleChange}
            />
          
          <TextInput
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            />
            <div>
                <label>Select Account Tier</label>
                <select class="browser-default"
                    name='accountTier'
                    value={accountTier}
                    onChange={this.handleChange}>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Platinum</option>
                    <option value="2">Gold</option>
                    <option value="3">Bronze</option>
                </select>   
            </div>
          <button className="btn waves-effect waves-light red" type="submit" name="action">Sign Up
            <i className="material-icons right">directions_car</i>
          </button>
        </form>
      </div>
    )
  }
}
