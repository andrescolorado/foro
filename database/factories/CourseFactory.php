<?php

use Faker\Generator as Faker;

$factory->define(App\Course::class, function (Faker $faker) {
    return [
        'name'			=>	$faker->tittle, 
        'description'	=>	$faker->text, 
        'teacher_id'	=>	factory(App\User::class)->create()->id
    ];
});
