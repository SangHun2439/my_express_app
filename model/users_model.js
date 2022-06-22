import db from "../utils/db_conn.js"
import crypto from 'crypto'
import { promisify } from "util";

let users_model = {};

users_model.user_create = async(req) => {
	let {email, password, role_id} = req.body;
	password = crypto.createHash('sha256').update(password).digest('hex');
	try {
		let logic = async (conn) => {
			let create_user_query = `INSERT INTO users (email, password, created) VALUES ('${email}', '${password}', NOW())`;
			let [result] = await conn.query(create_user_query);
			let create_role_query = `INSERT INTO user_roles (user_id, role_id) VALUES ('${result.insertId}', '${role_id}')`;
			await conn.query(create_role_query);
		};
		await db.transaction(logic);
		return 'success user create';
	} catch (error) {
		throw error;
	}
}

users_model.user_read = async(req) => {
	let query_string = `SELECT id, email, password, created, updated FROM users`
	let rows, fields;
	try {
		[rows, fields] = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return rows;
}

users_model.user_read_detail = async(req) => {
	let query_string = `SELECT users.id, users.email, users.password, roles.rolename, users.created, users.updated
							FROM users
								LEFT JOIN user_roles ON users.id=user_roles.user_id
									LEFT JOIN roles ON user_roles.role_id=roles.id
										WHERE users.id=${req.params.userId}`;
	let rows, fields;
	try {
		[rows, fields] = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return rows;
}

users_model.user_update = async(req) => {
	let {email, password, role_id} = req.body;
	password = crypto.createHash('sha256').update(password).digest('hex');
	try {
		let logic = async (conn) => {
			let user_update_query = `UPDATE users SET email='${email}', password='${password}', updated=NOW() WHERE id=${req.params.userId}`;
			let role_update_query = `UPDATE user_roles SET role_id=${role_id} WHERE user_id=${req.params.userId}`;
			let tmp = [];
			tmp.push(conn.query(user_update_query));
			tmp.push(conn.query(role_update_query));
			await Promise.all(tmp);
		};
		await db.transaction(logic);
		return 'success user update';
	} catch (error) {
		throw error;
	}
}

users_model.user_delete = async(req) => {
	try {
		let logic = async (conn) => {
			let role_delete_query = `DELETE FROM user_roles WHERE user_id=${req.params.userId}`;
			let user_delete_query = `DELETE FROM users WHERE id=${req.params.userId}`;
			let tmp = [];
			tmp.push(conn.query(role_delete_query));
			tmp.push(conn.query(user_delete_query));
			await Promise.all(tmp);
		};
		await db.transaction(logic);
		return 'success user update';
	} catch (error) {
		throw error;
	}
}

export {users_model};
