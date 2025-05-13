import { Preset } from '@/types/types'
import DataBase from './main'
import { UUID } from 'crypto'

export default class PresetsController extends DataBase<Preset> {
  create(preset: Preset): Preset {
    const presetWithId = PresetsController.generateID(preset)
    PresetsController.db.data.presets.push(presetWithId)
    PresetsController.db.write()
    return presetWithId
  }

  get(): Preset[] {
    return PresetsController.db.data.presets
  }

  update(preset: Preset): Preset[] {
    const updatedList = PresetsController.db.data.presets.map((p) => {
      if (p.id === preset.id) {
        return { ...preset }
      }
      return p
    })
    PresetsController.db.data.presets = updatedList
    PresetsController.db.write()
    return updatedList
  }

  delete(id: UUID) {
    const newList = PresetsController.db.data.presets.filter((s) => s.id !== id)
    PresetsController.db.data.presets = newList
    PresetsController.db.write()
    return newList
  }
}
