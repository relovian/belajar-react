import { useState } from 'react'

import { useForm } from 'react-hook-form'
import type { SubmitHandler} from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const regisFormSchema = z.object({
    username: z.string().min(3, "username minimal 3 karakter"),
    email: z.string().min(8).email("format email tidak valid"),
    password: z.string().min(8, "password harus minimal 8 karakter").regex(/[A-Z]/, "password harus mengandung huruf kapital").regex(/[0-9]/, "password harus mengandung angka"),
    umur: z.coerce.number().min(18, "umur harus diatas 18 tahun"),
})

type RegisFormSchemaInput = z.input< typeof regisFormSchema>
type RegisFormSchemaOutput = z.infer< typeof regisFormSchema>

const FormRegister = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [umur, setUmur] = useState(0)

    const form = useForm<RegisFormSchemaInput>({
        resolver: zodResolver(regisFormSchema),
        defaultValues: {
            username: "",
            password: "",
            email: "",
            umur: 0,
        },

    })

    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [umur, setUmur] = useState("")

    // const [usernameValidasi, setValidasiUsername] = useState("")
    // const [emailValidasi, setValidasiEmail] = useState("")
    // const [passwordValidasi, setValidasiPassword] = useState("")
    // const [umurValidasi, setValidasiUmur] = useState("")

    const handleFormValidasi: SubmitHandler<RegisFormSchemaOutput> = (values) => {

        setUsername(values.username)
        setPassword(values.password)
        setUmur(values.umur)
        setEmail(values.email)

    }       

        // e.preventDefault(); 

        // setValidasiUsername("");
        // setValidasiEmail("");
        // setValidasiPassword("");
        // setValidasiUmur("");

        // const umurNumber = Number(umur); 


        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // const FormatEmail = emailRegex.test(email);

        // if(username.length < 5) {
        //     setValidasiUsername("username minimal 5 karakter");
        // } 

        // if(password.length < 8) {
        //     setValidasiPassword("password minimal 8 karakter");
        // }

        // if(FormatEmail == false){
        //     setValidasiEmail("email harus menggunakan format @ dan menggunakan domain misal .com");
        // }

        // if(umurNumber <= 18) {
        //     setValidasiUmur("umur harus lebih dari 18 tahun ");
        // }

        return (
            <div>
                <form action=""  onSubmit={form.handleSubmit((data) => handleFormValidasi(data as RegisFormSchemaOutput))}>
                    <h1>Form Register</h1>
    
                    <label htmlFor="username">username</label><br />
                    <input type="text" id="username" {...form.register("username")}  /><br />
    
                    <p style={{color: "red"}}>{form.formState.errors.username?.message}</p>
                    
                    <label htmlFor="email">email</label><br />
                    <input type="email" id="email" {...form.register("email")}  /><br />
    
                    <p style={{color: "red"}}>{form.formState.errors.email?.message}</p>
    
                    <label htmlFor="password">password</label><br />
                    <input type="password" id="password" {...form.register("password")}  /><br />
    
                    <p style={{color: "red"}}>{form.formState.errors.password?.message}</p>
    
                    <label htmlFor="umur">umur</label><br />
                    <input type="number" id="umur"{...form.register("umur")}  /><br />
    
                    <p style={{color: "red"}}>{form.formState.errors.umur?.message}</p>
    
                    <button type="submit">Register</button>
                </form>

                <div>
                    <h1>Data Registrasi</h1>
    
                    <p>Username : {username}</p>
                    <p>Password : {password}</p>
                    <p>email : {email}</p>
                    <p>Umur : {umur}</p>
                </div>
            </div>
        )


    }

export default FormRegister;