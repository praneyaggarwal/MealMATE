import { useState } from 'react'
import StaffScreen, { type Screen } from './StaffScreen'

function App() {
  const [screen, setScreen] = useState<Screen>('nameGate')

  return <StaffScreen screen={screen} onNavigate={setScreen} />
}

export default App
