<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->defineAs(App\User::class, 'user', function (Faker $faker) {

    return [
        'name'				=> 	$faker->firstName,
        'last_name'			=>	$faker->lastName,
        'username'			=>	$faker->unique()->userName,
        'email' 			=> 	$faker->unique()->safeEmail,
        'password' 			=> 	bcrypt('secret'),
        'remember_token'	=> 	str_random(10),
    ];
});


$factory->defineAs(App\User::class, 'admin', function (Faker $faker) {
    return [
        'name'				=>	'admin',
        'last_name'			=>	'',
        'username'			=>	'admin',
        'email' 			=> 	'admin@unap.co',
        'password' 			=> 	bcrypt('admin'),
        'state'             =>  true,
        'remember_token' 	=> 	str_random(10),
    ];
});
