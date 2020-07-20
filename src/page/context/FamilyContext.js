import React, { useEffect, useReducer, createContext } from "react"
import { reducer, initialState } from "./Reducer"

const FamilyContext = createContext()

const runFetch = async (dispatch) => {
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => 
        response.json()
    )
    .then(json => {
        if (json.title) {
            console.log(json.title)
            dispatch({ type: "get", title: json.title})
        }
    })
} 

const FamilyProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }

    useEffect(() => {
        runFetch(dispatch)
    }, [])

    return <FamilyContext.Provider value={value}>
        <div style={{border: "1px solid black", padding: "10px"}}>
            {props.children}
        </div>
    </FamilyContext.Provider>
}

export { FamilyContext, FamilyProvider, runFetch }