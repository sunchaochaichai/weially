<?php

class BaseController extends Phalcon\Mvc\Controller{
    
    
    public function publicPath(){
        $publicPath = "/weially/public/";
        return $publicPath;
    }
}