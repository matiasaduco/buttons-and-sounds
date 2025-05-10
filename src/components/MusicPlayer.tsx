import { Skeleton, TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import YouTube from 'react-youtube'

const MusicPlayer = () => {
  const [videoId, setVideoId] = useState<string>('')

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const url = new URL(target.value)
    const videoId = url.searchParams.get('v') ?? ''
    setVideoId(videoId)
  }

  return (
    <div className='flex flex-col items-center w-full shadow-lg p-5 pb-10'>
      <h1 className='text-4xl mb-2 text-center'>Music Player</h1>

      <TextField
        id='name'
        style={{ width: '560px' }}
        margin='dense'
        name='name'
        label='YouTube link...'
        type='text'
        onChange={handleChange}
      />

      {videoId ? (
        <YouTube videoId={videoId} opts={{ width: '560' }} />
      ) : (
        <Skeleton variant='rectangular' width={560} height={315} />
      )}
    </div>
  )
}

export default MusicPlayer
