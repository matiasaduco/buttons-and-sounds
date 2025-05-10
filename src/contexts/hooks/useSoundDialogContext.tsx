import { useContext } from 'react'
import { SoundDialogContext } from '../SoundDialogContext'

const useSoundDialogContext = () => {
  const context = useContext(SoundDialogContext)
  if (!context) {
    throw new Error('usePreset debe usarse dentro de un PresetProvider')
  }
  return context
}

export default useSoundDialogContext
