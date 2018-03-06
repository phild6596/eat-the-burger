DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers 
(
    id INT(100) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(300) NOT NULL,
    devoured BOOLEAN DEFAULT false
);