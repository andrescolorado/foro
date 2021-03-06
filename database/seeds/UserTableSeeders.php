<?php

use Illuminate\Database\Seeder;

class UserTableSeeders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        factory(App\User::class, 'admin', 1)->create()
        ->each(function($user){
            $user->administrators()->save(
                new App\Administrator([
                    'user_id'   =>  $user->id
                ])
            );
        });

     	// 
     	// $teachers = factory(App\Teacher::class, 5)->create();
      //   $teachers->each(function($teacher){
      //       $teacher->courses()->saveMany(
      //           factory(App\Course::class, 1)->make()
      //       );
      //   });
    }
}
