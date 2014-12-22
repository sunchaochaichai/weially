<?php
class IndexController extends BaseController
{

    public function indexAction()
    {
//echo __DIR__;
        $publicPath = $this->publicPath();
         
      
//        setcookie(session_name(), session_id(), time() + $lifeTime, "/");
//        //写入session
//        $_SESSION['myId'] = '23681873674764296';
//        $myId = $_SESSION['myId'];
//        
//        //我的盟友        
//        $friends = LinkEvent::getMyFriends($myId);
//      
         $this->view->setVar("path", $publicPath);
    }

}