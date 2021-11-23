<?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $db="Medicare";

        $mysqli = new mysqli($servername, $username, $password, $db) or die(mysqli_error($mysqli));


        // sql to create table
        //  $sql = "create table medicines(id SERIAL PRIMARY KEY, Mname VARCHAR(30) UNIQUE, content VARCHAR(30), quantity int, price int, sName VARCHAR(30), contact INT(10));";
        //  $sql->execute();

?>