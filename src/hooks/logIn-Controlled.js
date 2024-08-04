

import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function LogInControlled() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitfunc = async (username, password) => {

        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    password
                }),

            })
            console.log(response)
            const finalRes = await response.json()
            if (finalRes.meesage) {
                alert("mani")
            }
        } catch (error) {
            console.log("hiihi")
        }

    }

    const inpuHandler = () => { }
    const passwordHandler = () => { }


    return (
        <div className="mb-3 mt-3 display-1" >
            <form className="mb-3 mt-3 lead display-1" onSubmit={submitfunc}>
                <div>
                    <label className="mb-3 mt-3 display-1">Email_id</label>
                    <input type='text' placeholder='enter email id' value={""} className="mb-3 mt-3 display-1" onChange={inpuHandler} /><br />
                </div><div>
                    <label className="mb-3 mt-display-1 v">Password</label>

                    <input type='password' placeholder='enter password' value={""} className="mb-3 mt-3 display-1" onChange={passwordHandler} />
                </div>
            </form>
            <button className="mb-3 mt-3 display-1">
                Submit
            </button>

        </div>
    )
}

