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
        'name', 'last_name', 'email', 'username', 'password', 'avatar', 'state'
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

    /*
    |-------------------------------------------------------------------------------
    | QueryScope
    |-------------------------------------------------------------------------------
    |
    */

    /**
     * Scope a query to only include active users.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOrName($q, $name)
    {
        if($name)
            return $q->orWhere('name', 'like', "%{$name}%");
    }

    /**
     * Scope a query to only include active users.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOrLastName($q, $last_name)
    {
        if($last_name)
            return $q->orWhere('last_name', 'like', "%{$last_name}%");
    }

    /**
     * Scope a query to only include active users.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOrEmail($q, $email)
    {
        if($email)
            return $q->orWhere('email', 'like', "%{$email}%");
    }

    /**
     * Scope a query to only include active users.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOrUsername($q, $username)
    {
        if($username)
            return $q->orWhere('username', 'like', "%{$username}%");
    }
}
