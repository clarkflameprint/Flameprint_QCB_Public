// src/App.jsx
import { useState } from 'react'
import EngineToggle from './components/EngineToggle'

export default function App({ engineLabels }) {
  const [engineMode, setEngineMode] = useState('remote')

  const handleToggle = () => {
    setEngineMode((prev) => (prev === 'remote' ? 'local' : 'remote'))
  }

  return (
    <div className="app">
      <h1 className="title">ai.qcb Engine Interface</h1>
	<EngineToggle
  	engineMode={engineMode}
  	onToggle={handleToggle}
  	engineLabels={{ on: 'Sovereign', off: 'Rented' }}
	/>
    </div>
  )
}
