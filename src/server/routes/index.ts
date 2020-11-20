import * as express from "express"
import { Router } from "express"
import blogsRouter from '../routes/blogs'
import authorsRouter from '../routes/authors'
import btRouter from '../routes/blogtags'

const router = Router()

router.use('/blogs', blogsRouter)
router.use('/authors', authorsRouter)
router.use('/tags', btRouter)

export default router