import db from "../utils/db_conn.js"

let terminal_grant_model = {};

terminal_grant_model.terminal_grant_create = async(req) => {
	let {user_id, terminal_id} = req.body;
	let query_string = `INSERT INTO terminal_grant (user_id, terminal_id, created) VALUES ('${user_id}', '${terminal_id}', NOW())`;
	let results;
	try {
		results = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return 'success terminal_grant create';
}

terminal_grant_model.terminal_grant_read = async(req) => {
	let query_string = `SELECT terminal_grant.id, terminal_grant.terminal_id, terminal_grant.user_id, terminals.address, terminals.port, terminals.protocol, users.email
							FROM terminal_grant
								LEFT JOIN terminals ON terminals.id = terminal_grant.terminal_id
									LEFT JOIN users ON users.id = terminal_grant.user_id`
	let rows, fields;
	try {
		[rows, fields] = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return rows;
}

terminal_grant_model.terminal_grant_read_detail = async(req) => {
	let query_string = `SELECT terminal_grant.id, terminal_grant.terminal_id, terminal_grant.user_id, terminals.address, terminals.port, terminals.protocol, users.email
							FROM terminal_grant
								LEFT JOIN terminals ON terminals.id = terminal_grant.terminal_id
									LEFT JOIN users ON users.id = terminal_grant.user_id
										WHERE terminal_grant.id=${req.params.terminal_grantId}`;
	let rows, fields;
	try {
		[rows, fields] = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return rows;
}

terminal_grant_model.terminal_grant_update = async(req) => {
	let {user_id, terminal_id} = req.body;
	let query_string = `UPDATE terminal_grant SET user_id='${user_id}', terminal_id='${terminal_id}', updated=NOW() WHERE id=${req.params.terminal_grantId}`;
	let results;
	try {
		results = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return 'success terminal_grant update';
}

terminal_grant_model.terminal_grant_delete = async(req) => {
	let query_string = `DELETE FROM terminal_grant WHERE id=${req.params.terminal_grantId}`;
	let results;
	try {
		results = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return 'success terminal_grant delete';
}

export {terminal_grant_model};
