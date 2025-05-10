import { Sound } from '@/types/types'
import { useEffect, useState } from 'react'

const useSounds = () => {
  const [sounds, setSounds] = useState<Sound[]>([])

  const handleDeleteSound = (id?: number) => {
    setSounds((prevSounds) => prevSounds.filter((sound) => sound.id !== id))
  }

  useEffect(() => {
    setSounds([
      {
        id: 1,
        name: 'Sound 1',
        urls: ['https://example.com/sound1.mp3'],
        category: 'Category 1',
      },
    ])
  }, [])

  return { sounds, setSounds, handleDeleteSound }
}

export default useSounds
