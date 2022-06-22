import db from "../utils/db_conn.js"

let board_model = {};

board_model.board_create = async(req) => {
	let {title, description, author_id} = req.body;
	let query_string = `INSERT INTO board (title, description, created, author_id) VALUES ('${title}', '${description}', NOW(), ${author_id})`;
	let results;
	try {
		results = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return 'success board create';
}

board_model.board_read = async(req) => {
	let query_string = `SELECT * FROM board;`
	let rows, fields;
	try {
		[rows, fields] = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return rows;
}

board_model.board_read_detail = async(req) => {
	let query_string = `SELECT * FROM board where id=${req.params.boardId}`;
	let rows, fields;
	try {
		[rows, fields] = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return rows;
}

board_model.board_update = async(req) => {
	let {title, description} = req.body;
	let query_string = `UPDATE board SET title='${title}', description='${description}', updated=NOW() WHERE id=${req.params.boardId}`;
	let results;
	try {
		results = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return 'success board update';
}

board_model.board_delete = async(req) => {
	let query_string = `DELETE FROM board WHERE id=${req.params.boardId}`;
	let results;
	try {
		results = await db.query(query_string);
	} catch (err) {
		throw err;
	}
	return 'success board delete';
}

export {board_model};
