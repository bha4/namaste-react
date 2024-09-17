import React, { useState } from "react"

const User =({name})=>{
const [count] =useState(0)
const [count2] = useState(1)
    return (
      <div>
        <h1>name:{name} function </h1>
        <h1>{(count, count2)}</h1>
        <h1>{count + "," + count2}</h1>
        <h1>{[count, count2].join(",")}</h1>
        <h1>{`${count},${count2}`}</h1>
        <hr />
      </div>
    );

}

export default User;