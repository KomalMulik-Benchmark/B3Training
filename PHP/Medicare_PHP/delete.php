<?php
    include 'db_conn.php';
    if(isset($_GET['deleteid'])){
        $id = $_GET['deleteid'];

        $result = $mysqli->query("DELETE FROM medicines WHERE id=$id") or die($mysqli->error); 

        if($result){
             //echo "Deleted Successfully";
            header('location:displayRecord.php');
            header('location:index.php');
        }
    }
?>