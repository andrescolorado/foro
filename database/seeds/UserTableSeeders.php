<?php

use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class UserTableSeeders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$permissions = Permission::all();
     	$roleRoot = Role::findByName('administrator');
     	$roleRoot->syncPermissions($permissions);

        factory(App\User::class, 'admin', 1)->create()
     	->each(function($admin){
     		$admin->assignRole('administrator');
     	});

     	// 
     	factory(App\User::class, 'user', 5)->create()
     	->each(function($teacher){
     		
     	});
    }
}
