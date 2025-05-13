import { Sound } from '@/types/types'
import DataBase from './main'
import { UUID } from 'crypto'

export default class SoundsController extends DataBase<Sound> {
  create(sound: Sound): Sound {
    const soundWithId = SoundsController.generateID(sound)
    SoundsController.db.data.sounds.push(soundWithId)
    SoundsController.db.write()
    return soundWithId
  }

  get(): Sound[] {
    return SoundsController.db.data.sounds
  }

  update(sound: Sound): Sound[] {
    const updatedList = SoundsController.db.data.sounds.map((s) => {
      if (s.id === sound.id) {
        return { ...sound }
      }
      return s
    })
    SoundsController.db.data.sounds = updatedList
    SoundsController.db.write()
    return updatedList
  }

  delete(id: UUID) {
    const newList = SoundsController.db.data.sounds.filter((s) => s.id !== id)
    SoundsController.db.data.sounds = newList
    SoundsController.db.write()
    return newList
  }
}
