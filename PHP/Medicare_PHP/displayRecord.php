<?php
    include 'db_conn.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="styles.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
<!-- <div class="container"> -->
<nav class="navbar navbar-dark bg-dark">

<a class="navbar-brand" id="nav" href="#">Medicare</a>

<div class="card mt-4">
    <div class="form-group-search">
        <form action="" method="POST" autocomplete="off">
        <input type="text" id="search" name="search" class="form-control" value="<?php if(isset($_POST['search'])){echo $_POST['search']; } ?>" placeholder="search Medicine here..." />
        <button type="submit" class="btn btn-primary">Search</button>
        </form>
        
    </div>
</div>
</nav>
<div class="card mt-3" id="card2">
        <table class="table">
            <tr id="trow">
                <th>Sr.No.</th>
                <th id="1" data_column="Mname" data-order="desc">Medicine Name</th>
                <th id="2" data-column="content" data-order="desc">Contents </th>
                <th id="3" data-column="quantity" data-order="desc">Quantity</th>
                <th id="4" data-column="price" data-order="desc">Price per UNIT</th>
                <th id="5" data-column="sName" data-order="desc">Supplier Name </th>
                <th id="6" data-column="contact" data-order="desc">Supplier's Contact </th>
                <th>Operations</th>
            </tr>
            <tbody id="post_data">
        
                <?php

                if(isset($_POST['search'])){
                    $filtervalues = $_POST['search'];
                    $result = $mysqli->query("SELECT * FROM medicines WHERE CONCAT(Mname,content,sName) LIKE '%$filtervalues%'") or die($mysqli->error);
                    
                }else{
                   $result = $mysqli->query("SELECT * FROM medicines") or die($mysqli->error); 
                }
                  
                if($result){

                    while($row = mysqli_fetch_assoc($result)){
                        $id = $row["id"];
                        $Mname = $row["Mname"];
                        $content = $row["content"];
                        $quantity = $row["quantity"];
                        $price = $row["price"];
                        $sName = $row["sName"];
                        $contact = $row["contact"];

                        echo '<tr>
                        <th scope="row">'.$id.'</th>
                        <td>'.$Mname.'</td>
                        <td>'.$content.'</td>
                        <td>'.$quantity.'</td>
                        <td>'.$price.'</td>
                        <td>'.$sName.'</td>
                        <td>'.$contact.'</td>
                        <td>
                        <button class="btn btn-primary"><a href="update.php?updateid='.$id.'" class="text-light">Update</a></button>
                        <button class="btn btn-danger"><a href="delete.php?deleteid='.$id.'"  onclick="return checkdelete()" class="text-light">Delete</a></button>
                        </td>
                        </tr>';
                    }
                   

                }
                
                ?> 
                
            </tbody>
        </table>
    </div>
        
<script>
    checkdelete = ()=>{
        return confirm('Are you sure to Delete this Record?');
    }
</script>
</body>
</html>
