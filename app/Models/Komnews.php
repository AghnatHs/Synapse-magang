<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Komnews extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'excerp',
        'image',
        'imageUrl'
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'komnews_categories');
    }

    protected static function booted()
    {
        static::creating(function ($news) {
            if (empty($news->slug)) {
                $news->slug = Str::slug($news->title) . '-' . time();
            }

            if (empty($news->excerp)) {
                $news->excerp = Str::limit(strip_tags($news->content), $limit = 50, $end = "...");
                $news->excerp = str_replace("&nbsp;", "", $news->excerp);
                $news->excerp = $news->excerp . '......';
            }

            $news->imageUrl = Storage::url($news->image);
        });

        static::updating(function ($news) {
            $news->slug = Str::slug($news->title) . '-' . time();
            $news->excerp = Str::limit(strip_tags($news->content), $limit = 50, $end = "...");
            $news->excerp = str_replace("&nbsp;", "", $news->excerp);
            $news->excerp = $news->excerp . '......';
            $news->imageUrl = Storage::url($news->image);
        });
    }
}
