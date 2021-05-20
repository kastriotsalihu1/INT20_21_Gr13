    <?php


    abstract class Sortable
    {
        abstract public function setSortAscending($sortAscending);
        abstract public function setSortProperty($sortProperty);

        function __constructor($sortableBy)
        {
            $this->_sortableBy = sort($sortableBy, SORT_STRING);
        }
        abstract protected function sortBy($property, $ascending);

        function string_sortBy($lhs, $rhs)
        {
            if ($this->sortAscending) {
                return strcmp($lhs[$this->sortProperty], $rhs[$this->sortProperty]);
            } else {
                return strcmp($rhs[$this->sortProperty], $lhs[$this->sortProperty]);
            }
        }
        function int_sortBy($lhs, $rhs)
        {
            if ($this->sortAscending) {
                return $lhs[$this->sortProperty] - $rhs[$this->sortProperty];
            } else {
                return $rhs[$this->sortProperty] -  $lhs[$this->sortProperty];
            }
        }
    }

    class ProductCatalog extends Sortable implements JsonSerializable
    {
        function __construct()
        {
            parent::__constructor(array("categoryName"));
            $this->productCategories = array();
        }

        function __destruct()
        {
            echo json_encode($this);
        }

        function addCategory($categoryName)
        {
            $this->productCategories[$categoryName] = new ProductCategory;
        }
        function getCategory($categoryName)
        {
            if (!array_key_exists($categoryName, $this->productCategories)) {
                $this->addCategory($categoryName);
            }
            return $this->productCategories[$categoryName];
        }

        function getProductCategories()
        {
            return $this->productCategories;
        }

        function setProductCategories($productCategories)
        {
            $this->productCategories = $productCategories;
        }

        function setSortAscending($sortAscending)
        {
            $this->sortAscending = $sortAscending;
        }

        function setSortProperty($sortProperty)
        {
            $this->sortProperty = $sortProperty;
        }

        function sortBy($property, $ascending)
        {
            if (!in_array("categoryName", $this->_sortableBy)) return;

            if ($ascending) {
                ksort($this->productCategories);
            } else {
                krsort($this->productCategories);
            }
        }

        public function jsonSerialize()
        {
            return array_unique($this->productCategories);
        }
    }

    class ProductCategory extends Sortable implements JsonSerializable
    {
        function __construct()
        {
            parent::__constructor(array("name", "price", "color"));
            $this->products = array();
        }

        function addProduct($product)
        {
            $this->products[] = $product;
        }

        function getProducts()
        {
            return $this->products;
        }

        public function jsonSerialize()
        {
            return array_unique($this->products);
        }

        function setSortAscending($sortAscending)
        {
            $this->sortAscending = $sortAscending;
        }

        function setSortProperty($sortProperty)
        {
            $this->sortProperty = $sortProperty;
        }

        function sortBy($property, $ascending)
        {
            $this->setSortProperty($property);
            $this->setSortAscending($ascending);
            if (is_string($this->sortProperty)) {
                usort($this->products, "parent::string_sortBy");
            } else {
                usort($this->products, "parent::int_sortBy");
            }
        }
    }

    require_once("../../dbConfig.php");
    $con = dbConfig::connect();

    $stmt = $con->query("SELECT * FROM product");
    $productsCatalog = new ProductCatalog();
    while ($row = $stmt->fetch()) {
        $product = array();
        $product["id"] = intval($row["id"]);
        $product["name"] = $row["name"];
        $product["price"] = doubleval($row["price"]);
        $product["color"] = $row["color"];
        $product["imageSrc"] = $row["imageSrc"];
        $product["discountPercentage"] = $row["discountPercentage"];

        $productsCatalog->getCategory($product["name"])->addProduct($product);
    }

    $productsCatalog->sortBy("value", FALSE);
    foreach ($productsCatalog->getProductCategories() as $productCategory) {
        $productCategory->sortBy("price", TRUE);
    }

    // products catalog destructor call

    ?>
