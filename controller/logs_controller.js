import { logs_model } from '../model/logs_model.js'

let logs_controller = {};

logs_controller.create = async(req, res, next) => {
	try {
		const result = await logs_model.logs_create(req);
		res.status(201).send(result);
	} catch (err) {
		next(err);
	}
}

logs_controller.read = async(req, res, next) => {
	try {
		const result = await logs_model.logs_read(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

logs_controller.read_detail = async(req, res, next) => {
	try {
		const result = await logs_model.logs_read_detail(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

logs_controller.delete = async(req, res, next) => {
	try {
		let result = await logs_model.logs_delete(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

export {logs_controller}
