import { users_model } from '../model/users_model.js'

let users_controller = {};

users_controller.create = async(req, res, next) => {
	try {
		const result = await users_model.user_create(req);
		res.status(201).send(result);
	} catch (err) {
		next(err);
	}
}

users_controller.read = async(req, res, next) => {
	try {
		const result = await users_model.user_read(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

users_controller.read_detail = async(req, res, next) => {
	try {
		const result = await users_model.user_read_detail(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

users_controller.update = async(req, res, next) => {
	try {
		let result = await users_model.user_update(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

users_controller.delete = async(req, res, next) => {
	try {
		let result = await users_model.user_delete(req);
		res.status(200).send(result);
	} catch (err) {
		next(err);
	}
}

export {users_controller}
