import { PresetContext } from '@/contexts/PresetContext'
import { useContext } from 'react'

const usePresetContext = () => {
  const context = useContext(PresetContext)
  if (!context) {
    throw new Error('usePreset debe usarse dentro de un PresetProvider')
  }
  return context
}

export default usePresetContext
