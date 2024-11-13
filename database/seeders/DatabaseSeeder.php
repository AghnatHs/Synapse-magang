<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Komnews;
use App\Models\KomnewsCategory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Category::create([
            'name'=> 'Campus Life',
            'slug'=> 'campus_life'
        ]);
        Category::create([
            'name'=> 'Awards',
            'slug'=> 'awards'
        ]);
        Category::create([
            'name'=> 'Education',
            'slug'=> 'education'
        ]);
        Category::create([
            'name'=> 'Technology',
            'slug'=> 'technology'
        ]);
        Category::create([
            'name'=> 'Collaboration',
            'slug'=> 'collaboration'
        ]);
        Category::create([
            'name'=> 'Innovation',
            'slug'=> 'innovation'
        ]);

        Komnews::factory()->count(20)->create();
    }
}
