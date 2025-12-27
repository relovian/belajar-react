import { useState } from 'react'

const FormInput = () => {
    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [validasiPassword, setValidasiPassword] = useState("")
    const [validasiUsername, setValidasiUsername] = useState("")

    
    
    const handleForm = () => {
    
        if (usernameInput.length < 5) {
            setValidasiUsername( "username harus lebih dari 5");
        } 
    
        if ( passwordInput.length < 8) {
            setValidasiPassword("password harus lebih dari 8");
        }

    }

    return (
        <div>
            <h1>Form Login</h1>

            <h3>Username = {usernameInput}</h3>
            <h3>Password = {passwordInput}</h3>

            <label htmlFor="username">Username : </label> <br />
            <input onChange={(e) => setUsernameInput(e.target.value)} id="username" type="text"  value={usernameInput}/> <br /> <br />

            <label htmlFor="password">password : </label> <br />
            <input onChange={(e) => setPasswordInput(e.target.value)} id="password" type="password" value={passwordInput}/> <br />

            <p>{validasiUsername}</p> 
            <p>{validasiPassword}</p> <br />

            <button onClick={handleForm} type="submit">Login</button>
        </div>
    )
}

export default FormInput