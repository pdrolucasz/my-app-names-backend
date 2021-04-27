import { Router } from 'express'

import ListNamesService from '../services/ListNamesService'
import CreateNameService from '../services/CreateNameService'
import ListNameService from '../services/ListNameService'

const namesRouter = Router()

namesRouter.get('/', async (request, response) => {
    const listNames = new ListNamesService();

    const names = await listNames.execute()
    
    return response.json(names)
})

namesRouter.post('/', async (request, response) => {
    const { name } = request.body

    const createName = new CreateNameService();

    const nameCreated = await createName.execute(name)
    
    return response.json(nameCreated)
})

namesRouter.get('/:id', async (request, response) => {
    const { id } = request.params

    const listName = new ListNameService();

    const name = await listName.execute(id)
    
    return response.json(name)
})

namesRouter.get('/pedro', async (request, response) => {
    return response.json({pedro: 'pedro'})
})

export default namesRouter
