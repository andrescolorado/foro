<?php

use Illuminate\Database\Seeder;

class PermissionTableSeeders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $operations = [
        	1 	=>	[
        		'en'	=>	'index',
        		'es'	=>	'listar'
        	],
        	2	=>	[
        		'en'	=>	'create',
        		'es'	=>	'crear'
        	],
            3   =>  [
                'en'    =>  'show',
                'es'	=>	'mostrar'
            ],
        	4	=>	[
        		'en'	=>	'edit',
        		'es'	=>	'editar'
        	],
        	6	=>	[
        		'en'	=>	'delete',
        		'es'	=>	'eliminar'
        	],
        ];

        $objects = [
        	1 	=>	[
        		'en'	=>	'student',
        		'es'	=>	'estudiante'
        	],
        	2	=>	[
        		'en'	=>	'teacher',
        		'es'	=>	'docente'
        	],
        	3	=>	[
        		'en'	=>	'enrollment',
        		'es'	=>	'matricula'
        	],
        	4	=>	[
        		'en'	=>	'course',
        		'es'	=>	'curso'
        	],
        	5	=>	[
        		'en'	=>	'forum',
        		'es'	=>	'foto'
        	],
        	6	=>	[
        		'en'	=>	'comment',
        		'es'	=>	'comentario'
        	],
        ];

        foreach ($operations as $key => $operation) {
        	
        	foreach ($objects as $key2 => $object) {
        		
                $name = "{$operation['en']}.{$object['en']}";
                $description = "Permite {$operation['es']} {$object['es']}"
                $per = Permission::where('name', '=', $name)->first();

                if(is_null($per))
                {
                    $permission = Permission::create([
                        'name'          =>  $name,
                        'description'	=>	$description
                    ]);
                }
            }
        }
    }
}
