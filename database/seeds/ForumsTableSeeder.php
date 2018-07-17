<?php

use Illuminate\Database\Seeder;

use App\Course;

class ForumsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $courses = Course::all();

        foreach($courses as $key => $course)
        {
        	$course->forums()->saveMany(
        		factory(App\Forum::class, 10)->make()
        	);
        }
    }
}
