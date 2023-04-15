import { useEffect, useState } from 'react'
import {rickandmortyapi } from '../API/rickAndMortyApi'

export const useRickAndMorty = (parameters) => {
    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getCharacter = async () => {
        setstate({
            ...state,
            isLoading: true
        })
        const resp = await rickandmortyapi.get(parameters)
        console.log(resp.data)
        setstate({
            data: resp.data.results,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
      getCharacter()
    }, [parameters])
    
    
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
