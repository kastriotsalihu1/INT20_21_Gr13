<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link rel="stylesheet" href="styles/app_navigation.css" />
  <link rel="stylesheet" href="styles/app_store.css" />

  <link rel="stylesheet" href="styles/cardInformation.css" />

  <link href="dependencies/fontawesome/css/all.css" rel="stylesheet" />
  <!-- Simple css to remove the watermark from the hosting website -->
  <link rel="stylesheet" href="styles/removewatermark.css" />
  <!-- Simple css to remove the watermark from the hosting website -->
  <title>Store</title>
</head>

<body>
  <div id="mask"></div>

  <?php include 'application_header.php'; ?>

  <div id="container">
    <!-- side navigation menu -->
    <?php include 'application_sidebar.php'; ?>
    <main>
      <div id="latest" class="card">
        <div class="information">
          <div class="icon">
            <i class="fa fa-info" aria-hidden="true"></i>
          </div>
          <div class="contents">
            <h2>The latest products from the best vendors from around the world! (For legal reasons, that is a joke)</h2>
          </div>
        </div>
        <h2 class="cardtitle">Latest</h2>

        <div class="products">
        </div>

      </div>
      <div id="featured" class="card">
        <div class="information">
          <div class="icon">
            <i class="fa fa-info" aria-hidden="true"></i>
          </div>
          <div class="contents">
            <h2>The best deals, and the most curated products for you!</h2>
          </div>
        </div>
        <h2 class="cardtitle">Featured</h2>

        <div id="featuredcontainer">
        </div>

      </div>
      <div id="cart" class="card cardcontainer">
        <div class="information">
          <div class="icon">
            <i class="fa fa-info" aria-hidden="true"></i>
          </div>
          <div class="contents">
            <h2>This is your cart. The products you choose to buy will appear here, for further consideration.</h2>
          </div>
        </div>
      </div>
    </main>
  </div>

  <script src="scripts/jquery.js"></script>
  <script src="scripts/load.js"></script>
  <script src="scripts/navigation.js"></script>
  <script src="scripts/main.js"></script>
  <script src="scripts/store.js" type="module"></script>
  <script src="scripts/cardInformation.js"></script>
  <script src="scripts/notification.js"></script>
</body>

</html>