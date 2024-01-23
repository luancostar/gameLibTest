import { useState } from "react"
import Game from "./components/Game"

export default function App () {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib")
    if (!storedGames) return []
    return JSON.parse(storedGames)
  })

  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  const addGames = ({title, cover}) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title, cover}
    setGames(state => {
      const newState = [...state, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }
  
  const handleSubmit = (ev) => {
  ev.preventDefault()
  addGames({title, cover})
  setTitle("")
  setCover("")
  }

  const removeGame = (id) => {
    setGames(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }


  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleSubmit} action="">
        <div>
          <label htmlFor="title">Título:</label>
          <input type="text" 
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input 
          type="text"
          name="cover" 
          id="cover" 
          value={cover}
          onChange={(e) => setCover(e.target.value)}
           />
        </div>
 
          <button>Adicionar à Biblitoeca</button>
 
      </form>

       <div className="games">
        {games.map((game) => (
        <Game
         key={game.id}
         title={game.title}
         cover={game.cover}
         onRemove={() => removeGame(game.id)}
         />
        ))}
       </div>
    </div>
  )
}