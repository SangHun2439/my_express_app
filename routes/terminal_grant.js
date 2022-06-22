import express from 'express';
import { terminal_grant_controller } from '../controller/terminal_grant_controller.js';

const router = express.Router();

router.post('/', (req, res, next) => { terminal_grant_controller.create(req, res, next); });

router.get('/', (req, res, next) => { terminal_grant_controller.read(req, res, next); });

router.get('/:terminal_grantId', (req, res, next) => { terminal_grant_controller.read_detail(req, res, next); });

router.put('/:terminal_grantId', (req, res, next) => { terminal_grant_controller.update(req, res, next); });

router.delete('/:terminal_grantId', (req, res, next) => { terminal_grant_controller.delete(req, res, next); });

export default router;
