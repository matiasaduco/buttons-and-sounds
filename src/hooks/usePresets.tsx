import { Preset } from '@/types/types'
import { useEffect, useState } from 'react'

const usePresets = () => {
  const [presets, setPresets] = useState<Preset[]>([])

  const handleDeletePreset = (id: number) => {
    setPresets((prev) => prev.filter((preset) => preset.id !== id))
  }

  useEffect(() => {
    setPresets([
      {
        id: 1,
        name: 'Preset 1',
        music: 'yxkizuffS2s',
        sounds: [
          {
            id: 1,
            name: 'Sound 1',
            urls: ['https://example.com/sound1.mp3'],
            category: 'Category 1',
          },
          {
            id: 2,
            name: 'Sound 2',
            urls: ['https://example.com/sound2.mp3'],
            category: 'Category 2',
          },
          {
            id: 3,
            name: 'Sound 3',
            urls: ['https://example.com/sound3.mp3'],
            category: 'Category 3',
          },
          {
            id: 4,
            name: 'Sound 4',
            urls: ['https://example.com/sound4.mp3'],
            category: 'Category 4',
          },
        ],
      },
      { id: 2, name: 'Preset 2' },
      { id: 3, name: 'Preset 3' },
      { id: 4, name: 'Preset 4' },
      { id: 5, name: 'Preset 5' },
      { id: 6, name: 'Preset 6' },
      { id: 7, name: 'Preset 7' },
      { id: 8, name: 'Preset 8' },
      { id: 9, name: 'Preset 9' },
      { id: 10, name: 'Preset 10' },
    ])
  }, [])

  return { presets, setPresets, handleDeletePreset }
}

export default usePresets
