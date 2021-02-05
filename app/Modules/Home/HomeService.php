<?php

namespace App\Modules\Home;
use App\Queries\UserQuery;
class HomeService
{
    use UserQuery;
    public function homeMethod(){
        return 'this is returning from home service';
    }
}
