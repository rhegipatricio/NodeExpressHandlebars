### Schema

CREATE DATABASE ;

USE parties_db;

CREATE TABLE clients
(
	id int NOT NULL AUTO_INCREMENT,
	client_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE parties
(
	id int NOT NULL AUTO_INCREMENT,
	 varchar(255) NOT NULL,
	 varchar(255) NOT NULL,
	 int NOT NULL,
	client_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES clients(id)
);
