import React, {useEffect, useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import TextInput from '../components/TextInput'
import { __RegisterUser } from '../services/UserServices'
import Nav from '../components/Nav'

function SignUp(props) {
  const [name, updateName] = useState('')
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')
  const [accountTier, updateTier] = useState('')

  useEffect(()=> {
    console.log(props)
  }, [])
  const handleName = ({ target }) => {
    updateName(target.value)
  }

  const handleEmail = ({ target }) => {
    updateEmail(target.value)
  }

  const handlePassword = ({ target }) => {
    updatePassword(target.value)
  }

  const handleTier = ({ target }) => {
    updateTier(target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const register = await __RegisterUser(name, email, password, accountTier)
      console.log(register)
      props.history.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Nav />
      <div className="signup flex-col center">

        <form className="flex-col" onSubmit={handleSubmit}>
          <TextInput
            placeholder="Your Name"
            type="text"
            name="name"
            value={name}
            onChange={handleName}
          />
          <TextInput
            placeholder="Your Email"
            name="email"
            value={email}
            type="email"
            onChange={handleEmail}
          />

          <TextInput
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          <div>
            <label>Select Account Tier</label>
            <select className="browser-default"
              name='accountTier'
              value={accountTier}
              onChange={handleTier}>
              <option value="" disabled selected>Choose your option</option>
              <option value="Platinum">Platinum</option>
              <option value="Gold">Gold</option>
              <option value="Bronze">Bronze</option>
            </select>
          </div>
          <button onClick={handleSubmit} className="btn waves-effect waves-light" name="action">Sign Up
              <i className="material-icons left">person_add</i>
          </button>
        </form>
      </div>
    </div>
  )

}

export default withRouter(SignUp)