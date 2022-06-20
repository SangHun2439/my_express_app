import db_pool from "../utils/db_conn.js"

let board_model = {};

board_model.board_create = async(req) => {
	let {title, description, author} = req.body;
	let query_string = `INSERT INTO board (title, description, created, author) VALUES ('${title}', '${description}', NOW(), '${author}');`;
	let results;
	try {
		results = await db_pool.query(query_string);
	} catch (err) {
		throw err;
	}
	return results;
}

board_model.board_read = async(req) => {
	let query_string = `SELECT * FROM board;`
	let rows, fields;
	try {
		[rows, fields] = await db_pool.query(query_string);
	} catch (err) {
		throw err;
	}
	return rows;
}

board_model.board_read_detail = async(req) => {
	let query_string = `SELECT * FROM board where id=${req.params.boardId};`;
	let rows, fields;
	try {
		[rows, fields] = await db_pool.query(query_string);
	} catch (err) {
		throw err;
	}
	return rows;
}

board_model.board_update = async(req) => {
	let {title, description, author} = req.body;
	let query_string = `UPDATE board SET title='${title}', description='${description}', author='${author}' WHERE id=${req.params.boardId};`;
	let results;
	try {
		results = await db_pool.query(query_string);
	} catch (err) {
		throw err;
	}
	return results;
}

board_model.board_delete = async(req) => {
	let query_string = `DELETE FROM board WHERE id=${req.params.boardId};`;
	let results;
	try {
		results = await db_pool.query(query_string);
	} catch (err) {
		throw err;
	}
	return results;
}

export {board_model};
