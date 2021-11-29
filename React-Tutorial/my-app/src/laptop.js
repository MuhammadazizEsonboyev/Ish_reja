import React, { useState } from 'react'

export default function Laptop() {
const [hendler, setHendler] = useState("");


    return (
        <div>
            <form />
            <h1> Salom {hendler}</h1>
            <p>Ismingizni kiriting</p>
            <input type="text" 
            value={hendler}
            onChange={(e)=> setHendler(e.target.value)} />
            <form />
        </div>
    )
}
