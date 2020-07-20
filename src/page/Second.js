import React, { useContext } from "react"
import { Button } from "reactstrap"
import { FamilyContext, runFetch } from "./context/FamilyContext"

const Second = () => {
    const { dispatch } = useContext(FamilyContext)
    return <div style={{ border: '1px solid black', padding: '10px 20px'}}>
        Second component <br/>
        <Button onClick={e => dispatch({ type: "reset" })} >
            Reset
        </Button>
        <Button onClick={() => runFetch(dispatch)} >
            Get API 
        </Button>
    </div>
}

export default Second