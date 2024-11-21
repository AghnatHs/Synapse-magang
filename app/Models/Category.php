<?php

namespace App\Models;

use App\Models\Komnews;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

    protected static function booted()
    {
        static::creating(function ($cat) {
            if (empty($cat->slug)) {
                $cat->slug = Str::slug($cat->name);
            }
        });

        static::updating(function ($cat) {
            $cat->slug = Str::slug($cat->name);
        });
    }
}
