import React, {useState} from 'react'
import TextInput from '../components/TextInput'
import { __LoginUser } from '../services/UserServices'
import Nav from '../components/Nav'

function SignIn(props) {
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')
  const [formError, updateErr] = useState(false)

  const handleEmail = ({ target }) => {
    updateEmail(target.value)
    updateErr(false)
  }

  const handlePassword = ({ target }) => {
    updatePassword(target.value)
    updateErr(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const loginData = await __LoginUser(email, password)
      props.toggleAuthenticated(true, loginData.user)
    } catch (error) {
      updateErr(true)
    }
  }
  return (
    <div>
      <Nav />
      <div className="signin flex-col">
        <form className="flex-col" onSubmit={handleSubmit}>
          <TextInput
            placeholder="Your Email"
            name="email"
            type="email"
            value={email}
            onChange={handleEmail}
          />
          <TextInput
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <button className="btn waves-effect waves-light" type="submit" name="action">Sign In
                <i className="material-icons left">person</i>
          </button>
          {formError ? <p>Error While Logging In</p> : <p></p>}
        </form>
      </div>
    </div>
  )
}

export default SignIn