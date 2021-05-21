<?php

class dbConfig
{
    public static function connect()
    {
        if (!defined('servername')) {
            define("servername", "localhost");
        }
        if (!defined('username')) {
            define("username", "root");
        }
        if (!defined('password')) {
            define("password", "");
        }
        if (!defined('dbname')) {
            define("dbname", "estudent");
        }
        try {
            $con = new PDO("mysql:host=localhost; dbname=estudent", username, password);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $con->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        }
    }
}
