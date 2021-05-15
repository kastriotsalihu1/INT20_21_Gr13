<!DOCTYPE html>
<html>

<head>
</head>

<body>

    <?php
    $q = $_GET['q'];

    require_once("../dbConfig.php");
    $con = dbConfig::connect();

    $detailsJson = $con->query("SELECT * FROM product where id =" . $q)->fetch()['details'];
    $details = json_decode($detailsJson);

    foreach ($details as $property => $value) {
        echo "$property: $value" . "<br/>";
    }
    ?>

</body>

</html>