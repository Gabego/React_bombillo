import { useState } from 'react'
import './App.css'

function App() {
  const [isTrue, setIsTrue] = useState(false)
  const handleBoolean = () => setIsTrue(!isTrue)

  return (
    <div className="App">
     {isTrue?
      <button className='botonOn' onClick={handleBoolean}>Prender</button>
      :
      <button className='botonOff' onClick={handleBoolean}>Apagar</button>
      }
      {
      isTrue?
       
        <img className='imgBombillo' src="https://static3.depositphotos.com/1003388/172/i/600/depositphotos_1720581-stock-photo-3d-render-of-light-bulb.jpg" alt="" />
      :
        <img className='imgBombillo' src="https://img.freepik.com/vector-gratis/bombilla-luz-encendida-realista-aislada_1284-41774.jpg?w=2000" alt="" />
      }

    </div>
  )
}

export default App
