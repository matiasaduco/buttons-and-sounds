import { SoundDialogContext } from '@/contexts/SoundDialogContext'
import { Sound } from '@/types/types'
import { ReactNode, useState } from 'react'

const SoundDialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [sound, setSound] = useState<Sound | undefined>(undefined)

  const openDialog = (selectedSound?: Sound) => {
    if (selectedSound) {
      setSound(selectedSound)
    }
    setIsOpen(true)
  }

  const closeDialog = () => {
    setSound(undefined)
    setIsOpen(false)
  }

  const updateSound = (updatedSound: Sound) => {
    setSound((prevSound) => ({
      ...prevSound,
      ...updatedSound,
    }))
  }

  return (
    <SoundDialogContext.Provider value={{ isOpen, openDialog, closeDialog, sound, updateSound }}>
      {children}
    </SoundDialogContext.Provider>
  )
}

export default SoundDialogProvider
