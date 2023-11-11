CREATE DATABASE classRecord;
USE classRecord;

CREATE TABLE orders(
orderId INT PRIMARY KEY,
orderDate VARCHAR(10) NOT NULL
);

INSERT INTO orders(orderId, orderDate)
VALUES(1, "01/10/1993")
(1, "01/10/1993")
(1, "01/10/1993");
(1, "01/10/1993");
(1, "01/10/1993");
(1, "01/10/1993");
(1, "01/10/1993");

SELECT *
FROM orders;

CREATE TABLE orderItem(
orderItemId INT,
orderId INT,
productName VARCHAR(10),
quantity INT,
price INT
);