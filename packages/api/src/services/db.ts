import {pg,Pool,Client} from "pg";

import { Transaction } from "sequelize";

// TODO Move to ENV
export const CONFIG = {
  user: process.env.DWM_DB_USER,
  password: process.env.DWM_DB_SECRET,
  database: process.env.DWM_DB_SCHEMA,
  server: process.env.DWM_DB_HOST,
  port:process.env.DWM_API_PORT
};

export const pool = new Pool(CONFIG);
/*
/*export const createRequest = async () => {
  const pool = await new pg.connect(CONFIG);
  return pool.request();
};
/*
export const createTransaction = async () => {
  const pool = await new pg.connect(CONFIG);
  const transaction = await new pg.Transaction(pool);
  return transaction;
};*/
