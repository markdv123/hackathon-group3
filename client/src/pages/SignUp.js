import React from 'react'
import TextInput from '../components/TextInput'
import { __RegisterUser } from '../services/UserServices'
import Nav from '../components/Nav'

function SignUp() {
  const [name, updateName] = useState('')
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')
  const [accountTier, updateTier] = useState('')

  handleName = ({ target }) => {
    updateName(target.value)
  }

  handleEmail = ({ target }) => {
    updateEmail(target.value)
  }

  handlePassword = ({ target }) => {
    updatePassword(target.value)
  }

  handleTier = ({ target }) => {
    updateTier(target.value)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await __RegisterUser(name, email, password, accountTier)
      props.history.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Nav />
      <div className="signup flex-col">

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
            <select class="browser-default"
              name='accountTier'
              value={accountTier}
              onChange={handleTier}>
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
    </div>
  )

}

export default SignUp