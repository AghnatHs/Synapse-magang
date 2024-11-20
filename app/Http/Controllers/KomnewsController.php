<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Komnews;
use App\Models\Category;
use App\Http\Controllers\Controller;

class KomnewsController extends Controller
{
    public function index()
    {
        $today = Carbon::today(config('app.timezone'));
        return response()->json([
            'title' => 'KOMNEWS',
            'categories' => Category::all(),
            'komnews' => Komnews::with('categories')->latest()->get(),
            'headlines' => Komnews::with('categories')->whereDate('created_at', $today)->latest()->get()
        ]);
    }

    public function show(Komnews $komnews)
    {
        $komnews->load('categories');
        return response()->json(['komnews' => $komnews]);
    }
}
