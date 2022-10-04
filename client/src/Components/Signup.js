import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


function Signup({user, setUser}) {
   
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

    fetch("/signup",{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => {
          if(res.ok){
              res.json().then(user => {
                 setUser(user)
                 history.push(`/users/${user.id}`)
              })
          }else {
              res.json().then(console.log)
                // setErrors(Object.entries(json.errors)))
          }
      })
     
  }


    return (
        <div> 
        <form onSubmit={onSubmit}>
        <label>
          Username
          </label>  
          <input type='text' name='username' value={username} onChange={e => handleUsernameChange(e)} />
       
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={e => handlePasswordChange(e)} />
        
       
        <input type='submit' value='Sign up!' />
      </form>
        </div>
    )
}

export default Signup