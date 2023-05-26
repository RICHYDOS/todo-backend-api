import dotenv from "dotenv";
dotenv.config();
export const setting = {
  "development": {
    "username": process.env.MYSQL_USER as string,
    "password": process.env.MYSQL_PASSWORD as string,
    "database": process.env.MYSQL_DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql",
  },
}