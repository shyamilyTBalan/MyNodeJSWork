
import { getPool } from "../services/db";

export const getAllUsers = async (req, res) => {
     const pool = await getPool();
     const Allusers = await pool.query("select * from users");
     return Allusers.rows;
};

export const getUserByUsername = async (login_name: string) => {
console.log(login_name)
     const pool = await getPool();
     const recordset = await pool.query("select * from users where login_name = '"+login_name+"'");
        return recordset.rows;
      };