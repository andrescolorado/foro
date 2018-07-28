<?php

namespace App\Http\Controllers\Student;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;

class ForumController extends Controller
{
    public function index(User $user){

    	$forums = $user->students()->first()
    	->courses()
    	->with('forums.comments.student.user')
    	->get()
    	->pluck('forums')
    	->collapse();


    	return response()->json($forums);
    }
}
