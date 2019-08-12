var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "icecream_db"
});

connection.connect(function(err) {
  if (err) throw err;
  CreateProduct();
});

// insert data to iceCream table ----------------- CREATE---------------------------
function CreateProduct() {
  connection.query(
    "INSERT INTO iceCream SET ?",
    {
      flavor: "strawberry",
      price: 3.14,
      quantity: 5
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " product inserted!\n");
      updateProduct();
    }
  );
}
//------------------------------UPDATE-------------------
function updateProduct() {
  connection.query(
    "UPDATE iceCream SET ? WHERE ?",
    [
      {
        flavor: "vanilla",
        price: 2.25,
        quantity: 2
      },
      {
        flavor: "strawberry"
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products updated!\n");
      deleteProduct();
    }
  );
}
//----------------------DELETE---------------
function deleteProduct() {
  connection.query(
    "DELETE FROM iceCream WHERE ?",
    {
      flavor: "vanilla"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products deleted!\n");
      readProduct();
    }
  );
}
//-------------READ-------------------

function readProduct() {
  connection.query("SELECT * FROM iceCream", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}
