import { useForm} from 'react-hook-form'   
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

// type FormLoginSchema = {
//     username: string,
//     password: string
// }

const formLoginSchema = z.object({
    username: z.string().min(5, "username minimal 5 karakter").max(10, "username maksimal 10 karakter"),
    password: z.string().min(8, "password minimal 8 karakter"),
    umur: z.coerce.number().min(18, "umur minimal 18 tahun"),
})

type FormLoginSchema = z.input<typeof formLoginSchema >;

const RFHpage = () => {

    const form = useForm<FormLoginSchema>({
        resolver: zodResolver(formLoginSchema),

        defaultValues: {
            username: "",
            password: "",
            umur: 0,
        },
    });

    const handleFormLogin = (values: FormLoginSchema) => { 
        console.log(values.umur)
        alert("submit success") 
    }
    return (
        <div>
            <form onSubmit={form.handleSubmit(handleFormLogin)}>
                <h1>react form hook</h1>

                <label>
                    Username : <br />
                    <input type="text" {...form.register("username")}/>
                </label> <br /> 

                <span style={{color: "red"}}>{form.formState.errors.username?.message}</span> <br />

                <label>
                    password : <br />
                    <input type="password" {...form.register("password")} />
                </label> <br />

                <span style={{color: "red"}}>{form.formState.errors.password?.message}</span> <br />

                <label>
                    umur : <br />
                    <input type="number" {...form.register("umur")} />
                </label> <br />

                <span style={{color: "red"}}>{form.formState.errors.umur?.message}</span> <br />

                <button>Login</button>
            </form>
        </div>
    )
}

export default RFHpage