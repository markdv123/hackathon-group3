import './styles/App.css'
import React, { useState, useEffect } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import CreateProfile from './pages/CreateProfile'
import ViewProfile from './pages/ViewProfile'

function App(props) {
  const [pageLoading, updatePageLoading] = useState(true)
  const [authenticated, updateAuthenticated] = useState(false)
  const [currentUser, updateUser] = useState(null)

  useEffect(()=> {
    updatePageLoading(false)
    verifyTokenValid()
  }, [])

  const toggleAuthenticated = (value, user) => {
    updateAuthenticated(value)
    updateUser(user)
    props.history.push('/')
  }

  const verifyTokenValid = async () => {
    //idk what to do here just yet
    return
  }

  return (
    <div className="App">
      {pageLoading ? (
        <h3>Loading...</h3>
      ) : (
        <Switch>
          <Route 
            exact path="/"
            component={()=> (
              <Home 
                currentUser={currentUser}
                authenticated={authenticated}/>
            )}
          />
          <Route
            path="/register"
            component={()=> (
              <SignUp 
                currentUser={currentUser}
                authenticated={authenticated}/>
            )}
          />
          <Route
            path="/login"
            component={()=> (
              <SignIn 
                toggleAuthenticated={toggleAuthenticated}
                currentUser={currentUser}
                authenticated={authenticated}/>
            )}
          />
          <ProtectedRoute
            authenticated={authenticated}
            path="/createprofile"
            component={()=> (
              <CreateProfile 
                currentUser={currentUser}
                authenticated={authenticated}/>
            )}
          />
          <ProtectedRoute
            authenticated={authenticated}
            path="/profile/:profile_id"
            component={()=> (
              <ViewProfile 
                currentUser={currentUser}
                authenticated={authenticated}/>
            )}
          />
        </Switch>
      )}
    </div>
  )
}

export default App
