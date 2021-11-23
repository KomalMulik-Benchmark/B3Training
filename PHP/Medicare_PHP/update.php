<?php
        require 'db_conn.php';
        $id = $_GET['updateid'];
        // echo $id;
        $result = $mysqli->query("SELECT * FROM medicines WHERE id='$id'");
        // echo '$result';
        $row = mysqli_fetch_assoc($result);
        $Mname = $row["Mname"];
        $content = $row["content"];
        $quantity = $row["quantity"];
        $price = $row["price"];
        $sName = $row["sName"];
        $contact = $row["contact"];

        session_start();
        $_SESSION['id'] = $_GET['updateid'];
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <title>Medicare</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
    <link rel="stylesheet" href="styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">

</head>

<body>
    <center>
    <div class="container">
        <div class="card mt-3" id="card1">
            <div class="card-body">
                <form method="post" action="process.php" id="myform" autocomplete="off">
                    <label for="Mname"><b>Medicine Name</b></label>
                    <input type="text" id="Mname" name="Mname" class="form-control" value=<?php echo $Mname;?> required />

                    <label for="content"><b>Contents</b></label>
                    <input type="text" id="content" name="content" class="form-control" value=<?php echo $content;?> required />

                    <label for="quantity"><b>Quantity</b></label>
                    <input type="number" id="quantity" name="quantity" class="form-control" value=<?php echo $quantity;?> required />

                    <label for="price"><b>Price Per Unit</b></label>
                    <input type="number" id="price" name="price" class="form-control" value=<?php echo $price;?> required />

                    <label for="sName"><b>Supplier Name</b></label>
                    <input type="text" id="sName" name="sName" class="form-control" value=<?php echo $sName;?> required />

                    <label for="contact"><b>Supplier's Contact</b></label>
                    <input type="number" id="contact" name="contact" class="form-control" value=<?php echo $contact?> required />

                    <div class="form-group text-right">
                        <input type="submit" name="submit" value="Update" class="btn btn-success" />
                        <!-- <button class="btn btn-success" class="text-light">Update</a></button> -->
                    </div>
                  <center>

                </form>

                <br>
            </div>
        </div>
    </div>
</body>

</html>