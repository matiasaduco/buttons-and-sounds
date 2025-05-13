import { DBData, DBTypes } from '@/types/types'
import { UUID } from 'crypto'
import { LocalStoragePreset } from 'lowdb/browser'

export default abstract class DataBase<T extends DBTypes> {
  static db = LocalStoragePreset<DBData>('db.json', { presets: [], sounds: [] })

  protected static generateID<T extends Omit<DBTypes, 'id'>>(obj: T): T {
    return {
      id: crypto.randomUUID(),
      ...obj,
    }
  }

  abstract create(obj: T): T
  abstract get(): T[]
  abstract update(id: T): T[]
  abstract delete(id: UUID): T[]
}
