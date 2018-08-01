DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
  USE bamazon_db;
  CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL, 
  price DECIMAL(10,2) NULL, 
  stock_quantity INT NULL,
    PRIMARY KEY (id)
  ); 
 
 INSERT INTO products (item_name, department_name, price, stock_quantity)
 VALUES (" oranges", "fresh produce", 5.99, 100); 
 
 INSERT INTO products (item_name, department_name, price, stock_quantity)
  VALUES (" oranges", "fresh produce", 5.99, 100);	 
  
   INSERT INTO products (item_name, department_name, price, stock_quantity)
 VALUES (" carrtos", "fresh produce", 5.1, 100); 
 
    
   INSERT INTO products (item_name, department_name, price, stock_quantity)
 VALUES ("pineapple", "fresh produce", 5.1, 100); 
 
   
   INSERT INTO products (item_name, department_name, price, stock_quantity)
 VALUES ("juices", "fresh produce", 5.1, 100); 
 
   
   INSERT INTO products (item_name, department_name, price, stock_quantity)
 VALUES ("ice tea", "beverages", 5.1, 100); 
   
   INSERT INTO products (item_name, department_name, price, stock_quantity)
 VALUES (" apples", "fresh produce", 5.1, 100); 
 
   
   INSERT INTO products (item_name, department_name, price, stock_quantity)
 VALUES (" apples", "fresh produce", 5.1, 100); 
 
   
   INSERT INTO products (item_name, department_name, price, stock_quantity)
 VALUES (" apples", "fresh produce", 5.1, 100); 
 
 SELECT * FROM products;
 




  