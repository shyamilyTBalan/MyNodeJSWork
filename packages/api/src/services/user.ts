
import { getPool } from "./db";

export const getAllUsers = async () => {
     const pool = await getPool();
     const result = await pool.query("select * from users");
     const { rows: allUsers } = result;
     return allUsers;
};

export const getUserByUsername = async (username: string) => {
     const pool = await getPool();
     const result = await pool.query(`select * from users where login_name = '${username}'`);
     const { rows: user } = result;
     return user;
};

export const getUserIdByUsername = async (username: string) => {
     const pool = await getPool();
     const result = await pool.query(`select user_id from users where login_name = '${username}'`);
     const { rows: user_Id } = result;
     return user_Id;
};