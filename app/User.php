<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'last_name', 'email', 'username', 'password', 'avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /*
    |-------------------------------------------------------------------------------
    | Relationship
    |-------------------------------------------------------------------------------
    |
    */

    /**
     * Get relationship with students
     *
     * @return App\Student
     */
    public function students()
    {
        return $this->hasMany(Student::class, 'user_id');
    }

    /**
     * Get relationship with teacher
     *
     * @return App\Teacher
     */
    public function teachers()
    {
        return $this->hasMany(Teacher::class, 'user_id');
    }

    /**
     * Get relationship with teacher
     *
     * @return App\Administrator
     */
    public function administrators()
    {
        return $this->hasMany(Administrator::class, 'user_id');
    }
}
