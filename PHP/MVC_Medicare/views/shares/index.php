<div>
    <?php if(isset($_SESSION['is_logged_in'])) : ?>
    <a class="btn btn-success btn-share" href="<?php echo ROOT_PATH; ?>shares/add">Add Medicine</a>
    <?php endif; ?>
    
    <ul class="nav navbar-nav navbar-right">
        <form method="post" action="<?php $_SERVER['PHP_SELF']; ?>">
            <input type="search" name="search_data">
            <input type="submit" name="search" class="btn btn-info" value="Search">
        </form>
    </ul>


    <table class="table" id="table_data">
            <tr id="trow">
                <th>Medicine ID</th>
                <th>Medicine Name</th>
                <th>Contents</th>
                <th>Quantity</th>
                <th>Price per UNIT</th>
                <th>Supplier Name</th>
                <th>Supplier's Contact</th>
                <?php if(isset($_SESSION['is_logged_in'])) : ?>
                <th>Operations</th>
                <?php endif; ?>
            </tr>
            <tbody id="post_data">
            <?php foreach ($viewmodel as $value) : ?>
                    
                    <tr class="text-center">
                        <th><?php echo $value['id']; ?></th>
                        <td><?php echo $value['Mname']; ?></td>
                        <td><?php echo $value['content']; ?></td>
                        <td><?php echo $value['quantity']; ?></td>
                        <td><?php echo $value['price']; ?></td>
                        <td><?php echo $value['sName']; ?></td>
                        <td><?php echo $value['contact']; ?></td>  
                        <?php if(isset($_SESSION['is_logged_in'])) : ?>
                        <td>
                            <a class="btn btn-primary text-light" href="<?php echo ROOT_URL;?>shares/add<?php echo $value['id'];?>">Update</a>
                             <a class="btn btn-danger text-light" href="<?php echo ROOT_URL;?>shares/delete/<?php echo $value['id'];?>">Delete</a>
                        </td>
                        <?php endif; ?>
                    </tr>

                <?php endforeach; ?>
            </tbody>
   </table>
</div>

<script src="/assets/js/script.js"></script>