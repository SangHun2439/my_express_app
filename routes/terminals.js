import express from 'express';
import { terminals_controller } from '../controller/terminals_controller.js';

const router = express.Router();

router.post('/', (req, res, next) => { terminals_controller.create(req, res, next); });

router.get('/', (req, res, next) => { terminals_controller.read(req, res, next); });

router.get('/:terminalsId', (req, res, next) => { terminals_controller.read_detail(req, res, next); });

router.put('/:terminalsId', (req, res, next) => { terminals_controller.update(req, res, next); });

router.delete('/:terminalsId', (req, res, next) => { terminals_controller.delete(req, res, next); });

export default router;
