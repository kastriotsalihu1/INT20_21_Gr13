<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if (isset($_POST["submit"])) {
    try {
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if ($check !== false) {
            echo "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            echo "File is not an image.";
            $uploadOk = 0;
        }
    } catch (Exception $e) {
        echo $e;
    }
}

// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}

// Check file size
if ($_FILES["fileToUpload"]["size"] > 5000000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}

// Allow certain file formats
if (
    $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif"
) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        require_once("../../dbConfig.php");
        $con = dbConfig::connect();

        session_start();
        // remove the last " AND "
        $lenda = $_POST['lenda'];
        $lloji = $_POST['lloji'];
        $file = $_FILES["fileToUpload"]["name"];
        $query = $con->prepare("INSERT INTO literature(name,subject,type,userid)values (:name, :subject, :type, :userid)");

        $query->bindValue(':name', $file);
        $query->bindValue(':subject', $lenda);
        $query->bindValue(':type', $lloji);
        $query->bindValue(':userid', $_SESSION['userid']);
        try {
            $query->execute();
        } catch (PDOException $e) {
            echo $e->getMessage();
        }

        echo "The file " . htmlspecialchars(basename($_FILES["fileToUpload"]["name"])) . " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
header("Location: ../../application_grades.php");
