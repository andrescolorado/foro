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
}
