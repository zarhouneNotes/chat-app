import React, {useState} from 'react'
import axios from 'axios'

function LoginForm() {
    const [username, setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [Error, setError] = useState('')
     const handlSubmit = async (e)=>{
        e.preventDefault() ;
        const authObject = {'Project-ID' : "176829c0-082a-4a2f-bfe0-735e5ebb5fd6" , 'User-Name' : username , 'User-Secret' : password}

        try {
            await axios.get('https://api.chatengine.io/chats' , {headers : authObject})
            localStorage.setItem('username' , username)
            localStorage.setItem('password' , password)
            window.location.reload()


            
        } catch (error) {
            setError('Oops! incorrect credentials')
        }

     }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handlSubmit} >
                    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="username" required className="input" />
                    <input type="password" value={password}   onChange={(e)=>{setPassword(e.target.value)}}  placeholder="password" required className="input" />
                    <div align="center" >
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h3 className="error" >{Error}</h3>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
