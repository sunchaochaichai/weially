<?php

use \Phalcon\Mvc\Model\Validator\Uniqueness;

class LinkEvent extends Publics {

    function initialize() {
        
    }

    function beforeSave() {
        
    }

    function afterFetch() {
        
    }

    static function produce() {
        return new self();
    }

    function getSource() {
        return $this->getDI()->get('config')->database->prefix . 'link_event';
    }

    function validation() {
        return $this->validationHasFailed() == true ? false : true;
    }

    public static function getmos() {
        $value = mysqli_query(Publics::connect(), "select * from xone_link_event");
        $rtn = array();
        while (($row = mysqli_fetch_array($value, MYSQLI_ASSOC)))
            $rtn[] = $row;
        return $rtn;
    }

    public static function getMyFriends($myId) {

        $myFriend = mysqli_query(Publics::connect(), "select merchantuuid,allyuuid from xone_link_merchant where (merchantuuid='$myId' or allyuuid='$myId') and status='1'");

        while (($row = mysqli_fetch_array($myFriend, MYSQLI_ASSOC))) {
            $myFriends[] = $row;
        }

        foreach ($myFriends as $friend) {
            if ($friend['merchantuuid'] == $myId) {
                $ends = $friend['allyuuid'];
            }
            if ($friend['allyuuid'] == $myId) {
                $ends = $friend['merchantuuid'];
            }
            $friendArray[] = "'" . $ends . "'";
        }
        $friends = implode(',', $friendArray);

        return $friends;
    }

    public static function sameFriends($friends, $myId) {
        $allys = mysqli_query(Publics::connect(), "select a.merchantuuid,a.allyuuid,b.name,b.label,b.address,b.comment from xone_sys_merchant b left join xone_link_merchant a on a.allyuuid=b.uuid"
                . " where a.allyuuid in($friends) and a.merchantuuid!='$myId' and a.allystatus='1'");
        while (($row = mysqli_fetch_array($allys, MYSQLI_ASSOC))) {
            $ally[] = $row;
        }
        foreach ($ally as $keyally => $ay) {
            $endAlly[$ay['merchantuuid']][$keyally]['allyname'] = $ay['name'];
            $endAlly[$ay['merchantuuid']][$keyally]['merchantuuid'] = $ay['merchantuuid'];
            $endAlly[$ay['merchantuuid']][$keyally]['allyuuid'] = $ay['allyuuid'];
        }
        return $endAlly;
    }

    public static function getAllMerchants($myId) {
        $merchant = mysqli_query(Publics::connect(), "select uuid,name,label,address,comment from xone_sys_merchant where uuid !='$myId' order by created desc");
        while (($row = mysqli_fetch_array($merchant, MYSQLI_ASSOC))) {
            $merchants[] = $row;
        }
        foreach ($merchants as $keymer => $mer) {
            if (isset($endAlly[$mer['uuid']])) {
                $endMerchants[$mer['name']]['uuid'] = $mer['uuid'];
                $endMerchants[$mer['name']]['address'] = $mer['address'];
                $endMerchants[$mer['name']]['label'] = $mer['label'];
                $endMerchants[$mer['name']][] = $endAlly[$mer['uuid']];
            } else {
                $endMerchants[$mer['name']] = $mer;
            }
        }
        return $endMerchants;
    }

}
