<!DOCTYPE html>
<html>
<head>
	<title>File Upload Demonstration</title>
</head>
<body>
		<form action="<?php $_SERVER["PHP_SELF"];?>" method="post" enctype="multipart/form-data">
			Resume:<input type="file" name="upload" id="upload"><br>
			<input type="submit" name="submit">
		</form>

		<?php
			  	  $servername = "localhost";
                  $username = "root";
                  $password = "";
                  $db="Medicare";
          
                $mysqli = new mysqli($servername, $username, $password, $db) or die(mysqli_error($mysqli));

			if(isset($_POST['submit'])){
			$up = 1;
			$dir = "files/";
			$target_file = $dir.basename($_FILES['upload']['name']);

			//check file is less than 500kb
			if($_FILES['upload']['size'] > 100000)
			{
				echo "Sorry file is too large";
				$up = 0;
			}
			

			// upload file
			if($up == 0)
			{
				echo "Sorry, file not uploaded";
			}
			else
			{

				if(move_uploaded_file($_FILES['upload']['tmp_name'], $target_file))
				{
					$insert = $mysqli->query("INSERT into file_up(file_name) VALUES ('".$target_file."')");
            		if($insert){
					echo "the file ".htmlspecialchars(basename($target_file))." has been uploaded";
					}
				}
				else
				{
					echo "sorry file not uploaded";
				}
			}
		}

		?>
</body>
</html>