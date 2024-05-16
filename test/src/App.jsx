import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MatrixRainingLetters } from "react-mdr";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello World
     </h1>
     <MatrixRainingLetters key="foo-bar" custom_class="mr-7 p-0" />
    </>
  )
}

export default App
