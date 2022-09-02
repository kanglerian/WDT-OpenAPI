require('dotenv').config()
const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
module.exports =
{
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": "mnmwusdxpzhktj",
    "password": "9ce337825961cd6c806fa7b5cc411cbdced5134196ba4a13d7719aa7e3258873",
    "database": "dce2do5teqa7i2",
    "host": "ec2-44-210-36-247.compute-1.amazonaws.com",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": false
      }
    }
  }
}
