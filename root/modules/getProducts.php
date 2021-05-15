    <?php
    require_once("../dbConfig.php");
    $con = dbConfig::connect();

    $stmt = $con->query("SELECT * FROM product");
    $products = array();
    while ($row = $stmt->fetch()) {
        $product = array();
        $product["id"] = $row["id"];
        $product["name"] = $row["name"];
        $product["price"] = $row["price"];
        $product["color"] = $row["color"];
        $product["imageSrc"] = $row["imageSrc"];
        $product["discountPercentage"] = $row["discountPercentage"];

        $products[sizeof($products)] = $product;
    }

    echo json_encode($products);

    ?>
