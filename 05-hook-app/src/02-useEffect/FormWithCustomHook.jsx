import { useEffect } from 'react'
import { userForm } from '../hooks/userForm'

export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = userForm({
        username: '',
        email: '',
        password: ''
    })
    useEffect(() => {
        // console.log('useEffect called!!')

    }, [])
    useEffect(() => {
        // console.log('formState changed!');
    }, [formState])
    useEffect(() => {
        // console.log('email changed!');
    }, [email])



    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className='form-control mt-2'
                placeholder='username@gmail.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className='form-control mt-2'
                placeholder='password'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button
                className='btn btn-primary mt-2'
                onClick={onResetForm}
            >Borrar</button>
        </>
    )
}
