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
            'name' => 'Campus Life',
        ]);
        Category::create([
            'name' => 'Awards',
        ]);
        Category::create([
            'name' => 'Education',
        ]);
        Category::create([
            'name' => 'Technology',
        ]);
        Category::create([
            'name' => 'Collaboration',
        ]);
        Category::create([
            'name' => 'Innovation'
        ]);
    }
}
