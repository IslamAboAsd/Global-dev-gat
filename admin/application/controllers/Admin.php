<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

function __construct() {
		parent::__construct();
		$this -> load -> helper('url');
		
		$this -> load -> helper(array('form', 'url'));
		$this -> load -> library('form_validation');
		$this->load->helper('text');

		
	}
	
	public function index($segment = '')
	{


if($segment == 'admin01230123'){

$data['result'] = $this->db->get('users')->result();
		$this->load->view('admin_index.php',$data);
}else{
show_404();
}
	}
}
