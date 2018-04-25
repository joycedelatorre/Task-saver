
DROP DATABASE IF EXISTS task_saver_db;
CREATE DATABASE task_saver_db;
USE task_saver_db;
CREATE TABLE tasks (
	id INT NOT NULL AUTO_INCREMENT,
	task VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);
INSERT INTO tasks (task) VALUES ('Pick up milk'), ('mow the lawn'), ('call john'),('cook dinner'),('do laundry');


INSTRUCTIONS TO SET UP DEPENDENCIES:

1. npm init 
2. npm install express --save
3. npm install express-handlebars --save
4. npm install mysql --save
5. npm install body-parser --save
