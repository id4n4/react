import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState('')
    const onInputChange = ({ target }) => {
        setinputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        const value = inputValue.trim()
        if (value.length <= 1) return
        // setCategories((categories) => [ inputValue,...categories])
        onNewCategory(value)
        setinputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gift"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
