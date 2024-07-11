import { useState } from 'react'

import './App.css'
import { TextField } from '@mui/material'
import TextInput from './components/TextInput'
import ApiGet from './components/ApiGet'
import CardApi from './components/CardApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      {/* <TextInput />
      <ApiGet /> */}
      <CardApi />
    </>
  )
}

export default App
