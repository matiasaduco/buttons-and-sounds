import { useState } from 'react'
import AddButtonModal from './AddSoundModal'
import { Button, Card, Box, CardContent, CardMedia, Typography, IconButton } from '@mui/material'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'

const ButtonBox = () => {
  const sounds: any[] = []
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {sounds.map((sound) => (
        <Button key={sound.id} variant='contained'>
          {sound.name}
        </Button>
      ))}

      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component='div' variant='h5'>
              Live From Space
            </Typography>
            <Typography variant='subtitle1' component='div' sx={{ color: 'text.secondary' }}>
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label='previous'>
              <SkipPreviousIcon />
            </IconButton>
            <IconButton aria-label='play/pause'>
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label='next'>
              <SkipNextIcon />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component='img'
          sx={{ width: 151 }}
          image='/static/images/cards/live-from-space.jpg'
          alt='Live from space album cover'
        />
      </Card>

      <Button variant='contained' onClick={() => setIsOpen(true)}>
        Add sound
      </Button>

      {isOpen && <AddButtonModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />}
    </>
  )
}

export default ButtonBox
