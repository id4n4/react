import React from 'react'
import { useState } from 'react'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'idanfour',
        email:  'idanfour@gmail.com'
    })
    const {username, email} = formState

    const onInputChange = ({target}) => {
        let obj = {
            ...formState
        }
        obj[target.name] = target.value
        console.log(obj)
        setFormState(obj)
        
    }
    return (
        <>
            <h1>Formulario Simple</h1>
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
        </>
    )
}
