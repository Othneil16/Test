-- create a database and don't forget to always terminate your command or query with a semi colon 
CREATE DATABASE theCurve;

USE theCurve;

CREATE TABLE theCurveStudents(
id INT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
departments_id INT 
);

INSERT INTO theCurveStudents( id, name, email, departments_id)
VALUES( 1, "EMMA", "emma@gmail.com", 1),
( 2, "victor", "victor@gmail.com", 2),
(3 ,"king", "king@gmail.com", 1),
( 4, "victory", "victory@gmail.com", 1),
(5, "ebube", "ebube@gmail.com", 2);

CREATE TABLE Departments(
id INT PRIMARY KEY,
department_name VARCHAR(50) 
);

INSERT INTO Departments( id, department_name)
VALUES(1, "BACKEND"),
( 2, "FRONTEND");

SELECT * FROM theCurveStudents;
SELECT * FROM Departments;

SELECT theCurveStudents.id, theCurveStudents.name, Departments.department_name FROM theCurveStudents
INNER JOIN Departments ON theCurveStudents.department_id = Departments.id

