import { PresetContext } from '@/contexts/PresetContext'
import { Preset } from '@/types/types'
import { ChangeEvent, ReactNode, useState } from 'react'

const PresetProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPreset, setSelectedPreset] = useState<Preset | null>(null)

  const updatePreset = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const url = new URL(target.value)
    const videoId = url.searchParams.get('v') ?? ''
    // setSelectedPreset((prev) => ({
    //   ...prev,
    //   music: videoId,
    // }))
    videoId
  }

  return (
    <PresetContext.Provider value={{ selectedPreset, setSelectedPreset, updatePreset }}>
      {children}
    </PresetContext.Provider>
  )
}

export default PresetProvider
