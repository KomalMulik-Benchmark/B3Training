<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title"><strong>Add Medicine</strong></h3>
    </div>
    <div class="panel-body">
    <form method="post" action="<?php $_SERVER['PHP_SELF']; ?>">
			<div class="form-group">
                <label><b>Medicine Name</b></label>&nbsp;&nbsp;<span style="color: red;">*</span>
                <input type="text" name="Mname" class="form-control" value="<?php echo $viewmodel['Mname'];?>">
            </div>
            <div class="form-group">
                <label><b>Contents</b></label>&nbsp;&nbsp;<span style="color: red;">*</span>
                <input type="text" name="content" class="form-control" value="<?php echo $viewmodel['content'];?>">
            </div>
            <div class="form-group">
                <label><b>Quantity</b></label>&nbsp;&nbsp;<span style="color: red;">*</span>
                <input type="number" name="quantity" class="form-control" value="<?php echo $viewmodel['quantity'];?>">
            </div>
            <div class="form-group">
                <label for="price"><b>Price Per Unit</b></label>&nbsp;&nbsp;<span style="color: red;">*</span>
                <input type="number" name="price" class="form-control" value="<?php echo $viewmodel['price'];?>">

            </div>
            <div class="form-group">
                <label for="sName"><b>Supplier Name</b></label>&nbsp;&nbsp;<span style="color: red;">*</span>
                <input type="text" name="sName" class="form-control" value="<?php echo $viewmodel['sName'];?>">
            </div>
            <div class="form-group">
                <label for="contact"><b>Supplier's Contact</b></label>&nbsp;&nbsp;<span style="color: red;">*</span>
                <input type="number" name="contact" class="form-control" value="<?php echo $viewmodel['contact'];?>">
            </div>
    	<input type="submit" name="submit" class="btn btn-primary" value="submit">
    	<a class="btn btn-danger" href='<?php echo ROOT_PATH; ?>'>Cancel</a>
    </form>
    </div>
</div>