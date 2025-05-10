import { Sound } from '@/types/types'
import { createContext } from 'react'

interface SoundDialogContextType {
  sound?: Sound
  updateSound: (sound: Sound) => void
  isOpen: boolean
  openDialog: (sound?: Sound) => void
  closeDialog: () => void
}

export const SoundDialogContext = createContext<SoundDialogContextType | null>(null)
