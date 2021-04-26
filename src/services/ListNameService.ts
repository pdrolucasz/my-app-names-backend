import { getMongoRepository } from 'typeorm'

import Name from '../schemas/Name'

class ListNameService {
  public async execute(id: string): Promise<Name> {
    const nameReporitory = getMongoRepository(Name)

    const listName = await nameReporitory.findOne(id)

    if(!listName) {
      throw new Error('Name not found')
    }

    return listName
  }
}

export default ListNameService