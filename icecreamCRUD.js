var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Leila@1357",
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
      console.log(res.affectedRows + "");
    }
  );
}
