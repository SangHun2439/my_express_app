import express from 'express';
import { board_controller } from '../controller/board_controller.js';

const router = express.Router();

router.post('/', (req, res, next) => { board_controller.create(req, res, next); });

router.get('/', (req, res, next) => { board_controller.read(req, res, next); });

router.get('/:boardId', (req, res, next) => { board_controller.read_detail(req, res, next); });

router.put('/:boardId', (req, res, next) => { board_controller.update(req, res, next); });

router.delete('/:boardId', (req, res, next) => { board_controller.delete(req, res, next); });

export default router;
