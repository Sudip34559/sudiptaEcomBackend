import {Router} from 'express'
import { procuctCreateController,allProductController,productDeleteController,
    productEditController } from '../controllers/productController.js'
const router =Router()



router.route('/save').post(procuctCreateController)
router.route('/all').get(allProductController)
router.route('/:id').delete(productDeleteController)
router.route('/edit/:id').patch(productEditController)

export default router

