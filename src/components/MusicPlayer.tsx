import { Skeleton, TextField } from '@mui/material'
import { useState } from 'react'

const MusicPlayer = () => {
  const [url, setUrl] = useState('')

  const transformUrl = (input: string) => {
    const match = input.match(/v=([\w-]+)/)
    return match ? `https://www.youtube.com/embed/${match[1]}` : ''
  }

  return (
    <div>
      <h1 className='text-4xl mb-2 text-center'>Music Player</h1>

      <TextField
        id='name'
        margin='dense'
        name='name'
        label='YouTube link...'
        type='text'
        onChange={(e) => setUrl(transformUrl(e.target.value))}
        fullWidth
      />

      {url ? (
        <iframe
          width='560'
          height='315'
          src={url}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      ) : (
        <Skeleton variant='rectangular' width={560} height={315} />
      )}
    </div>
  )
}

export default MusicPlayer
