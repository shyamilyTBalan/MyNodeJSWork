import { Pool } from "pg"

export const CONFIG = {
  user: process.env.NS_DB_USER || "postgres",
  password: process.env.NS_DB_SECRET || "postgresql@123",
  host: process.env.NS_DB_HOST || "192.168.0.108",
  database: process.env.NS_DB_DB || "postgres",
  search_path: process.env.NS_DB_SCHEMA || "nsights",
  port: process.env.NS_API_PORT || '5433'

};

export const getPool = async () => {
  const pool = new Pool(CONFIG)
  const client = await pool.connect();
  return client;

}








