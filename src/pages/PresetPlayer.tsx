import ButtonBox from '@/components/ButtonBox'
import MusicPlayer from '@/components/MusicPlayer'
import usePreset from '@/hooks/usePresetContext'
import { Box } from '@mui/material'

const PresetPlayer = () => {
  const { preset } = usePreset()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <MusicPlayer music={preset?.music} />
      <ButtonBox sounds={preset?.sounds} />
    </Box>
  )
}

export default PresetPlayer
