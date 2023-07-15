import Database from 'better-sqlite3';
import Usuario from '../app/schemes/Usuario.js';

const db = new Database('database/database.sqlite');

db.exec(Usuario);

export default db;
