<?php

namespace App\Modules\Example;
use App\Queries\UserQuery;
class ExampleService
{
    use UserQuery;
    public function exampleMethod(){
        return 'this is returning from example service';
    }
}
