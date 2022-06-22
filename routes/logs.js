import express from 'express';
import { logs_controller } from '../controller/logs_controller.js';

const router = express.Router();

router.post('/', (req, res, next) => { logs_controller.create(req, res, next); });

router.get('/', (req, res, next) => { logs_controller.read(req, res, next); });

router.get('/:logId', (req, res, next) => { logs_controller.read_detail(req, res, next); });

router.delete('/:logId', (req, res, next) => { logs_controller.delete(req, res, next); });

export default router;
