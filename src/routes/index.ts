import { Router } from 'express'

import namesRouter from './names.routes'

const routes = Router()

routes.use('/names', namesRouter);

export default routes
