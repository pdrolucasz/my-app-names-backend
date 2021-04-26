import { getMongoRepository } from 'typeorm';

import Name from '../schemas/Name';

class CreateNameService {
  public async execute(name: string): Promise<Name> {
    const nameReporitory = getMongoRepository(Name)

    const nameCreated = nameReporitory.create({
        name
    })

    await nameReporitory.save(nameCreated)

    return nameCreated;
  }
}

export default CreateNameService;