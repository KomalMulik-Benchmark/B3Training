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

    <style type="text/css">
        .error{
            font-size: 15px;
            color: red;
        }
    </style>

</head>

<body>
    <?php require_once 'process.php';
        require 'displayRecord.php';

        // define variables and set to empty values
    $Mname = $content = $quantity = $price = $sName = $contact = "";

    // for error
    $MnameErr = $contentErr = $quantity = $priceErr = $sNameErr = $contactErr = "";
    ?>

    <div class="container">
        <div class="card mt-3" id="card1">
            <div class="card-body">
                <form method="post" action="process.php" id="myform" autocomplete="off">
                    <label for="Mname"><b>Medicine Name</b></label>
                    <input type="text" id="Mname" name="Mname" class="form-control" required />

                    <label for="content"><b>Contents</b></label>
                    <input type="text" id="content" name="content" class="form-control" required />

                    <label for="quantity"><b>Quantity</b></label>
                    <input type="number" id="quantity" name="quantity" class="form-control" required />

                    <label for="price"><b>Price Per Unit</b></label>
                    <input type="number" id="price" name="price" class="form-control" required />

                    <label for="sName"><b>Supplier Name</b></label>
                    <input type="text" id="sName" name="sName" class="form-control" required />

                    <label for="contact"><b>Supplier's Contact</b></label>
                    <input type="number" id="contact" name="contact" class="form-control" required />

                    <div class="form-group text-right">
                        <input type="submit" name="save" value="Submit" class="btn btn-success" />
                    </div>
                </form>


                <br>
            </div>
        </div>
    </div>

</body>

</html>