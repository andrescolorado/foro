<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Forum extends Model
{
	/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
    	'name', 'description', 'state', 'course_id'
    ];  

    /*
    |-------------------------------------------------------------------------------
    | Relationship
    |-------------------------------------------------------------------------------
    |
    */

    /**
     * Get relationship with teacher
     *
     * @return App\Course
     */
    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }

    /**
     * Get relationship with Enrollment
     *
     * @return App\Enrollment
     */
    public function comments()
    {
        return $this->belongsToMany(Enrollment::class, 'comment_forums', 'forum_id', 'enrollment_id')
        ->withPivot('id', 'parent', 'comment', 'created_at', 'updated_at');
    }
}
