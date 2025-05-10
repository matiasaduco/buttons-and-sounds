import usePreset from '@/contexts/hooks/usePresetContext'
import { Skeleton, TextField } from '@mui/material'
import YouTube from 'react-youtube'

const MusicPlayer = ({ music }: { music: string | undefined }) => {
  const { updatePreset } = usePreset()

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
        value={music}
        onChange={updatePreset}
      />

      {music ? (
        <YouTube videoId={music} opts={{ width: '560' }} />
      ) : (
        <Skeleton variant='rectangular' width={560} height={315} />
      )}
    </div>
  )
}

export default MusicPlayer
