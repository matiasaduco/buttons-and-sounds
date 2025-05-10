import { Box } from '@mui/material'
import SideBar from './pages/SideBar'
import PresetPlayer from './pages/PresetPlayer'
import PresetProvider from './contexts/providers/PresetProvider'
import SoundDialogProvider from './contexts/providers/SoundDialogProvider'

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <PresetProvider>
        <SoundDialogProvider>
          <SideBar />
          <PresetPlayer />
        </SoundDialogProvider>
      </PresetProvider>
    </Box>
  )
}

export default App
