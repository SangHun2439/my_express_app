import db from "../utils/db_conn.js"

let logs_model = {};

logs_model.logs_create = async(req) => {
	let {user_id, content} = req.body;
	let query_string = `INSERT INTO logs (user_id, content, created) VALUES (${user_id}, '${content}', NOW())`;
	let results;
	try {
		results = await db.query(query_string);
		return 'success logs create';
	} catch (err) {
		throw err;
	}
}

logs_model.logs_read = async(req) => {
	let query_string = `SELECT * FROM logs;`
	let rows, fields;
	try {
		[rows, fields] = await db.query(query_string);
		return rows;
	} catch (err) {
		throw err;
	}
}

logs_model.logs_read_detail = async(req) => {
	let query_string = `SELECT logs.user_id, logs.content, logs.created, users.email
							FROM logs
								LEFT JOIN users ON logs.user_id=users.id
									where logs.id=${req.params.logId}`;
	let rows, fields;
	try {
		[rows, fields] = await db.query(query_string);
		return rows;
	} catch (err) {
		throw err;
	}
}

logs_model.logs_delete = async(req) => {
	let query_string = `DELETE FROM logs WHERE id=${req.params.logId}`;
	let results;
	try {
		results = await db.query(query_string);
		return 'success logs delete';
	} catch (err) {
		throw err;
	}
}

export {logs_model};
