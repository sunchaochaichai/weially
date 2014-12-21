<?php
class SingController extends \Phalcon\Mvc\Controller
{

    public function indexAction()
    {
		 $allTickets = LinkEvent::getmos();
                 
		print_r($allTickets);
    }

}