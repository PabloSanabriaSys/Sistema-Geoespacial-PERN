import pg from 'pg'
import { user, host, database, password, port } from './config.js'
export const pool = new pg.Pool({
  user,
  host,
  database,
  password,
  port,
});