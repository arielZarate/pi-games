const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const database = {
  user: DB_USER,
  password: DB_PASSWORD,
  localhost: DB_HOST,
  name_schema: DB_NAME,
  port: DB_PORT,
};

module.exports = database;
