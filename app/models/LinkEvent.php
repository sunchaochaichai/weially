<?php

use \Phalcon\Mvc\Model\Validator\Uniqueness;

class LinkEvent extends Publics
{

    function initialize () {} function beforeSave () {} function afterFetch () {} static function produce () { return new self(); }
    function getSource () { return $this->getDI()->get('config')->database->prefix . 'link_event'; }
    function validation () { return $this->validationHasFailed()==true ? false : true; }

    public static function getmos()
    {
        $value = mysqli_query(Publics::connect(), "select * from xone_link_event");
        $rtn = array();
        while (($row = mysqli_fetch_array($value, MYSQLI_ASSOC)))
            $rtn[] = $row;
        return $rtn;
    }
    
    public static function getMyFriends($myId) {

        $myFriend = mysqli_query(Publics::connect(),"select merchantuuid,allyuuid from xone_link_merchant where (merchantuuid='$myId' or allyuuid='$myId') and status='1'");

        while (($row = mysqli_fetch_array($myFriend, MYSQLI_ASSOC))){
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

}
