<?php

class IndexController extends BaseController {

    public function indexAction() {

        $lifeTime = 2 * 3600;
        setcookie(session_name(), session_id(), time() + $lifeTime, "/");
        //写入session
        $_SESSION['myId'] = '23681873674764296';
        $myId = $_SESSION['myId'];

        //我的盟友        
        $friends = LinkEvent::getMyFriends($myId);
        ;

        //通过我的盟友查询出其他商户是否和我拥有相同的盟友     
        $endAlly = LinkEvent::sameFriends($friends, $myId);

        //所有的商户列表
        $endMerchants = LinkEvent::getAllMerchants($myId);

        print_r($endMerchants);
         $this->view->setVar("data", $endMerchants);
    }

}
