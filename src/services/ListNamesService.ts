import { getMongoRepository } from 'typeorm';

import Name from '../schemas/Name';

class ListNamesService {
  public async execute(): Promise<Name[]> {
    const nameReporitory = getMongoRepository(Name)

    const listNames = await nameReporitory.find()

    return listNames;
  }
}

export default ListNamesService;