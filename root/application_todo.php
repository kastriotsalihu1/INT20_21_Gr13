<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles/app_navigation.css" />
    <link rel="stylesheet" href="styles/app_todo.css" />
    <link rel="stylesheet" href="styles/cardInformation.css" />

    <!-- Simple css to remove the watermark from the hosting website -->
    <link rel="stylesheet" href="styles/removewatermark.css" />
    <!-- Simple css to remove the watermark from the hosting website -->

    <link href="dependencies/fontawesome/css/all.css" rel="stylesheet" />
    <title>To-do</title>
  </head>

  <body>
  <div id="mask"> </div>

    <?php include 'application_header.php';?>
    <div id="container">
    <?php include 'application_sidebar.php';?>

      <!-- content -->
      <main>
        <!-- to-do list -->
        <div id="todolist" class="card cardcontainer">
          <!--  information -->

          <div class="information">
            <div class="icon">
              <i class="fa fa-info" aria-hidden="true"></i>
            </div>
            <div class="contents">
              <h2>This is a dynamic list. You can add as many todos as you want and change their order based on their importance. Todos can be deleted with a click on their right side.</h2>
            </div>
          </div>
          <!--  information -->

          <div id="listheader">
            <h2 class="cardtitle">To-do List</h2>
            <form name="todoForm" method="post">
            <input type="text" name="todoinput" id="todoinput" placeholder="Add to list..." />
            </form>
          </div>
          <div class="cardcontent scrollwheel">
            <ul id="itemlist">
            <?php 
            require_once("dbConfig.php");
            $conn = dbConfig::connect();

            $sql = "SELECT * FROM todo WHERE userid = 0 ORDER BY id ASC";
            $stmt = $conn->query($sql);

            while ($row = $stmt->fetch()) {
              echo ('<li id="todo_' .$row["id"].  '" draggable="true">
              <span class="text todotext">' . $row["text"] . '</span
              ><span class="deletetodo"><i class="fa fa-trash"></i></span>
            </li>');
            }
            $conn = null;
            ?>
            </ul>
          </div>
          <div class="cardfooter">
            <input
              id="displaytodo"
              type="image"
              alt="Button to display the input."
              class="displayinput rotate"
              src="images/todo/add_circle_button.png"
            />
          </div>
        </div>
        <!-- to-do list -->

        <!-- notes -->
        <div class="card cardcontainer">
          <!--  information -->

          <div class="information">
            <div class="icon">
              <i class="fa fa-info" aria-hidden="true"></i>
            </div>
            <div class="contents">
              <h2>Using the 'plus' button you can add new notes to remember your daily tasks that need to be done. Notes can be swapped with drag and drop and deleted too.</h2>
            </div>
          </div>
          <!--  information -->

          <div id="noteheader">
            <h2 class="cardtitle">Notes</h2>
          </div>
          <div id="notecontainer" class="cardcontent scrollwheel">
            <div class="card note">
              <i class="closenote fas fa-times-circle"></i>
              <i class="dragnote fas fa-grip-horizontal"></i>
              <div class="notetitle scrollwheel">
                <h2 contenteditable="true" class="smalltitle">Thy Title!</h2>
              </div>
              <div class="notecontent scrollwheel">
                <p contenteditable="true" class="text">
                  I want to note something!
                </p>
              </div>
            </div>
          </div>
          <div id="notefooter">
            <div class="cardfooter">
              <input
                id="addnote"
                class="displayinput"
                alt="Button to add a note."
                type="image"
                src="images/todo/add_circle_button.png"
              />
            </div>
          </div>
        </div>

        <!-- notes -->
      </main>
    </div>

    <script src="scripts/jquery.js"></script>
    <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <script src="scripts/navigation.js"></script>
    <script src="scripts/load.js"></script>
    <script src="scripts/todo.js"></script>
    <script src="scripts/main.js"></script>
    <script src="scripts/cardInformation.js"></script>
  </body>
</html>
