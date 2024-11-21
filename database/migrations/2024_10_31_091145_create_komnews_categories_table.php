<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('komnews_categories', function (Blueprint $table) {
            $table->unsignedBigInteger('komnews_id');
            $table->unsignedBigInteger('category_id');
            $table->foreign('komnews_id')->references('id')->on('komnews')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('komnews_categories');
    }
};
