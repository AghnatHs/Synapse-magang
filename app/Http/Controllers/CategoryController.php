<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Category $category) {
        $category->load('komnews');
        return response()->json([
            'title' => "Category : $category->name",
            'cat' => $category->name,
            'categories' => Category::all(),
            'komnews' => $category->komnews
        ]);
    }
}
