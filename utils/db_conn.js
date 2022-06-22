import mysql from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWD, DB_DATABASE, DB_MAX_CONN } = process.env;

// 클로저 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures
// DB 모듈화 : https://t-anb.tistory.com/53
// 싱글톤 패턴 : https://velog.io/@recordboy/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%93%88-%ED%8C%A8%ED%84%B4
// ES6 싱글톤 패턴 : https://moonscode.tistory.com/19

let db = (function() {
	let db_config = {
		"host":DB_HOST,
		"user":DB_USER,
		"password":DB_PASSWD,
		"database":DB_DATABASE,
		"connectionLimit":DB_MAX_CONN
	};
	let db_pool = mysql.createPool(db_config);
	return {
		getPool: () => { return db_pool; },

		getConn: async () => { return await db_pool.getConnection(async con => con)},

		query: async (query_string) => {
			const conn = await db_pool.getConnection(async con => con);
			try {
				await conn.beginTransaction();
				let result = await conn.query(query_string);
				await conn.commit();
				conn.release();
				return result;
			} catch (error) {
				await conn.rollback();
				conn.release();
				throw (error);
			}
		},

		transaction: async (logic) => {
			const conn = await db_pool.getConnection(async con => con);
			try {
				await conn.beginTransaction();
				let result = await logic(conn);
				await conn.commit();
				conn.release();
				return result;
			} catch (error) {
				await conn.rollback();
				conn.release();
				throw (error);
			}
		}
	}
})();

export default db;
