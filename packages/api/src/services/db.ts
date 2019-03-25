import { Pool } from "pg"

export const CONFIG = {
  user: process.env.NS_DB_USER,
  password: process.env.NS_DB_SECRET,
  host: process.env.NS_DB_HOST,
  database: process.env.NS_DB_DB,
  search_path: process.env.NS_DB_SCHEMA,
  port: process.env.NS_API_PORT as number | undefined

};

export const getPool = async () => {
  const pool = new Pool(CONFIG)
  const client = await pool.connect();
  return client;

}








