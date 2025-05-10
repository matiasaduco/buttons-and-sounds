import AddSoundDialog from '@/components/AddSoundDialog'
import ButtonBox from '@/components/ButtonBox'
import MusicPlayer from '@/components/MusicPlayer'
import usePreset from '@/contexts/hooks/usePresetContext'
import { Box } from '@mui/material'

const PresetPlayer = () => {
  const { selectedPreset } = usePreset()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <MusicPlayer music={selectedPreset?.music} />
      <ButtonBox sounds={selectedPreset?.sounds} />

      <AddSoundDialog />
    </Box>
  )
}

export default PresetPlayer
