<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Seeders extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Llenar la tabla Area_skills
        DB::table('users')->insert([
            ['name' => 'Jonathan', 
            'lastname'=>'Alexis',
            'email'=>'Jalexis@correo.com',
            'city'=>'Bariloche',
            'country'=>'Argentina',
            'Summary'=>'Estudiante de Ingenieria en Sistemas de Informacion',
            ],
        ]);

        DB::table('frameworks')->insert([
            ['name' => 'Laravel', 
            'level'=>'Avanzado',
            'year'=>'2020',
            ],
            ['name' => 'React',
            'level'=>'Basico',
            'year'=>'2022',
            ],
            ['name' => 'Angular',
            'level'=>'Basico',
            'year'=>'2023',
            ],
            ['name' => '.net',
            'level'=>'Avanzado',
            'year'=>'2021',
            ],
            ['name' => 'Django',
            'level'=>'Avanzado',
            'year'=>'2019',
            ],
        ]);
        DB::table('hobbies')->insert([
            ['name' => 'Dibujo', 
            'description'=>'Me gusta dibujar en mi tiempo libre',
            ],
            ['name' => 'Aquascaping', 
            'description'=>'Es maravilloso crear paisajes acuaticos',
            ],
            ['name' => 'Origami', 
            'description'=>'Suelo crear figuritas de papel para regalar',
            ],
            ['name' => 'Fotografia', 
            'description'=>'Me gusta sacar fotos de paisajes y animales',
            ],
            ['name' => 'Reposteria', 
            'description'=>'Me gusta hacer tortas y postres',
            ],
        ]);
    }
}
