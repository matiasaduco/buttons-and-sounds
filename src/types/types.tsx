import { UUID } from 'crypto'

export type AddSoundModalProps = {
  isOpen: boolean
  handleClose: () => void
}

export type ImgFile = {
  file: File
  name: string
  size: string
  preview: string
}

export type Sound = {
  id: UUID
  name: string
  urls?: string[]
  files?: File[]
  preview?: string
  category?: string
}

export type Preset = {
  id: UUID
  name: string
  music?: string
  sounds?: Sound[]
}

export type DBData = {
  presets: Preset[]
  sounds: Sound[]
}

export type DBTypes = Preset | Sound
