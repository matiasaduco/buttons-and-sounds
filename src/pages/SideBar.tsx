import usePresetContext from '@/hooks/usePresetContext'
import usePresets from '@/hooks/usePresets'
import useSounds from '@/hooks/useSounds'
import { Delete, Edit, PlayArrow } from '@mui/icons-material'
import {
  ButtonGroup,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'

const SideBar = () => {
  const { presets, handleDeletePreset } = usePresets()
  const { setSelectedPreset } = usePresetContext()
  const { sounds } = useSounds()

  return (
    <Drawer
      sx={{
        width: 350,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 350,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Presets
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setSelectedPreset(null)}>
            <ListItemText primary='Default' />
          </ListItemButton>
        </ListItem>

        {presets?.map((preset) => (
          <ListItem key={preset.id} disablePadding>
            <ListItemButton onClick={() => setSelectedPreset(preset)}>
              <ListItemText primary={preset.name} />
            </ListItemButton>

            <ButtonGroup disableElevation aria-label='Basic button group'>
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton onClick={() => handleDeletePreset(preset.id)}>
                <Delete />
              </IconButton>
            </ButtonGroup>
          </ListItem>
        ))}
      </List>

      <Divider />
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Sounds
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {sounds?.map((sound) => (
          <ListItem key={sound.id} disablePadding>
            <ListItemButton onClick={() => setSelectedPreset(sound)}>
              <ListItemText primary={sound.name} secondary={sound.category} />
            </ListItemButton>

            <ButtonGroup disableElevation aria-label='Basic button group'>
              <IconButton>
                <PlayArrow />
              </IconButton>
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton>
                <Delete />
              </IconButton>
            </ButtonGroup>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default SideBar
