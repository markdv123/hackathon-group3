import React from 'react'
import TextInput from '../components/TextInput'
import { __LoginUser } from '../services/UserServices'

function SignIn() {
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')
  const [formError, updateErr] = useState(false)

  handleEmail = ({ target }) => {
    updateEmail(target.value)
    updateErr(false)
  }

  handlePassword = ({ target }) => {
    updatePassword(target.value)
    updateErr(false)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const loginData = await __LoginUser(email, password)
      toggleAuthenticated(true, loginData.user)
    } catch (error) {
      this.setState({ formError: true })
    }
  }
  return (
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
        <button className="btn waves-effect waves-light red" type="submit" name="action">Sign In
              <i className="material-icons right">fast_forward</i>
        </button>
        {formError ? <p>Error While Logging In</p> : <p></p>}
      </form>

    </div>

  )
}

export default SignIn