//Controlled form

import React, { useState } from "react";

const Login_form = () => {
    const [email, setEmail] = useState("")
    const [password, SetPassword] = useState("")
    const [store, setStore] = useState([])
    const SubmitForm = (data) => {
        data.preventDefault()
        let newStore = { email, password }
        if (email && password) {
            // form data came in objct type 
            setStore([...store, newStore])
            console.log(newStore)
             console.log(store)
            setEmail("")
            SetPassword("")
        }else{
            console.log("enter data")
        }
    }
    return (
        <>
            <form action="" onSubmit={SubmitForm}>
                <input placeholder="enter your email"
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <input placeholder="enter your password"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => { SetPassword(e.target.value) }}
                />
                <button type="submit">submit</button>
            </form>
            <p>{email}</p>
            <p>{password}</p>
            <div>
                <h1>
                    {store.map((val) => {
                        return <div key={val.id}>
                            {val.email}
                            {val.password}
                        </div>
                    })}
                </h1>
            </div>
        </>
    );
}
export default Login_form;