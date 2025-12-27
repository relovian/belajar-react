import { useState } from 'react'

const FormRegister = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [umur, setUmur] = useState("")

    const [usernameValidasi, setValidasiUsername] = useState("")
    const [emailValidasi, setValidasiEmail] = useState("")
    const [passwordValidasi, setValidasiPassword] = useState("")
    const [umurValidasi, setValidasiUmur] = useState("")



    const handleFormValidasi = (e:  React.FormEvent<HTMLFormElement>) => {

        e.preventDefault(); // ⬅️ INI KUNCINYA

        setValidasiUsername("");
        setValidasiEmail("");
        setValidasiPassword("");
        setValidasiUmur("");

        const umurNumber = Number(umur); // ⬅️ PARSING YANG BENAR


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const FormatEmail = emailRegex.test(email);

        if(username.length < 5) {
            setValidasiUsername("username minimal 5 karakter");
        } 

        if(password.length < 8) {
            setValidasiPassword("password minimal 8 karakter");
        }

        if(FormatEmail == false){
            setValidasiEmail("email harus menggunakan format @ dan menggunakan domain misal .com");
        }

        if(umurNumber <= 18) {
            setValidasiUmur("umur harus lebih dari 18 tahun ");
        }



    }

    return (
        <div>
            <form action="" onSubmit={handleFormValidasi}>
                <h1>Form Register</h1>

                <label htmlFor="username">username</label><br />
                <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} value={username}/><br />

                <p style={{color: "red"}}>{usernameValidasi}</p>
                
                <label htmlFor="email">email</label><br />
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/><br />

                <p style={{color: "red"}}>{emailValidasi}</p>

                <label htmlFor="password">password</label><br />
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />

                <p style={{color: "red"}}>{passwordValidasi}</p>

                <label htmlFor="umur">umur</label><br />
                <input type="number" id="umur" onChange={(e) => setUmur(e.target.value)} value={umur}/><br />

                <p style={{color: "red"}}>{umurValidasi}</p>

                <button type="submit">Register</button>
            </form>

            <div>
                <h1>Data Registrasi</h1>

                <p>Username : {username}</p>
                <p>email : {email}</p>
                <p>Password : {password}</p>
                <p>Umur : {umur}</p>
            </div>

        </div>
    )
}

export default FormRegister;