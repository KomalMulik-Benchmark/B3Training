<?php
    class ShareModel extends Model
    {
        public function Index(){
            // $this->query('SELECT * FROM meds ORDER BY Mname DESC');
            // $rows = $this->resultSet();
            // return $rows;

            $post = filter_input_array(INPUT_POST,FILTER_SANITIZE_STRING);
    
            if(isset($post['search']))
            {
                if($post['search_data'] == '')
                {
                    $row = $this->allData();
                    return $row;
                }
                $this->query('SELECT * FROM meds WHERE Mname = :Mname OR content = :content');
                $this->bind(':Mname', $post['search_data']);
                $this->bind(':content',$post['search_data'] );
                $row = $this->resultSet();
                //print_r($row);die();
                return $row;
                }else{
                    $row = $this->allData();
                    //print_r($row);
                        return $row;
                    
                }
            }
            public function allData(){
                $this->query("select * from meds");
                $rows = $this->resultSet();
                return $rows;
            }
    
        

        public function add(){
            // sanitize post
        $get = filter_input_array(INPUT_GET, FILTER_SANITIZE_STRING);
        $post = filter_input_array(INPUT_POST,FILTER_SANITIZE_STRING);


          // update table
        if($get['id'] != NULL || $get['id'] != ''){
            
            if(isset($post['submit'])){

            // Validation
            if($post['Mname'] == ''|| $post['content'] == '' || $post['quantity'] == '' || $post['sName'] == '' || $post['contact'] == ''){
                Messages::setMsg("Please Fill All Fields!","error");
                $this->query('SELECT * FROM meds WHERE id = :id');
                $this->bind(':id', $get['id']);
                return $this->single();
            }

                $this->query('UPDATE meds SET Mname = :Mname, content = :content, quantity = :quantity, price = :price, sName = :sName, contact = :contact WHERE id = :id') ;
                $this->bind(':Mname', $post['Mname']);
                $this->bind(':content',$post['content'] );
                $this->bind(':quantity', $post['quantity']);
                $this->bind(':price', $post['price']);
                $this->bind(':sName', $post['sName']);
                $this->bind(':contact', $post['contact']);
                $this->bind(':id', $get['id']);
                $this->execute();

                
                header('Location: '.ROOT_URL.'shares');
                Messages::setMsg('Data successfully updated', 'success');
            }else {
                $this->query('SELECT * FROM meds WHERE id = :id');
                $this->bind(':id', $get['id']);
                $row = $this->single();
                if($row){
                    return $row; 
                } else {
                    header('Location: '.ROOT_URL.'shares');
                }
            }
        }else{
                if(isset($post['submit'])){

                    // Validation
                    if($post['Mname'] == ''|| $post['content'] == '' || $post['quantity'] == '' || $post['sName'] == '' || $post['contact'] == ''){
                        Messages::setMsg("Please Fill All Fields!","error");
                        return;
                    }
                    // insert into share table
                    $this->query('INSERT INTO meds (Mname, content, quantity, price, sName, contact) VALUES (:Mname, :content, :quantity, :price, :sName, :contact)') ;
                    $this->bind(':Mname', $post['Mname']);
                    $this->bind(':content',$post['content'] );
                    $this->bind(':quantity', $post['quantity']);
                    $this->bind(':price', $post['price']);
                    $this->bind(':sName', $post['sName']);
                    $this->bind(':contact', $post['contact']);
                    $this->execute();
                    //verify execute
                    if($this->lastInsertId()){
                        // redirect
                        Messages::setMsg('Data successfully added', 'success');
                        header('Location: '.ROOT_URL.'shares');
                    }
                }else{
                    $post['id']=$post['Mname']=$post['content']=$post['quantity']=$post['price']=$post['sName']=$post['contact']=null;
                    return $post;
                }
            }
        }

        public function delete(){
            // Sanitize
			$get = filter_input_array(INPUT_GET, FILTER_SANITIZE_STRING);
			$post = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

			if(isset($post['submit'])){
				$this->query('DELETE FROM meds WHERE id = :id');
				$this->bind(':id', $post['id']);
				$this->execute();

				Messages::setMsg('Post has been deleted', 'success');

                header('Location: '.ROOT_URL.'shares');
			}else {
				if($get['id'] != NULL || $get['id'] != ''){
					// Fetch post using GET parameter value
					$this->query('SELECT * FROM meds WHERE id = :id');
					$this->bind(':id', $get['id']);
					$row = $this->single();
	
					if($row){
						return $get['id'];
					} else {
						header('Location: '.ROOT_URL.'shares');
					}
				} else {
					header('Location: '.ROOT_URL.'shares');
				}
			}
        }

        
    }
    
?>