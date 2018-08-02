//require node packages 
var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');

//setting to connnect the Bamazon database 
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazon_db',
})
var checkAndBuy = function () {

    connection.query('SELECT * FROM products', function (err, res) {
        if (err) {
            console.log(err)
        }
         //Then create a Table inside of that database called products.
        var table = new Table({
            //The products table should have each of the following columns:....
            //item_id, product_name, department_name, price (cost to customer),stock_quantity 
            head: ['id', 'product_name', 'department', 'price', 'stock_quantity']
        });

        //Populate this database with around 10 different products
        console.log("ITEMS AVAILABLE FOR SALE: ");
        console.log("===========================================");
        for (var i = 0; i < res.length; i++) {
            // push results to the table 
            table.push([res[i].id, res[i].item_name, res[i].department_name, res[i].price, res[i].stock_quantity]);


        }
        console.log("-----------------------------------------------");
    console.log(table.toString());
        //The app should then prompt users with two messages.

        //The first should ask them the ID of the product they would like to buy.
        inquirer.prompt([{
            name: 'itemId',
            type: 'input',
            message: 'Id of Item youd like trying purchse',
            validate: function (value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }

            }

        },
        // 2ND QUESTION 
        {
            name: 'howManyUnits',
            type: 'inpute',
            message: 'how many units of the product  would you like to buy?',
            validate: function (value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }

            }
        }


])

            .then(function (answer) {
                var chosenId = answer.itemId - 1
                var chosenProduct = res[chosenId]
                var chosenQuantity = answer.howManyUnits
                /// when quantiy is low restock quantity 
                   console.log("id",chosenId);
                   console.log("produts",chosenProduct);
                   console.log("quantity",chosenQuantity);
                if (chosenQuantity < res[chosenId].stock_quantity) {
                    console.log("Your total for: "  + "(" + chosenProduct.item_name + ")"  + " is: " + res[chosenId].price.toFixed() * chosenQuantity);
                    connection.query("UPDATE products SET ? WHERE ?", [{
                        stock_quantity: res[chosenId].stock_quantity - chosenQuantity
                    }, {
                        id: res[chosenId].id
                    }], function (err, res) {
                        //console.log(err);c
                        checkAndBuy();
                    });
                } else {
                    console.log("Sorry, insufficient Quanity at this time. All we have is " + res[chosenId].stock_quantity + " in our Inventory.");
                    checkAndBuy();
                }
            });
    });
    //second questions function gets called around here

}

  checkAndBuy ();
    

    
    









 


