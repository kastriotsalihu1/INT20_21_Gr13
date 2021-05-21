<?php
session_start();
require_once("dbConfig.php");
$con= dbConfig::connect();

//GET 
$lenda = ($_GET['lenda']);
$userid=$_SESSION['userid'];
$sql =$con->prepare("SELECT 
     subject,name,type,submitDate FROM literature
     WHERE subject= '".$lenda."' and userid=$userid"
     );
$sql->execute();

echo "<table>
<tr class='thstyle'>
  <th>subject</th>
  <th>name</th>
  <th>type</th>
  <th>submitDate</th>
</tr>";

while($row = $sql->fetch(PDO::FETCH_BOTH)){
echo "<tr>";
echo "<td>" .$row['subject']  . "</td>";
echo "<td>" . $row['name']  . "</td>";
echo "<td>" . $row['type'] . "</td>";
echo "<td>" . $row['submitDate'] . "</td>";
echo "</tr>";
}
echo "</table>";

$conn = null;
?>