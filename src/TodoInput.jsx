import { useState } from "react"

export default function TodoInput(todo) {
    const [value, updateValue] = useState("")
    if (todo.buttonText == "add") {
        return <div><input value={value} onChange={e=>updateValue(e.target.value)}/><button onClick={()=>alert(`add ${value}`)}>add</button></div>
    }
    return <div><span>{todo.name}</span><button>remove</button></div>

}