import express from 'express';
import { users_controller } from '../controller/users_controller.js';

const router = express.Router();

router.post('/', (req, res, next) => { users_controller.create(req, res, next); });

router.get('/', (req, res, next) => { users_controller.read(req, res, next); });

router.get('/:userId', (req, res, next) => { users_controller.read_detail(req, res, next); });

router.put('/:userId', (req, res, next) => { users_controller.update(req, res, next); });

router.delete('/:userId', (req, res, next) => { users_controller.delete(req, res, next); });

export default router;
