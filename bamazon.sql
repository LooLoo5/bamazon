CREATE DATABASE bamazon

USE bamazon

CREATE TABLE products
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(255) NOT NULL,
price INT
stock_quantity INT