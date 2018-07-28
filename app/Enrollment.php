<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Enrollment extends Model
{
    protected $fillable = [
    	'student_id', 'course_id', 'state'
    ]; 


    /*
    |-------------------------------------------------------------------------------
    | Relationship
    |-------------------------------------------------------------------------------
    |
    */

    /**
     * Get relationship with Forum
     *
     * @return App\Forum
     */
    public function forums()
    {
        return $this->belongsToMany(Forum::class, 'comment_forums', 'enrollment_id', 'forum_id')
        ->withPivot('id', 'parent', 'comment', 'created_at', 'updated_at');
    }

    /**
     * Get relationship with Student
     *
     * @return App\Student
     */
    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }
}
