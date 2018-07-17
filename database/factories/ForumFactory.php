<?php

use Faker\Generator as Faker;

$factory->define(App\Forum::class, function (Faker $faker) {

    return [
        'name'			=>	$faker->title, 
        'description'	=>	$faker->text, 
        'state'			=>	true,
        // 'course_id'		=>	factory(App\Course::class)->create()->id
    ];
});
