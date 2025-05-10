import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import img from '@public/no-image.png'
import { AddSoundModalProps, ImgFile } from '@/types/types'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const AddSoundModal = ({ isOpen, handleClose }: AddSoundModalProps) => {
  const [image, setImage] = useState(img)
  const [file, setFile] = useState<ImgFile>()

  const loadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files ? URL.createObjectURL(event.target.files[0]) : '')
  }

  const formatFileSize = (bytes: number, decimals = 1) => {
    if (bytes === 0) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    const size = parseFloat((bytes / Math.pow(k, i)).toFixed(dm))

    return `${size} ${sizes[i]}`
  }

  const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFile({
        file,
        name: file.name,
        size: formatFileSize(file.size),
        preview: URL.createObjectURL(file),
      })
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formJson = Object.fromEntries((formData).entries())
            const email = formJson.email
            console.log(email)
            handleClose()
          },
        },
      }}
    >
      <DialogTitle>Add Sound</DialogTitle>

      <DialogContent>
        <TextField
          id='name'
          margin='dense'
          name='name'
          label='Name'
          type='text'
          variant='standard'
          required
          fullWidth
        />

        <TextField
          id='link'
          margin='dense'
          name='link'
          label='Youtube Link'
          type='text'
          variant='standard'
          fullWidth
        />

        <span className='flex gap-2 mt-4 items-center'>
          <Button
            component='label'
            role={undefined}
            variant='contained'
            tabIndex={-1}
            className='w-[150px]'
            // startIcon={<CloudUploadIcon />}
          >
            Upload image
            <VisuallyHiddenInput type='file' onChange={loadImage} accept='image/*' />
          </Button>
          <img src={image} className='w-27 h-27 object-contain' />
        </span>

        <span className='flex gap-2 mt-4 items-center'>
          <Button
            component='label'
            role={undefined}
            variant='contained'
            tabIndex={-1}
            className='w-[150px]'
            // startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type='file' onChange={loadFile} />
          </Button>

          <div className='flex items-center gap-2'>
            <img
              src={file?.preview ?? image}
              className='w-27 h-27 object-contain'
              alt='File preview'
            />
            <div className='flex flex-col w-64'>
              <span className='text-sm text-gray-500 truncate'>{file?.name}</span>
              <span className='text-sm text-gray-500'>
                {file?.size ? `File size: ${file.size}` : ''}
              </span>
            </div>
          </div>
        </span>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type='submit'>Create</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddSoundModal
