import React, { useContext } from "react";
import { Usercontext } from "./Usercontext";

export function Profile() {
    const { data } = useContext(Usercontext)
    if (!data) return <center><h2>Please Login</h2></center>


    return <center><h2> Welcome {data.Name}</h2></center>
}