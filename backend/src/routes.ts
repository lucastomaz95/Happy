import{Router} from "express";
import multer from 'multer'
import OrphanagesController from './controllers/OrphanagesController'
import uploadConfig from './config/upload'


const upload = multer(uploadConfig);
const routes = Router()
//index, show, create, update, delete

routes.post('/orphanages', upload.array('images'), OrphanagesController.create)
routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id',OrphanagesController.show)


export default routes;