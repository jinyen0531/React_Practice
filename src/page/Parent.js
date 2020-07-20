import React from 'react'
import First from "./First"
import Second from './Second'
import { FamilyProvider } from "./context/FamilyContext"

const Parent = () => {
    return <FamilyProvider>
        <First />
        <Second />
    </FamilyProvider>
}

export default Parent