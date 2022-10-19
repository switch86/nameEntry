import { useState } from 'react'
import './App.css'

function App() {
  const [userNames, setUserNames] = useState([])
  const [currentName, setCurrentName] = useState("")
  
  function handleSubmit(event) {
    event.preventDefault()
    setUserNames(prevNames => {
      return [
              ...prevNames, 
              currentName
            ]
          })
    setCurrentName("")      
  }
  console.log(currentName)

  function handleChange(event) {
    event.preventDefault() 
    setCurrentName(event.target.value)
  }
  
  let namesHTML = userNames.map(name => {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
  )

  console.log(namesHTML)
  return (
    <div className="App">
      <h1>{currentName}</h1>
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="newName" 
            onChange={handleChange} 
            value={currentName}>
        </input>
        <button>Submit</button>
      </form>
      {namesHTML}
    </div>
  )
}

export default App
