<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Modules\Example\ExampleService;

class ExampleController extends Controller
{
    private $exampleService;
    public function __construct(ExampleService $exampleService)
    {
        $this->exampleService = $exampleService;
    }

    public function test(){
       return $this->exampleService->exampleMethod();
    }
}
