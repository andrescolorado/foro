<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
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
     * @return App\User
     */
    public function user()
    {
    	return $this->belongsTo(User::class, 'user_id');
    }
}
