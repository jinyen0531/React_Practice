import React, { useState, useContext } from 'react'
import { Button, Input } from "reactstrap"
import { FamilyContext } from './context/FamilyContext'

const First = () => {
    const { state, dispatch } = useContext(FamilyContext)
    const [title, setTitle] = useState('')

    return <div style={{ border: '1px solid black', padding: '10px 20px'}}>
        First Component <br/>
        <span style={{ marginRight: '10px'}}>
            title: {state.title}
        </span>
        <Input type="text" value={title} onChange={e => setTitle(e.target.value)} /> 
        <Button onClick={e => dispatch({ type: "get", title})}>
            Change Title
        </Button>
    </div>
}

export default First