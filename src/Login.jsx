import React, { useContext, useState } from "react";
import { Usercontext } from "./Usercontext";

export function Login() {
    const [mail, setmail] = useState('')
    const [Name, setName] = useState('')
    const [password, setpassword] = useState('')

    const { setdata } = useContext(Usercontext)

    const handler = (e) => {
        e.preventDefault()
        setdata({ mail, password, Name })
    }
    return (
        <>
            <form onSubmit={handler}>
                <div style={{ fontSize: '20px' }}>
                    <input
                        required
                        className="allinput"
                        placeholder="enter your name"
                        type="text"
                        value={Name}
                        onChange={(e) => { setName(e.target.value); }} />
                    <br />
                    <input
                        className="allinput"
                        placeholder="enter email"
                        type="email"
                        value={mail}
                        onChange={(e) => { setmail(e.target.value); }}
                        required
                    />
                    <br />
                    <input
                        required
                        className="allinput"
                        placeholder="enter password"
                        type="password"
                        value={password}
                        onChange={(e) => { setpassword(e.target.value); }} />
                    <br />
                    <div>
                        <center>
                            <button className="button"
                                style={{ backgroundColor: "#3c475c" }}>submit</button>

                        </center></div>
                </div>
            </form>
        </>
    )
}