<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role as Role;

class RolesTableSeeders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = ['administrator', 'student', 'teacher'];
        
        foreach ($roles as $key => $rol) {
        	Role::create(['name' => "{$rol}"]);
        }

    }
}
