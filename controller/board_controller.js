import { board_model } from '../model/board_models.js'

let board_controller = {};

board_controller.create = async(req, res, next) => {
	try {
		const result = await board_model.board_create(req);
		res.status(201).send(result);
	} catch (err) {
		next(err);
	}
}

board_controller.read = async(req, res, next) => {
	try {
		const result = await board_model.board_read(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

board_controller.read_detail = async(req, res, next) => {
	try {
		const result = await board_model.board_read_detail(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

board_controller.update = async(req, res, next) => {
	try {
		let result = await board_model.board_update(req);
		res.status(204).send(result);
	} catch (err) {
		next(err);
	}
}

board_controller.delete = async(req, res, next) => {
	try {
		let result = await board_model.board_delete(req);
		res.status(204).send(result);
	} catch (err) {
		next(err);
	}
}

export {board_controller}
