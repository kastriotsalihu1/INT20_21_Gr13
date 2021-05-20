<?php 
session_start();
require_once("dbConfig.php");
$con= dbConfig::connect();

if(isset($_POST['addsong'])){

    $title= $_POST['title'];
    $artist= $_POST['artist'];
    $fotoError;
    $audioError;
    if(!is_dir("Assets/imgs")){
        mkdir("Assets/imgs");
    }

    if($_FILES['pic']['name']==""){
        echo "<div>Please enter files</div>";
        $fotoError="pasdsad";
        
    }

    if(!isset($fotoError)){
        $image = $_FILES['pic'];
        if($image && $image['tmp_name']){

            $image_path = "Assets/imgs/".randomString(7).'/'.$image['name'];

            mkdir(dirname($image_path));
            move_uploaded_file($image['tmp_name'], $image_path);
        }
        

    }
    if(!is_dir("Assets/audio")){
        mkdir("Assets/audio");
    }

    if($_FILES['audio']['name']==""){
        echo "<div>Please enter files</div>";
        $audioError="pasdsad";
        
    }

    if(!isset($audioError)){
        $audio = $_FILES['audio'];
        if($audio && $audio['tmp_name']){

            $audio_path = "Assets/audio/".randomString(7).'/'.$audio['name'];

            mkdir(dirname($audio_path));
            move_uploaded_file($audio['tmp_name'], $audio_path);
        }
    }


   


    $statement =$con->prepare("Insert into songs(title, artist, pic, audio, userid)
    values (:title, :artist, :pic, :audio, :id)");
    // $statement = $con->prepare($query);
    $statement->bindValue(':title',$title);
    $statement->bindValue(':artist',$artist);
    $statement->bindValue(':pic',$image_path);
    $statement->bindValue(':audio',$audio_path);
    $statement->bindValue(':id',$_SESSION['userid']);
    $statement->execute();

    header("Location: application_pomodoro.php");
   

    // echo '<pre>';
    // var_dump($songs);
    // echo '</pre>';


}

 function randomString($n)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $str = '';
        for ($i = 0; $i < $n; $i++) {
            $index = rand(0, strlen($characters) - 1);
            $str .= $characters[$index];
        }
        return $str;
    }



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <img src="<?php echo $songs[0]['pic'];?>" alt="">

</body>
</html>