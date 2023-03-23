import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);

carRoutes.get(
  '/',
  (req, res, next) => new CarController(req, res, next).find(),
);

carRoutes.get(
  '/:id',
  (req, res, next) => new CarController(req, res, next).findById(),
);

carRoutes.put(
  '/:id',
  (req, res, next) => new CarController(req, res, next).update(),
);

carRoutes.delete(
  '/:id',
  (req, res, next) => new CarController(req, res, next).delete(),
);

export default carRoutes;