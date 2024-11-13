<?php

namespace App\Models;

use App\Models\Komnews;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'name'
    ];

    public function komnews()
    {
        return $this->belongsToMany(Komnews::class, 'komnews_categories', 'category_id', 'komnews_id');
    }
}
