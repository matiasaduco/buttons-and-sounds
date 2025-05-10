import { Box } from '@mui/material'
import SideBar from './pages/SideBar'
import PresetPlayer from './pages/PresetPlayer'
import PresetProvider from './providers/PresetProvider'

function App() {
  return (
    <PresetProvider>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <PresetPlayer />
      </Box>
    </PresetProvider>
  )
}

export default App
