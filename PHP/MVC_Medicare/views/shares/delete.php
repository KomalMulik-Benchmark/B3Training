<div class="text-center bg-info" style="height:150px; padding-top: 2%">
	<div class="card-text">
		<p>Are you sure you want to delete this post?</p>
	</div>
	<form method="post" action="<?php $_SERVER['PHP_SELF']; ?>" style="padding-top: 1%">
		<input type="hidden" name="id" value="<?php echo $viewmodel; ?>">
		<input type="submit" name="submit" class="btn btn-danger" value="Yes, sure" />
		<a class="btn btn-info" href="<?php echo ROOT_PATH; ?>shares/">Never</a>
	</form>
</div>