<?php

use Faker\Generator as Faker;

$factory->define(App\Course::class, function (Faker $faker) {
    return [
        'name'			=>	$faker->title, 
        'description'	=>	$faker->text, 
        // 'teacher_id'	=>	factory(App\User::class, 'user')->create()->id
    ];
});
