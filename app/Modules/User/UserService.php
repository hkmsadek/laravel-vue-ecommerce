<?php

namespace App\Modules\User;
use App\Queries\UserQuery;
class UserService
{
    use UserQuery;
    public function userMethod(){
        return 'this is returning from user service';
    }
}
