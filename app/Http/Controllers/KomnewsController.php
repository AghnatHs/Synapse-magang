<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Komnews;
use App\Http\Controllers\Controller;

class KomnewsController extends Controller
{
    public function index()
    {
        return response()->json([
            'title' => 'KOMNEWS',
            'categories' => Category::all(),
            'komnews' => Komnews::with('categories')->get(),
            'headline' => Komnews::with('categories')->latest()->get()->first()
        ]);
    }

    public function show(Komnews $komnews)
    {
        $komnews->load('categories');
        return response()->json(['komnews' => $komnews]);
    }
}
