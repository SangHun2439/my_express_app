import db from "../utils/db_conn.js"

let terminals_model = {};

terminals_model.terminals_create = async(req) => {
	let {address, port, protocol} = req.body;
	let query_string = `INSERT INTO terminals (address, port, protocol, created) VALUES ('${address}', '${port}', '${protocol}', NOW())`;
	let results;
	try {
		results = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return 'success terminals create';
}

terminals_model.terminals_read = async(req) => {
	let query_string = `SELECT * FROM terminals;`
	let rows, fields;
	try {
		[rows, fields] = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return rows;
}

terminals_model.terminals_read_detail = async(req) => {
	let query_string = `SELECT * FROM terminals where id=${req.params.terminalsId}`;
	let rows, fields;
	try {
		[rows, fields] = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return rows;
}

terminals_model.terminals_update = async(req) => {
	let {address, port, protocol} = req.body;
	let query_string = `UPDATE terminals SET address='${address}', port='${port}', protocol='${protocol}', updated=NOW() WHERE id=${req.params.terminalsId}`;
	let results;
	try {
		results = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return 'success terminals update';
}

terminals_model.terminals_delete = async(req) => {
	let query_string = `DELETE FROM terminals WHERE id=${req.params.terminalsId}`;
	let results;
	try {
		results = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return 'success terminals delete';
}

export {terminals_model};
