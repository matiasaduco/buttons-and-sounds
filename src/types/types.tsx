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
  id: number
  name: string
  urls?: string[]
  files?: File[]
  preview?: string
  category: string
}

export type Preset = {
  id: number
  name: string
  music?: string
  sounds?: Sound[]
}
