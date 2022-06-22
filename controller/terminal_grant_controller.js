import { terminal_grant_model } from '../model/terminal_grant_model.js'

let terminal_grant_controller = {};

terminal_grant_controller.create = async(req, res, next) => {
	try {
		const result = await terminal_grant_model.terminal_grant_create(req);
		res.status(201).send(result);
	} catch (err) {
		next(err);
	}
}

terminal_grant_controller.read = async(req, res, next) => {
	try {
		const result = await terminal_grant_model.terminal_grant_read(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

terminal_grant_controller.read_detail = async(req, res, next) => {
	try {
		const result = await terminal_grant_model.terminal_grant_read_detail(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

terminal_grant_controller.update = async(req, res, next) => {
	try {
		let result = await terminal_grant_model.terminal_grant_update(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

terminal_grant_controller.delete = async(req, res, next) => {
	try {
		let result = await terminal_grant_model.terminal_grant_delete(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

export {terminal_grant_controller}
