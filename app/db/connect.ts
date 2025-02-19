// Make sure to install the 'pg' package 
import * as schema from './schema';
import * as relations from './relations'
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from "pg";

const { Pool } = pg
const pool = new Pool({
    connectionString: process.env.DATABASE_URL!
})

export const db = drizzle({
    // connection: {
    //     connectionString: process.env.DATABASE_URL!
    // },
    // schema: schema,
    client: pool,
    schema: { ...schema, ...relations }

});