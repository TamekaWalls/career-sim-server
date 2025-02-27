DROP DATABASE IF EXISTS career_simulation_db;
CREATE DATABASE career_simulation_db;


\c career_simulation_db;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL
);

CREATE TABLE products(
   id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

CREATE TABLE reviews(
   id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  rating DECIMAL NOT NULL,
  product_id INT REFERENCES products(id) ON DELETE CASCADE
);

\i seed.sql