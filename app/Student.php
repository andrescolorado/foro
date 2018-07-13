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

}
