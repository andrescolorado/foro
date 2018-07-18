<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
    	'name', 'description', 'teacher_id'
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
    public function teacher()
    {
        return $this->belongsTo(Teacher::class, 'teacher_id');
    }

    /**
     * Get relationship with teacher
     *
     * @return App\Forum
     */
    public function forums()
    {
        return $this->hasMany(Forum::class, 'course_id');
    }

    /**
     * Get relationship with teacher
     *
     * @return App\Student
     */
    public function students()
    {
        return $this->belongsToMany(Student::class, 'enrollments')
        ->withPivot('id','state', 'created_at', 'updated_at');
    }
}
