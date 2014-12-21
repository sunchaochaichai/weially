<?php
class IndexController extends Phalcon\Mvc\Controller
{

    public function indexAction()
    {
//       $allTickets = LinkEvent::getmos();
//                 
//		print_r($allTickets);
		print_r("hello world");exit;
         $lifeTime = 2 * 3600;
        setcookie(session_name(), session_id(), time() + $lifeTime, "/");
        //写入session
        $_SESSION['myId'] = '23681873674764296';
        $myId = $_SESSION['myId'];
        
        //我的盟友        
        $friends = LinkEvent::getMyFriends($myId);
        print_r($friends);
        //通过我的盟友查询出其他商户是否和我拥有相同的盟友        
//        $ally = $d->query("select a.merchantuuid,a.allyuuid,b.name,b.label,b.address,b.comment from xone_sys_merchant b left join xone_link_merchant a on a.allyuuid=b.uuid"
//                . " where a.allyuuid in($friends) and a.merchantuuid!='$myId' and a.allystatus='1'");
//        foreach ($ally as $keyally=>$ay) {
//            $endAlly[$ay['merchantuuid']][$keyally]['allyname'] = $ay['name'];
//            $endAlly[$ay['merchantuuid']][$keyally]['merchantuuid'] = $ay['merchantuuid'];
//            $endAlly[$ay['merchantuuid']][$keyally]['allyuuid'] = $ay['allyuuid'];
//        }
//        //所有的商户列表
//        $merchants = $d->query("select uuid,name,label,address,comment from xone_sys_merchant where uuid !='$myId' order by created desc");
//        
//        foreach ($merchants as $keymer => $mer) {
//            if (isset($endAlly[$mer['uuid']])) {
//                $endMerchants[$mer['name']]['uuid'] = $mer['uuid'];
//                $endMerchants[$mer['name']]['address'] = $mer['address'];
//                $endMerchants[$mer['name']]['label'] = $mer['label'];
//                $endMerchants[$mer['name']][] = $endAlly[$mer['uuid']];
//            } else {
//                $endMerchants[$mer['name']] = $mer;
//            }
//        }
////        print_r($endMerchants);
//        $this->assign('data', $endMerchants);
//        $this->display();       
    }

}