<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
    	'user_id'
    ];

    /*
    |-------------------------------------------------------------------------------
    | Relationship
    |-------------------------------------------------------------------------------
    |
    */

    /**
     * Get relationship with user
     *
     * @return Model
     */
    public function user()
    {
    	return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get relationship with teacher
     *
     * @return App\Course
     */
    public function courses()
    {
        return $this->belongsToMany(Course::class, 'enrollments')
        ->withPivot('id', 'state', 'created_at', 'updated_at');
    }

}
