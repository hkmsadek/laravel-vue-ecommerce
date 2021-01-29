<?php

namespace App\Queries;

use App\Models\User;

trait UserQuery
{

    /**
     * getUserByKeyValue
     * This method takes a key and search the key with the given value...
     *
     * @param  string $key
     * @param  int|string $value
     * @return object
     */
    public function getUserByKeyValue(string $key, string $value){
        return User::where($key, $value)->first();
    }

    /**
     * getUserWithLimit | Get a list of users with a limit..
     *
     * @param  int $limit
     * @return array
     */
    public function getUserWithLimit(int $limit){
        return User::limit($limit)->get();
    }
}
