<?php
       session_start();
       require 'db_conn.php';


        if(isset($_POST['save'])){
            $Mname = $_POST["Mname"];
            $content = $_POST["content"];
            $quantity = $_POST["quantity"];
            $price = $_POST["price"];
            $sName = $_POST["sName"];
            $contact = $_POST["contact"];


           $mysqli->query("INSERT INTO medicines (Mname, content, quantity, price, sName, contact) VALUES ('$Mname', '$content', '$quantity', '$price', '$sName', '$contact')") or die($mysqli->error);        

           header('location:displayRecord.php');
           header('location:index.php');

        }else if(isset($_POST['submit'])){
            $id = $_SESSION['id'];
            $Mname = $_POST["Mname"];
            $content = $_POST["content"];
            $quantity = $_POST["quantity"];
            $price = $_POST["price"];
            $sName = $_POST["sName"];
            $contact = $_POST["contact"];

            
            $mysqli->query("UPDATE medicines SET Mname='$Mname', content='$content', quantity='$quantity', price='$price', sName='$sName', contact='$contact' WHERE id='$id'") or die($mysqli->error);        

           session_unset();
           session_destroy();
           header('location:displayRecord.php');
           header('location:index.php');
        }
    
?>