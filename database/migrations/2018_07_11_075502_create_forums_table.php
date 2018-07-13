<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateForumsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forums', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->longText('description')->nullable();
            $table->boolean('state')->default(true);

            // Relación con la tabla cursos
            $table->unsignedBigInteger('course_id');
            $table->foreign('course_id')
            ->references('id')
            ->on('courses')
            ->onDelete('cascade');

            $table->timestamps();
        });

        Schema::create('comment_forums', function (Blueprint $table) {
            $table->bigIncrements('id');
            // Relación con la tabla matricula
            $table->unsignedBigInteger('enrollment_id');
            $table->foreign('enrollment_id')
            ->references('id')
            ->on('enrollments')
            ->onDelete('cascade');

            // Relación con la tabla foros
            $table->unsignedBigInteger('forum_id');
            $table->foreign('forum_id')
            ->references('id')
            ->on('forums')
            ->onDelete('cascade');

            $table->unsignedBigInteger('parent')->default(0);
            $table->longText('comment');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comment_forums');
        Schema::dropIfExists('forums');
    }
}
