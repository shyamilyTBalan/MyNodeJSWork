
import { getPool } from "./db";

export const getAllUsers = async () => {
     const pool = await getPool();
     const allUsers = await pool.query("select * from users");
     const { rows } = allUsers;
     return rows;
};

export const getUserByUsername = async (login_name: string) => {
     const pool = await getPool();
     const user = await pool.query(`select * from users where login_name = '${login_name}'`);
     const { rows } = user;
     return rows;
};

