import * as React from 'react'
import { useState, useEffect } from 'react'

const MakeUser: React.FC<IMakeUserProps> = (props) => {
    const [name, setName] = useState({})
    const [email, setEmail] = useState({})
    

    const btnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newUser = {
            name: name,
            email: email
        }

        fetch(`/api/authors/`, {})
    }

    return(
    <>
        <h1>Create New Author</h1>
        <input type="text" placeholder="Name" onChange={(e)=>setName({e.target.value})}></input>
        <input type="text" placeholder="Name" onChange={(e)=>setName({e.target.value})}></input>
    </>
    )
}

export interface IMakeUserProps {}

export default MakeUser