import { useState } from "react"

export const userForm = (InitialForm = {}) => {
  const [formState, setFormState] = useState(InitialForm)

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })

  }
  const onResetForm = () => {
    setFormState(InitialForm)
  }
  return {
      ...formState,
      formState,
      onInputChange,
      onResetForm,
  }
}
