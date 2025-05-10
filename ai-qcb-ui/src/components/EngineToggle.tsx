// src/components/EngineToggle.tsx
import { useState } from 'react'
import '../styles/EngineToggle.css'

export default function EngineToggle({
  engineMode,
  onToggle,
  engineLabels = { on: 'Sovereign', off: 'Rented' }
}: {
  engineMode: string
  onToggle: () => void
  engineLabels?: { on: string; off: string }
}) {
  const [isHovered, setIsHovered] = useState(false)
  const isOn = engineMode === 'remote'

  return (
    <div
      className="toggle-container"
      onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="toggle-label toggle-label-left">
        {engineLabels.off}
      </span>
      <div className={`toggle-switch ${isOn ? 'on' : 'off'} ${isHovered ? 'hovered' : ''}`}></div>
      <span className="toggle-label toggle-label-right">
        {engineLabels.on}
      </span>
    </div>
  )
}

