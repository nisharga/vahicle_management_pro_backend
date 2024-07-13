// import { RoleEnumType } from '@prisma/client'
import express from 'express'
// import { vehicleController } from './controller'
import validateRequest from '../../middlewares/validateUser';
// import { vehicleValidation} from './validation';
import Auth from '../../middlewares/Auth';
import { inventoryRequestValidation } from './inventoryRequest.validation';
import { inventoryRequestControllers } from './invenToryRequest.controller';
// import { OfficeZodValidation } from './validation';
// import { officeCostController } from './controller';
// import { authControllers } from './controller'

const router = express.Router()


router.post('/',validateRequest(inventoryRequestValidation.createZodSchema),inventoryRequestControllers.createInventoryRequestController )
router.get('/',inventoryRequestControllers.getAllInventoryRequestController)
router.patch('/updateRequest',inventoryRequestControllers.updateInventoryRequestController)
router.get('/single/:id',inventoryRequestControllers.singleInventoryRequestController)
router.delete('/delete/:id',inventoryRequestControllers.deleteInventoryRequestController)
router.patch('/update/:id',inventoryRequestControllers.updateInventoryRequestController)


export const inventoryRequestRouter = router