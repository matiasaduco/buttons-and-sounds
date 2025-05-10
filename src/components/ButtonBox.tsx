import { useState } from 'react'
import {
  Button,
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Select,
  MenuItem,
} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { Sound } from '@/types/types'
import add_sound_icon from '@public/add-sound.svg'
import { Delete, Edit, Shuffle } from '@mui/icons-material'
import useSoundDialogContext from '@/contexts/hooks/useSoundDialogContext'

const ButtonBox = ({ sounds }: { sounds: Sound[] | undefined }) => {
  const { openDialog } = useSoundDialogContext()
  const [selectedSound, setSelectedSound] = useState<File | string>()

  const handleDelete = (id: number) => {
    console.log('Delete button clicked', id)
  }

  const handleChangeSound = () => {
    setSelectedSound(sounds?.[0].urls?.[0] || sounds?.[0].files?.[0])
  }

  return (
    <div className='w-full p-3 overflow-auto'>
      <h2 className='text-3xl my-5 text-center'>Soundboard</h2>

      <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3 items-center'>
        {sounds?.map((sound) => (
          <Card key={sound.id} sx={{ display: 'flex', position: 'relative' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component='div' variant='h5'>
                  {sound.name}
                </Typography>
                <Typography variant='subtitle1' component='div' sx={{ color: 'text.secondary' }}>
                  {sound.category}
                </Typography>
              </CardContent>

              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label='play/pause'>
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label='random'>
                  <Shuffle />
                </IconButton>

                <Select
                  value={selectedSound}
                  defaultValue={sound.files?.[0] || sound.urls?.[0]}
                  onChange={handleChangeSound}
                  displayEmpty
                  fullWidth
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {sound.files?.map((file) => (
                    <MenuItem>{file.name}</MenuItem>
                  ))}

                  {sound.urls?.map((url) => (
                    <MenuItem>{url}</MenuItem>
                  ))}

                  <MenuItem>Empty</MenuItem>
                </Select>
              </Box>
            </Box>
            <CardMedia component='img' sx={{ width: 151 }} image={sound.preview} alt={sound.name} />

            <div className='absolute top-0 right-0'>
              <IconButton onClick={() => openDialog(sound)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => handleDelete(sound.id)}>
                <Delete />
              </IconButton>
            </div>
          </Card>
        ))}

        <Card sx={{ height: 154 }}>
          <Button onClick={() => openDialog()}>
            <img src={add_sound_icon} />
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default ButtonBox
