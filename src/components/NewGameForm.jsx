
import PropTypes from "prop-types"
import TextInput from "./TextInput"
import { useState } from "react"
 
NewGameForm.propTypes = {
    addGame: PropTypes.func
}


export default function NewGameForm ({addGame}) {
const [title, setTitle] = useState("")
const [cover, setCover] = useState("")

const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({title, cover})
    setTitle("")
    setCover("")
}

return (
<form style={{display: "flex", alignItems:"center", gap:"2rem"}} onSubmit={handleSubmit}>
<TextInput id="title" label="Título" value={title} setValue={setTitle} />
<TextInput id="cover" label="Capa:" value={cover} setValue={setCover} />
<button>Adicionar à Biblitoeca</button>
</form>
)}
