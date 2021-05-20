


<?php

require_once("dbConfig.php");
$con = dbConfig::connect();

// Execute the query to create the database
$createDatabaseSQL =
    "CREATE database  estudent";

try {
    $con->exec($createDatabaseSQL);
} catch (PDOException $e) {
    echo $e->getMessage();
}

echo "<br/>";

// Execute the query to create the "user" table
$createUserTable =
    "CREATE TABLE  user
    (
        userid INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(30) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(50),
        firstname VARCHAR(30) NOT NULL,
        lastname VARCHAR(30) NOT NULL,
        phonenumber VARCHAR(15) NOT NULL,
        country VARCHAR(30) NOT NULL,
        address VARCHAR(200),
        data_regjistrimit TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

try {
    $con->exec($createUserTable);
} catch (PDOException $e) {
    echo $e->getMessage();
}

echo "<br/>";

// Execute the query to create the "product" table
$createProductTable =
    "CREATE TABLE  product
    (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL,
        price DECIMAL(5,2),
        color VARCHAR(10),
        details JSON,
        imageSrc VARCHAR(200),
        discountPercentage DECIMAL(3,2) UNSIGNED
    )";

try {
    $con->exec($createProductTable);
} catch (PDOException $e) {
    echo $e->getMessage();
}

echo "<br/>";

// Execute the query to create the "note" table
$createNoteTable =
    "CREATE TABLE note(
        id INTEGER PRIMARY KEY,
        userid INT(6) UNSIGNED,
        orderIndex SMALLINT,
        title VARCHAR(150) NOT NULL,
        text VARCHAR(1000) NOT NULL,
        FOREIGN KEY (userid) 
            REFERENCES user(id)
        )";

try {
    $con->exec($createNoteTable);
} catch (PDOException $e) {
    echo $e->getMessage();
}

echo "<br/>";

// Execute the query to create the "motivation" table
$createNoteTable =
    "CREATE TABLE motivation
    (
        id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        content VARCHAR(250) NOT NULL UNIQUE
    )";

try {
    $con->exec($createNoteTable);
} catch (PDOException $e) {
    echo $e->getMessage();
}

echo "<br/>";


?>