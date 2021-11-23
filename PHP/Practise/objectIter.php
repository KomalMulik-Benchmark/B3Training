<?php
class PLANTS{
	public $plant1 = 'Marigold';
	public $plant2 = 'Aloe Vera';
	public $plant3 = 'Balloon Flower';

	public $plant4 = 'Orchid';
	private $plant5 = 'Spider Plant';

	function iterator(){
		foreach($this as $key => $value){
			print "$key => $value\n";
		}
	}

}

$plant = new PLANTS;

foreach($plant as $key => $value){
	print "$key => $value\n";
}

$plant->iterator();
?>