
import { getPool } from "../services/db";
export const getAllUsers = async (req, res, pool) => {
     const Allusers = await pool.query("select * from users");
     console.log(Allusers)
     return Allusers;
};

export const getUserByUsername = async (login_name: string) => {
     const pool = await getPool();
     const user = await pool.query("select * from users where login_name =" + login_name);
     console.log(user)
     return user;
};

