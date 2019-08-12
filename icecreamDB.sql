DROP DATABASE IF EXISTS icecream_db;

CREATE DATABASE icecream_db;

USE icecream_db;

CREATE TABLE iceCream (
    id INT auto_increment NOT NULL,
    flavor VARCHAR(45) NULL,
    price DECIMAL(10,2) NULL,
    quantity INT NULL,
    PRIMARY KEY (id)
);


