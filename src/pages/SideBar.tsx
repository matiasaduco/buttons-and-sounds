import usePresetContext from '@/contexts/hooks/usePresetContext'
import useSoundDialogContext from '@/contexts/hooks/useSoundDialogContext'
import usePresets from '@/hooks/usePresets'
import useSounds from '@/hooks/useSounds'
import { Delete, Edit } from '@mui/icons-material'
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
  const { sounds, handleDeleteSound } = useSounds()
  const { openDialog } = useSoundDialogContext()

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
        <ListItem disablePadding>
          <ListItemButton onClick={() => setSelectedPreset(null)}>
            <ListItemText primary='New Preset' />
          </ListItemButton>
        </ListItem>
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
            <ListItemButton>
              <ListItemText primary={sound.name} secondary={sound.category} />
            </ListItemButton>

            <ButtonGroup disableElevation aria-label='Basic button group'>
              <IconButton onClick={() => openDialog(sound)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => handleDeleteSound(sound.id)}>
                <Delete />
              </IconButton>
            </ButtonGroup>
          </ListItem>
        ))}
      </List>

      <ListItem disablePadding>
        <ListItemButton onClick={() => setSelectedPreset(null)}>
          <ListItemText primary='New Sound' />
        </ListItemButton>
      </ListItem>
    </Drawer>
  )
}

export default SideBar
