import { terminals_model } from '../model/terminals_model.js'

let terminals_controller = {};

terminals_controller.create = async(req, res, next) => {
	try {
		const result = await terminals_model.terminals_create(req);
		res.status(201).send(result);
	} catch (err) {
		next(err);
	}
}

terminals_controller.read = async(req, res, next) => {
	try {
		const result = await terminals_model.terminals_read(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

terminals_controller.read_detail = async(req, res, next) => {
	try {
		const result = await terminals_model.terminals_read_detail(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

terminals_controller.update = async(req, res, next) => {
	try {
		let result = await terminals_model.terminals_update(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

terminals_controller.delete = async(req, res, next) => {
	try {
		let result = await terminals_model.terminals_delete(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

export {terminals_controller}
