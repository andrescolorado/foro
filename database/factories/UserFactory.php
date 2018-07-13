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

	$username = $faker->firstName;

    return [
        'name'				=> 	$username,
        'last_name'			=>	$faker->lastName,
        'username'			=>	trim($username),
        'email' 			=> 	$faker->unique()->safeEmail,
        'password' 			=> 	bcrypt('secret'),
        'remember_token'	=> 	str_random(10),
    ];
});


$factory->defineAs(App\User::class, 'admin', function (Faker $faker) {
    return [
        'name'				=>	'admin',
        'last_name'			=>	'',
        'username'			=>	'admin'
        'email' 			=> 	'admin@unap.co',
        'password' 			=> 	bcrypt('admin'),
        'remember_token' 	=> 	str_random(10),
    ];
});
