import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Signup from './Signup'


function Login({user, setUser}){

    const [username, SetUsername] = useState("")
    const [password, SetPassword] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory()

    function handleUsernameChange(e){
        SetUsername(e.target.value)
    }

    function handlePasswordChange(e){
        SetPassword(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
        const user = {
        username,
        password
    }
    // Logs in user
    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
                setUser(user)
                history.push("/home")
            })
        }else {
            res.json().then(json => setErrors(json.errors))
        }
    })
    history.push(`/`)
}
   

   

    return(
        <div>
            <h2>Log In</h2>
        <form onSubmit={onSubmit}>
        <label>
          Username
          </label>
        <input type='text' name='username' value={username} onChange={(e) => handleUsernameChange(e)} />
      
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={(e) => handlePasswordChange(e)} />
       
       
        <input type='submit' value='Log in!' />
      </form>
      <h3>
        Don't have an account yet? Sign up!
      </h3>
      <Link exact to="/signup">Sign up now!</Link>
         </div>
    )
}


export default Login;