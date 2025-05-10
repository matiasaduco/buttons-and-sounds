// context/PresetContext.tsx
import { ChangeEvent, createContext } from 'react'
import { Preset } from '@/types/types'

interface PresetContextType {
  selectedPreset: Preset | null
  setSelectedPreset: (preset: Preset | null) => void
  updatePreset: ({ target }: ChangeEvent<HTMLInputElement>) => void
}

export const PresetContext = createContext<PresetContextType | null>(null)
